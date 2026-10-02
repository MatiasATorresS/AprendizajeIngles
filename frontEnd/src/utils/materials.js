export const MATERIAL_BY_SUBJECT = {
  'Simple Past': '1',
  'Past Continuous': '2',
  'Present Perfect': '3',
  'Past Simple Passive': '8',
  'Present Simple': '9',
  'Present Simple Passive': '10',
};

export function materialPath(subject) {
  const id = MATERIAL_BY_SUBJECT[subject];
  return id ? `/materials/${id}` : '/materials';
}
