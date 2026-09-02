import SubjectLayout, { SubjectSection, VerbTable, LevelCard, LevelsRow, PracticeTip } from '../components/SubjectLayout';

export default function EverNever() {
  const regularVerbs = [
    { base: 'work', form: 'worked' },
    { base: 'play', form: 'played' },
    { base: 'visit', form: 'visited' },
  ];

  const irregularVerbs = [
    { base: 'go', form: 'gone' },
    { base: 'eat', form: 'eaten' },
    { base: 'buy', form: 'bought' },
  ];

  const basicExamples = [
    <li key="1"><strong>Have you ever visited</strong> Berlin? (<strong>¿Alguna vez has visitado</strong> Berlín?)</li>,
    <li key="2"><strong>Haven't they ever been</strong> to Europe? (¿No han estado nunca en Europa?)</li>,
    <li key="3"><strong>Nothing like this has ever happened</strong> to us. (Nada como esto nos ha sucedido nunca).</li>,
  ];

  const intermediateExamples = [
    <li key="1">It's the first time that <strong>I've ever eaten</strong> snails. (Es la primera vez que <strong>como</strong> caracoles).</li>,
    <li key="2"><strong>This is the first time I've ever been</strong> to England. (Esta es la primera vez que <strong>he estado</strong> en Inglaterra).</li>,
  ];

  const advancedExamples = [
    <li key="1"><strong>I have never been</strong> to Italy. (Nunca <strong>he estado</strong> en Italia).</li>,
    <li key="2"><strong>They have traveled</strong> to many countries <strong>ever since</strong>. (Han viajado a muchos países <strong>desde entonces</strong>).</li>,
  ];

  return (
    <SubjectLayout
      tag="Present Perfect"
      title="Present Perfect: Ever & Never"
      intro={
        <p>
          Los adverbios <strong>"ever"</strong> y <strong>"never"</strong> se refieren a un tiempo no identificado, anterior al presente.
          "Ever" se utiliza en preguntas y oraciones negativas. "Never" significa "nunca antes de ahora".
        </p>
      }>
      <SubjectSection title="Uso de &quot;Ever&quot;">
        <p>
          Se utiliza en preguntas, preguntas negativas y oraciones negativas con "nothing + ever" o "nobody + ever".
        </p>
      </SubjectSection>

      <SubjectSection title="Uso de &quot;Never&quot;">
        <p>
          Significa "nunca antes de ahora" y se coloca antes del verbo principal (en "past participle").
        </p>
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
        Practica el uso de "ever" y "never" en el Present Perfect para expresar experiencias y situaciones en tu vida.
      </PracticeTip>
    </SubjectLayout>
  );
}
