export const CATEGORY_LABELS = {
  verb_form: 'Forma verbal',
  negation: 'Negación',
  question: 'Preguntas',
  participle: 'Participio',
  time_expression: 'Expresiones de tiempo',
  other: 'Otros aspectos',
};

export function parseExerciseResults(value) {
  try {
    const parsed = typeof value === 'string' ? JSON.parse(value) : value;
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function percentage(correct, total) {
  return total ? Math.round((correct / total) * 100) : null;
}

export function summarizeProgress(exercises) {
  const groups = new Map();
  let totalCorrect = 0;
  let totalAnswers = 0;

  for (const exercise of exercises) {
    const subject = exercise.subject || 'Sin contenido';
    if (!groups.has(subject)) {
      groups.set(subject, {
        subject, exercises: 0, correct: 0, answers: 0,
        errors: {}, attempts: [],
      });
    }
    const group = groups.get(subject);
    group.exercises += 1;
    const results = parseExerciseResults(exercise.results)
      .filter((item) => item && typeof item.isCorrect === 'boolean');
    const correct = results.filter((item) => item.isCorrect).length;
    group.correct += correct;
    group.answers += results.length;
    totalCorrect += correct;
    totalAnswers += results.length;

    for (const result of results) {
      if (!result.isCorrect && CATEGORY_LABELS[result.category]) {
        group.errors[result.category] = (group.errors[result.category] || 0) + 1;
      }
    }
    if (results.length) {
      group.attempts.push({
        id: exercise.id,
        date: exercise.created_at,
        percent: percentage(correct, results.length),
      });
    }
  }

  return {
    exercises: exercises.length,
    correct: totalCorrect,
    answers: totalAnswers,
    percent: percentage(totalCorrect, totalAnswers),
    subjects: [...groups.values()].map((group) => ({
      ...group,
      percent: percentage(group.correct, group.answers),
      attempts: group.attempts.sort((a, b) =>
        new Date(a.date || 0) - new Date(b.date || 0) || Number(a.id) - Number(b.id)),
      commonErrors: Object.entries(group.errors)
        .sort((a, b) => b[1] - a[1])
        .map(([category, count]) => ({ category, label: CATEGORY_LABELS[category], count })),
    })).sort((a, b) => a.subject.localeCompare(b.subject, 'es')),
  };
}

export function recommendedReview(progress) {
  const candidates = progress.subjects.flatMap((subject) =>
    subject.commonErrors.map((error) => ({
      subject: subject.subject,
      category: error.category,
      categoryLabel: error.label,
      errorCount: error.count,
      percent: subject.percent ?? 100,
    })));
  candidates.sort((a, b) => b.errorCount - a.errorCount || a.percent - b.percent ||
    a.subject.localeCompare(b.subject, 'es'));
  if (candidates.length) return candidates[0];
  const subject = [...progress.subjects].sort((a, b) =>
    (a.percent ?? 100) - (b.percent ?? 100) || a.subject.localeCompare(b.subject, 'es'))[0];
  return subject ? {
    subject: subject.subject, category: null, categoryLabel: null,
    errorCount: 0, percent: subject.percent,
  } : null;
}
