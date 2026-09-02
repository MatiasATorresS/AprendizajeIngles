import SubjectLayout, { SubjectSection, SubjectList, VerbTable, LevelCard, LevelsRow, PracticeTip } from '../components/SubjectLayout';

export default function PresentPerfect() {
  const regularVerbs = [
    { base: 'work', form: 'worked' },
    { base: 'play', form: 'played' },
    { base: 'visit', form: 'visited' },
    { base: 'help', form: 'helped' },
    { base: 'live', form: 'lived' },
  ];

  const irregularVerbs = [
    { base: 'go', form: 'gone' },
    { base: 'eat', form: 'eaten' },
    { base: 'buy', form: 'bought' },
    { base: 'have', form: 'had' },
    { base: 'do', form: 'done' },
  ];

  const basicExamples = [
    <li key="1"><strong>I have worked</strong> for five years. (He trabajado durante cinco años)</li>,
    <li key="2"><strong>She has visited</strong> London. (Ella ha visitado Londres)</li>,
  ];

  const intermediateExamples = [
    <li key="1"><strong>He has never eaten</strong> sushi. (Él nunca ha comido sushi)</li>,
    <li key="2"><strong>They have traveled</strong> to many countries. (Ellos han viajado a muchos países)</li>,
  ];

  const advancedExamples = [
    <li key="1"><strong>By the time we arrived, they had already finished</strong> the project. (Para cuando llegamos, ya habían terminado el proyecto)</li>,
    <li key="2"><strong>She had never seen</strong> such a beautiful sunset before. (Ella nunca había visto una puesta de sol tan hermosa)</li>,
  ];

  return (
    <SubjectLayout
      tag="Tiempo Verbal"
      title="Present Perfect"
      intro={
        <p>
          El <strong>Present Perfect</strong> se utiliza para expresar acciones que tienen relevancia en el presente, pero que ocurrieron en un tiempo no especificado en el pasado. Se forma con <strong>have/has + participio pasado</strong>.
        </p>
      }>
      <SubjectSection title="Forma Positiva">
        <p>Se utiliza <strong>have</strong> (I/You/We/They) o <strong>has</strong> (He/She/It) + participio pasado.</p>
        <SubjectList items={[
          'I <strong>have worked</strong> (He trabajado)',
          'She <strong>has visited</strong> (Ella ha visitado)',
          'They <strong>have played</strong> (Ellos han jugado)',
        ]} />
      </SubjectSection>

      <SubjectSection title="Forma Negativa">
        <p>Se añade <strong>not</strong> después de "have" o "has": <strong>haven't / hasn't</strong>.</p>
        <SubjectList items={[
          'I <strong>have not worked</strong> (No he trabajado)',
          'She <strong>has not visited</strong> (Ella no ha visitado)',
        ]} />
      </SubjectSection>

      <SubjectSection title="Forma Interrogativa">
        <p>Se invierte el orden: <strong>Have/Has + sujeto + participio pasado</strong>.</p>
        <SubjectList items={[
          '<strong>Have I worked?</strong> (¿He trabajado?)',
          '<strong>Has she visited?</strong> (¿Ella ha visitado?)',
        ]} />
      </SubjectSection>

      <VerbTable title="Verbos Regulares en el Present Perfect" baseLabel="Verbo Infinitivo" formLabel="Participio Pasado" rows={regularVerbs} />
      <VerbTable title="Verbos Irregulares en el Present Perfect" baseLabel="Verbo Infinitivo" formLabel="Participio Pasado" rows={irregularVerbs} />

      <h2>Ejemplos en Diferentes Niveles</h2>
      <LevelsRow>
        <LevelCard level="basic" title="🟢 Nivel Básico">
          {basicExamples}
        </LevelCard>
        <LevelCard level="medium" title="🟡 Nivel Medio">
          {intermediateExamples}
        </LevelCard>
        <LevelCard level="advanced" title="🔴 Nivel Avanzado">
          {advancedExamples}
        </LevelCard>
      </LevelsRow>

      <PracticeTip>
        Practica el Present Perfect en diversas situaciones para fortalecer tu comprensión y habilidades en inglés.
      </PracticeTip>
    </SubjectLayout>
  );
}
