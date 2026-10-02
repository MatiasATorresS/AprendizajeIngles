function gradeExercise(pending, userAnswers) {
  if (!pending || !Array.isArray(pending.questions) ||
      !userAnswers || typeof userAnswers !== 'object' || Array.isArray(userAnswers) ||
      pending.questions.some((question, index) => !question.alternatives.includes(userAnswers[index]))) {
    return null;
  }
  const points = { easy: 1, medium: 2, hard: 3 }[pending.difficulty];
  if (!points) return null;
  const results = pending.questions.map((question, index) => ({
    question: question.question,
    userAnswer: userAnswers[index],
    correctAnswer: question.correctAnswer,
    isCorrect: userAnswers[index] === question.correctAnswer,
    category: question.category || null,
    explanation: question.explanation || null,
  }));
  return { results, score: results.filter((result) => result.isCorrect).length * points };
}

module.exports = { gradeExercise };
