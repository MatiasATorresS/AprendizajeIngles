import SubjectLayout, { SubjectSection, SubjectList, LevelCard, LevelsRow, PracticeTip } from '../components/SubjectLayout';

export default function PresentPerfectHowLongForSince() {
  const basicExamples = [
    <li key="1"><strong>How long have you worked</strong> in this company? (<strong>¿Cuánto tiempo has trabajado</strong> en esta empresa?).</li>,
    <li key="2">She <strong>has played</strong> the piano <strong>since she was a child</strong>. (Ella ha tocado el piano <strong>desde que era niña</strong>).</li>,
    <li key="3">They <strong>have visited</strong> many countries <strong>for the last five years</strong>. (Han visitado muchos países <strong>durante los últimos cinco años</strong>).</li>,
  ];

  const intermediateExamples = [
    <li key="1">I <strong>have been studying</strong> English <strong>since I started college</strong>. (He estado estudiando inglés <strong>desde que empecé la universidad</strong>).</li>,
    <li key="2"><strong>How long have you known</strong> her? (<strong>¿Cuánto tiempo hace que la conoces</strong>?).</li>,
    <li key="3">They <strong>have lived</strong> in different countries <strong>for the last decade</strong>. (Han vivido en diferentes países <strong>durante la última década</strong>).</li>,
  ];

  const advancedExamples = [
    <li key="1">He <strong>has worked</strong> for various companies <strong>since 2005</strong>. (Ha trabajado para varias empresas <strong>desde 2005</strong>).</li>,
    <li key="2"><strong>How long have you been learning</strong> to play the guitar? (<strong>¿Cuánto tiempo llevas aprendiendo</strong> a tocar la guitarra?).</li>,
    <li key="3">They <strong>have known each other</strong> <strong>for over 20 years</strong>. (Se han conocido <strong>durante más de 20 años</strong>).</li>,
  ];

  return (
    <SubjectLayout
      tag="Present Perfect"
      title="How Long, For & Since"
      intro={
        <p>
          El Present Perfect con <strong>"how long," "for"</strong> y <strong>"since"</strong> se usa para describir acciones que comenzaron en el pasado y continúan en el presente, enfocándose en la duración.
        </p>
      }>
      <SubjectSection title="Uso de &quot;How Long&quot;">
        <p>Se usa para preguntar sobre la duración de una acción que comenzó en el pasado y continúa en el presente. Se coloca al inicio de la pregunta.</p>
        <SubjectList items={[
          '<strong>How long</strong> have you been studying? (¿Cuánto tiempo llevas estudiando?)',
        ]} />
      </SubjectSection>

      <SubjectSection title="Uso de &quot;For&quot;">
        <p>Se usa para indicar la duración total de una acción. Va seguido de un período de tiempo específico.</p>
        <SubjectList items={[
          'I have lived here <strong>for 10 years</strong>. (He vivido aquí por 10 años)',
          'She has worked there <strong>for a long time</strong>. (Ha trabajado allí por mucho tiempo)',
        ]} />
      </SubjectSection>

      <SubjectSection title="Uso de &quot;Since&quot;">
        <p>Se usa para indicar el punto de inicio de la acción. Va seguido de un momento específico en el tiempo.</p>
        <SubjectList items={[
          'He has worked here <strong>since 2018</strong>. (Ha trabajado aquí desde 2018)',
          'I have known her <strong>since childhood</strong>. (La he conocido desde la infancia)',
        ]} />
      </SubjectSection>

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
        Practica el uso de "how long," "for," y "since" en el Present Perfect para hablar sobre la duración de acciones pasadas con relevancia en el presente.
      </PracticeTip>
    </SubjectLayout>
  );
}
