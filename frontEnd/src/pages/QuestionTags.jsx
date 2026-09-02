import SubjectLayout, { SubjectSection, SubjectList, PracticeTip } from '../components/SubjectLayout';

export default function QuestionTags() {
  return (
    <SubjectLayout
      tag="Estructura Gramatical"
      title="Question Tags"
      intro={
        <p>
          Las <strong>Question Tags</strong> (etiquetas interrogativas) son estructuras cortas al final de una afirmación que se usan para confirmar información o buscar la aprobación del oyente.
        </p>
      }>
      <SubjectSection title="Reglas de Formación">
        <p>Para formar una Question Tag, sigue estas reglas:</p>
        <SubjectList items={[
          'Si la afirmación es <strong>positiva</strong>, la Question Tag será <strong>negativa</strong>.',
          'Si la afirmación es <strong>negativa</strong>, la Question Tag será <strong>positiva</strong>.',
          'Utiliza el mismo verbo auxiliar de la afirmación principal.',
          'Agrega el pronombre correcto en la Question Tag.',
        ]} />
      </SubjectSection>

      <SubjectSection title="Ejemplos con Afirmación Positiva">
        <p>La afirmación es positiva → la tag es negativa:</p>
        <SubjectList items={[
          "You are a student, <strong>aren't you</strong>? (Eres estudiante, ¿verdad?)",
          "She works here, <strong>doesn't she</strong>? (Ella trabaja aquí, ¿verdad?)",
          "We have met before, <strong>haven't we</strong>? (Nos hemos visto antes, ¿verdad?)",
        ]} />
      </SubjectSection>

      <SubjectSection title="Ejemplos con Afirmación Negativa">
        <p>La afirmación es negativa → la tag es positiva:</p>
        <SubjectList items={[
          "He doesn't like coffee, <strong>does he</strong>? (Él no le gusta el café, ¿o sí?)",
          "You aren't ready, <strong>are you</strong>? (No estás listo, ¿o sí?)",
          "They haven't called, <strong>have they</strong>? (No han llamado, ¿verdad?)",
        ]} />
      </SubjectSection>

      <PracticeTip>
        Practica las Question Tags en conversaciones cotidianas. Son muy comunes en el inglés hablado, especialmente en el inglés británico.
      </PracticeTip>
    </SubjectLayout>
  );
}