const UNIT_DESCRIPTIONS = {
  1: 'Cuenta hechos y describe situaciones que ocurrieron en el pasado.',
  2: 'Conecta experiencias pasadas con el presente y habla de las personas que te rodean.',
  3: 'Expresa necesidades, posibilidades y predicciones; describe acciones en voz pasiva.',
  4: 'Añade información sobre personas y cosas y confirma ideas con preguntas breves.',
};

const SEED_UNIT_DESCRIPTIONS = new Set([
  'Describe actions that happened in the past.',
  'Describe actions in the past that continue in the present.',
  'Express needs and probabilities.',
  'Provide essential or additional information using relative clauses.',
]);

const MATERIAL_DESCRIPTIONS = {
  1: 'Aprende a contar acciones que terminaron en el pasado.',
  2: 'Describe acciones que estaban ocurriendo en un momento del pasado.',
  3: 'Habla de experiencias y acciones pasadas relacionadas con el presente.',
  4: 'Pregunta por experiencias y expresa lo que has hecho o nunca has hecho.',
  5: 'Indica desde cuándo o durante cuánto tiempo ocurre una situación.',
  6: 'Expresa obligaciones, necesidades y grados de probabilidad.',
  7: 'Habla de lo que crees que sucederá y de lo que prometes hacer.',
  8: 'Describe acciones pasadas cuando importa más lo ocurrido que quién las hizo.',
  9: 'Expresa hábitos, rutinas y hechos que suelen ser verdaderos.',
  10: 'Describe procesos y hechos habituales en voz pasiva.',
  11: 'Añade información esencial o adicional sobre personas, lugares y cosas.',
  12: 'Confirma una idea o invita a responder con una pregunta breve al final.',
};

export function unitDescription(unit) {
  const description = unit.descripcion?.trim();
  return (!description || SEED_UNIT_DESCRIPTIONS.has(description))
    ? UNIT_DESCRIPTIONS[unit.id] || 'Explora los contenidos de esta unidad.'
    : description;
}

export function materialDescription(material) {
  const description = material.descripcion?.trim();
  return (!description || /^description for\b/i.test(description))
    ? MATERIAL_DESCRIPTIONS[material.id] || 'Explora este contenido y ponlo en práctica.'
    : description;
}
