import SubjectLayout, { SubjectSection, SubjectList, VerbTable, LevelCard, LevelsRow, PracticeTip } from '../components/SubjectLayout';

export default function PastSimple() {
  const regularVerbs = [
    { base: 'work', form: 'worked' },
    { base: 'play', form: 'played' },
    { base: 'visit', form: 'visited' },
    { base: 'help', form: 'helped' },
    { base: 'live', form: 'lived' },
    { base: 'clean', form: 'cleaned' },
    { base: 'jump', form: 'jumped' },
    { base: 'talk', form: 'talked' },
    { base: 'watch', form: 'watched' },
    { base: 'call', form: 'called' },
    { base: 'play', form: 'played' },
    { base: 'learn', form: 'learned' },
    { base: 'open', form: 'opened' },
    { base: 'close', form: 'closed' },
    { base: 'move', form: 'moved' },
    { base: 'listen', form: 'listened' },
    { base: 'cook', form: 'cooked' },
    { base: 'smile', form: 'smiled' },
    { base: 'like', form: 'liked' },
    { base: 'visit', form: 'visited' },
    { base: 'watch', form: 'watched' },
    { base: 'play', form: 'played' },
    { base: 'learn', form: 'learned' },
    { base: 'open', form: 'opened' },
    { base: 'close', form: 'closed' },
    { base: 'move', form: 'moved' },
    { base: 'listen', form: 'listened' },
    { base: 'cook', form: 'cooked' },
    { base: 'smile', form: 'smiled' },
    { base: 'like', form: 'liked' },
    { base: 'visit', form: 'visited' },
  ];

  const irregularVerbs = [
    { base: 'go', form: 'went' },
    { base: 'eat', form: 'ate' },
    { base: 'buy', form: 'bought' },
    { base: 'have', form: 'had' },
    { base: 'do', form: 'did' },
    { base: 'be', form: 'was/were' },
    { base: 'begin', form: 'began' },
    { base: 'break', form: 'broke' },
    { base: 'choose', form: 'chose' },
    { base: 'come', form: 'came' },
    { base: 'drive', form: 'drove' },
    { base: 'find', form: 'found' },
    { base: 'give', form: 'gave' },
    { base: 'have', form: 'had' },
    { base: 'know', form: 'knew' },
    { base: 'leave', form: 'left' },
    { base: 'make', form: 'made' },
    { base: 'put', form: 'put' },
    { base: 'say', form: 'said' },
    { base: 'take', form: 'took' },
    { base: 'begin', form: 'began' },
    { base: 'break', form: 'broke' },
    { base: 'choose', form: 'chose' },
    { base: 'come', form: 'came' },
    { base: 'drive', form: 'drove' },
    { base: 'find', form: 'found' },
    { base: 'give', form: 'gave' },
    { base: 'know', form: 'knew' },
    { base: 'leave', form: 'left' },
    { base: 'make', form: 'made' },
    { base: 'put', form: 'put' },
    { base: 'say', form: 'said' },
    { base: 'take', form: 'took' },
  ];

  const basicExamples = [
    <li key="1">
      <strong>I watched</strong> a movie yesterday. (<strong>Vi</strong> una
      película ayer)
    </li>,
    <li key="2">
      <strong>She cooked</strong> dinner last night. (Ella{' '}
      <strong>cocinó</strong> la cena anoche)
    </li>,
    <li key="3">
      We <strong>played</strong> soccer in the park. (Jugamos fútbol en el
      parque)
    </li>,
    <li key="4">
      He <strong>worked</strong> late at the office. (Él trabajó tarde en la
      oficina)
    </li>,
    <li key="5">
      They <strong>visited</strong> their grandparents. (Ellos visitaron a sus
      abuelos)
    </li>,
  ];

  const intermediateExamples = [
    <li key="1">
      <strong>He read</strong> an interesting book last week. (Él{' '}
      <strong>leyó</strong> un libro interesante la semana pasada)
    </li>,
    <li key="2">
      <strong>They went</strong> to the beach on Sunday. (Ellos{' '}
      <strong>fueron</strong> a la playa el domingo)
    </li>,
    <li key="3">
      She <strong>found</strong> a hidden treasure. (Ella{' '}
      <strong>encontró</strong> un tesoro oculto)
    </li>,
    <li key="4">
      We <strong>drove</strong> to the mountains. (Nosotros{' '}
      <strong>conducimos</strong> a las montañas)
    </li>,
    <li key="5">
      I <strong>chose</strong> the blue shirt. (Elegí la camisa azul)
    </li>,
  ];

  const advancedExamples = [
    <li key="1">
      <strong>She had never visited</strong> that museum before. (Ella nunca{' '}
      <strong>había visitado</strong> ese museo antes)
    </li>,
    <li key="2">
      <strong>We had already finished</strong> the project by the time they
      arrived. (Ya <strong>habíamos terminado</strong> el proyecto cuando
      llegaron)
    </li>,
    <li key="3">
      He <strong>was</strong> very tired after the long journey. (Él{' '}
      <strong>estaba</strong> muy cansado después del largo viaje)
    </li>,
    <li key="4">
      They <strong>began</strong> a new chapter in their lives. (Ellos{' '}
      <strong>empezaron</strong> un nuevo capítulo en sus vidas)
    </li>,
    <li key="5">
      She <strong>made</strong> a significant contribution to the project. (Ella
      <strong>realizó</strong> una contribución significativa al proyecto)
    </li>,
  ];

  return (
    <SubjectLayout
      tag="Tiempo Verbal"
      title="Past Simple"
      intro={
        <p>
          El <strong>Past Simple</strong> es un tiempo verbal en inglés que se
          utiliza principalmente para expresar acciones que ocurrieron en el
          pasado y ya han sido completadas.
        </p>
      }>
      <SubjectSection title="Forma Positiva">
        <p>
          En la forma positiva, se utiliza el verbo en su forma pasada. Para la
          mayoría de los verbos, esto implica agregar "-ed" al final del verbo.
        </p>
        <SubjectList items={[
          'I <strong>worked</strong> (Trabajé)',
          'She <strong>visited</strong> (Ella visitó)',
          'They <strong>played</strong> (Jugaron)',
        ]} />
      </SubjectSection>

      <SubjectSection title="Forma Negativa">
        <p>
          En la forma negativa, se utiliza el verbo auxiliar "did not" (didn't)
          seguido del verbo en su forma base.
        </p>
        <SubjectList items={[
          "I <strong>didn't work</strong> (No trabajé)",
          "She <strong>didn't visit</strong> (Ella no visitó)",
          "They <strong>didn't play</strong> (No jugaron)",
        ]} />
      </SubjectSection>

      <SubjectSection title="Forma Interrogativa">
        <p>
          En la forma interrogativa, se utiliza el verbo auxiliar "did" seguido
          del sujeto y el verbo en su forma base.
        </p>
        <SubjectList items={[
          '<strong>Did I work?</strong> (¿Trabajé?)',
          '<strong>Did she visit?</strong> (¿Ella visitó?)',
          '<strong>Did they play?</strong> (¿Jugaron?)',
        ]} />
      </SubjectSection>

      <VerbTable title="Verbos Regulares en el Past Simple" baseLabel="Verbo Infinitivo" formLabel="Pasado Simple" rows={regularVerbs} />
      <VerbTable title="Verbos Irregulares en el Past Simple" baseLabel="Verbo Infinitivo" formLabel="Pasado Simple" rows={irregularVerbs} />

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
        Practica utilizando el Past Simple en diferentes situaciones para mejorar tu comprensión y fluidez en inglés.
      </PracticeTip>
    </SubjectLayout>
  );
}
