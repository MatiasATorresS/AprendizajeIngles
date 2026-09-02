import SubjectLayout, { SubjectSection, SubjectList, VerbTable, LevelCard, LevelsRow, PracticeTip } from '../components/SubjectLayout';

export default function PresentSimple() {
  const regularVerbs = [
    { base: 'work', form: 'works' },
    { base: 'play', form: 'plays' },
    { base: 'visit', form: 'visits' },
    { base: 'help', form: 'helps' },
    { base: 'live', form: 'lives' },
  ];

  const irregularVerbs = [
    { base: 'go', form: 'goes' },
    { base: 'eat', form: 'eats' },
    { base: 'buy', form: 'buys' },
    { base: 'have', form: 'has' },
    { base: 'do', form: 'does' },
  ];

  const basicExamples = [
    <li key="1">He <strong>works</strong> at a software company. (Él <strong>trabaja</strong> en una empresa de software).</li>,
    <li key="2">She <strong>plays</strong> the piano. (Ella <strong>toca</strong> el piano).</li>,
    <li key="3">They <strong>visit</strong> their grandparents every weekend. (Ellos <strong>visitan</strong> a sus abuelos cada fin de semana).</li>,
  ];

  const intermediateExamples = [
    <li key="1">I <strong>do</strong> my best in every project. (Hago lo mejor en cada proyecto).</li>,
    <li key="2">The company <strong>sells</strong> high-quality products. (La empresa <strong>vende</strong> productos de alta calidad).</li>,
    <li key="3">She always <strong>goes</strong> to the gym. (Ella siempre <strong>va</strong> al gimnasio).</li>,
  ];

  const advancedExamples = [
    <li key="1">The scientists <strong>conduct</strong> experiments to gather data. (Los científicos <strong>realizan</strong> experimentos para recopilar datos).</li>,
    <li key="2">The artist <strong>creates</strong> beautiful paintings. (El artista <strong>crea</strong> hermosas pinturas).</li>,
    <li key="3">The company <strong>invests</strong> in innovative technologies. (La empresa <strong>invierte</strong> en tecnologías innovadoras).</li>,
  ];

  return (
    <SubjectLayout
      tag="Tiempo Verbal"
      title="Present Simple"
      intro={
        <p>
          El <strong>Present Simple</strong> se utiliza para describir acciones habituales, verdades generales y rutinas. Es uno de los tiempos más importantes del inglés.
        </p>
      }>
      <SubjectSection title="Forma Positiva">
        <p>Se utiliza el verbo en su forma base (infinitivo). En tercera persona singular (He/She/It), se añade <strong>-s</strong> o <strong>-es</strong>.</p>
        <SubjectList items={[
          'He <strong>works</strong> at a software company. (Él trabaja en una empresa de software)',
          'She <strong>plays</strong> the piano. (Ella toca el piano)',
          'They <strong>visit</strong> their grandparents. (Ellos visitan a sus abuelos)',
        ]} />
      </SubjectSection>

      <SubjectSection title="Forma Negativa">
        <p>Se usa <strong>do not (don't)</strong> o <strong>does not (doesn't)</strong> antes del verbo en forma base.</p>
        <SubjectList items={[
          "I <strong>don't work</strong> on weekends. (No trabajo los fines de semana)",
          "She <strong>doesn't play</strong> soccer. (Ella no juega al fútbol)",
        ]} />
      </SubjectSection>

      <SubjectSection title="Forma Interrogativa">
        <p>Se usa <strong>Do</strong> o <strong>Does</strong> al inicio de la pregunta, seguido del sujeto y el verbo en forma base.</p>
        <SubjectList items={[
          '<strong>Do I work?</strong> (¿Trabajo?)',
          '<strong>Does she play?</strong> (¿Ella juega?)',
        ]} />
      </SubjectSection>

      <VerbTable title="Verbos Regulares en el Present Simple" baseLabel="Verbo Infinitivo" formLabel="Present Simple (He/She/It)" rows={regularVerbs} />
      <VerbTable title="Verbos Irregulares en el Present Simple" baseLabel="Verbo Infinitivo" formLabel="Present Simple (He/She/It)" rows={irregularVerbs} />

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
        Practica el uso del Present Simple en diferentes situaciones para mejorar tu comprensión y fluidez en inglés.
      </PracticeTip>
    </SubjectLayout>
  );
}
