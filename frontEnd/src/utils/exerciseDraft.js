const prefix = 'exercise-draft:';

export function readDraft(storage, id, questions) {
  if (!id) return {};
  try {
    const saved = JSON.parse(storage.getItem(prefix + id));
    if (!saved || typeof saved !== 'object' || Array.isArray(saved)) return {};
    return Object.fromEntries(questions.flatMap((question, index) =>
      question.alternatives.includes(saved[index]) ? [[index, saved[index]]] : []));
  } catch {
    return {};
  }
}

export function writeDraft(storage, id, answers) {
  try {
    if (id) storage.setItem(prefix + id, JSON.stringify(answers));
  } catch { /* El ejercicio sigue disponible mientras esta pestaña permanezca abierta. */ }
}

export function clearDraft(storage, id) {
  try {
    if (id) storage.removeItem(prefix + id);
  } catch { /* El dato temporal caducará con la sesión del navegador. */ }
}
