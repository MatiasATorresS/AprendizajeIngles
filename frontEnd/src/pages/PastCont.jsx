import SubjectLayout, { SubjectSection, SubjectList, VerbTable, LevelCard, LevelsRow, PracticeTip } from '../components/SubjectLayout';

export default function PastCont() {
  const regularVerbs = [
    { base: 'work', form: 'was/were working' },
    { base: 'play', form: 'was/were playing' },
    { base: 'visit', form: 'was/were visiting' },
  ];

  const irregularVerbs = [
    { base: 'go', form: 'was/were going' },
    { base: 'eat', form: 'was/were eating' },
    { base: 'buy', form: 'was/were buying' },
  ];

  const basicExamples = [
    <li key="1"><strong>I was working</strong> at the office yesterday. (Yo <strong>estaba trabajando</strong> en la oficina ayer).</li>,
    <li key="2"><strong>She was playing</strong> with her friends last evening. (Ella <strong>estaba jugando</strong> con sus amigos anoche).</li>,
  ];

  const intermediateExamples = [
    <li key="1"><strong>They were studying</strong> when I called. (Ellos <strong>estaban estudiando</strong> cuando llamé).</li>,
    <li key="2"><strong>He was watching</strong> TV while it rained. (Él <strong>estaba viendo</strong> la televisión mientras llovía).</li>,
  ];

  const advancedExamples = [
    <li key="1"><strong>She was taking a nap</strong> in the afternoon. (Ella <strong>estaba tomando una siesta</strong> por la tarde).</li>,
    <li key="2"><strong>We were discussing</strong> the project's details. (Nosotros <strong>estábamos discutiendo</strong> los detalles del proyecto).</li>,
  ];

  return (
    <SubjectLayout
      tag="Tiempo Verbal"
      title="Past Continuous"
      intro={
        <p>
          El <strong>Past Continuous</strong> se utiliza para expresar acciones que estaban ocurriendo en un momento específico en el pasado.
        </p>
      }>
      <SubjectSection title="Forma Positiva">
        <p>Se utiliza el verbo "to be" en pasado (was/were) + verbo con -ing.</p>
        <SubjectList items={[
          'I <strong>was working</strong> (Yo estaba trabajando)',
          'She <strong>was playing</strong> (Ella estaba jugando)',
        ]} />
      </SubjectSection>

      <SubjectSection title="Forma Negativa">
        <p>Se añade "not" después de "was" o "were".</p>
        <SubjectList items={[
          "I <strong>wasn't working</strong> (Yo no estaba trabajando)",
          "She <strong>wasn't playing</strong> (Ella no estaba jugando)",
        ]} />
      </SubjectSection>

      <SubjectSection title="Forma Interrogativa">
        <p>Se invierte el orden de "was/were" y el sujeto.</p>
        <SubjectList items={[
          '<strong>Was I working?</strong> (¿Estaba yo trabajando?)',
          '<strong>Was she playing?</strong> (¿Estaba ella jugando?)',
        ]} />
      </SubjectSection>

      <VerbTable title="Verbos Regulares en el Past Continuous" baseLabel="Verbo Infinitivo" formLabel="Past Continuous" rows={regularVerbs} />
      <VerbTable title="Verbos Irregulares en el Past Continuous" baseLabel="Verbo Infinitivo" formLabel="Past Continuous" rows={irregularVerbs} />

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
        Practica utilizando el Past Continuous en diferentes situaciones para mejorar tu comprensión y fluidez en inglés.
      </PracticeTip>
    </SubjectLayout>
  );
}
