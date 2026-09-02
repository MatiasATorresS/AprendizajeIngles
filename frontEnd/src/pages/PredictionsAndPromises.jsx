import SubjectLayout, { SubjectSection, SubjectList, LevelCard, LevelsRow, PracticeTip } from '../components/SubjectLayout';

export default function PredictionsAndPromises() {
  const basicExamples = [
    <li key="1"><strong>I think it will rain</strong> later. (<strong>Creo que lloverá</strong> más tarde).</li>,
    <li key="2"><strong>She'll probably arrive</strong> in the evening. (<strong>Probablemente llegará</strong> por la tarde).</li>,
    <li key="3"><strong>Don't worry, I promise I'll call</strong> you. (<strong>No te preocupes, prometo que te llamaré</strong>).</li>,
  ];

  const intermediateExamples = [
    <li key="1"><strong>Based on the weather forecast, it's likely that it'll be sunny</strong>. (<strong>Según el pronóstico, es probable que haga sol</strong>).</li>,
    <li key="2"><strong>By this time next year, they will have finished</strong> the construction. (<strong>Para esta época el próximo año, habrán terminado</strong> la construcción).</li>,
    <li key="3"><strong>I assure you, I won't let you down</strong>. (<strong>Te aseguro que no te decepcionaré</strong>).</li>,
  ];

  const advancedExamples = [
    <li key="1"><strong>It's almost certain that the team will win</strong> the championship. (<strong>Es casi seguro que el equipo ganará</strong> el campeonato).</li>,
    <li key="2"><strong>Once I give my word, I will undoubtedly keep it</strong>. (<strong>Una vez que doy mi palabra, sin duda la cumpliré</strong>).</li>,
    <li key="3"><strong>By the end of the year, they will have accomplished</strong> all their goals. (<strong>Para fin de año, habrán logrado</strong> todos sus objetivos).</li>,
  ];

  return (
    <SubjectLayout
      tag="Will / Futuro"
      title="Predicciones y Promesas"
      intro={
        <p>
          En inglés es importante saber expresar predicciones sobre el futuro y compromisos personales. Usamos <strong>will</strong> para predicciones espontáneas y promesas directas.
        </p>
      }>
      <SubjectSection title="Expresión de Predicciones">
        <p>Las predicciones se expresan con frases como <strong>I think</strong>, <strong>probably</strong>, <strong>it's likely</strong>, indicando lo que creemos que sucederá.</p>
        <SubjectList items={[
          'I think <strong>it will rain</strong> tomorrow. (Creo que lloverá mañana)',
          "She'll <strong>probably be</strong> late. (Probablemente llegará tarde)",
        ]} />
      </SubjectSection>

      <SubjectSection title="Expresión de Promesas">
        <p>Las promesas se hacen con <strong>I promise</strong>, <strong>I assure you</strong>, <strong>I won't let you down</strong> para comprometernos con una acción.</p>
        <SubjectList items={[
          "I <strong>promise I'll call</strong> you. (Prometo que te llamaré)",
          "I <strong>won't let</strong> you down. (No te decepcionaré)",
        ]} />
      </SubjectSection>

      <SubjectSection title="Alta Certidumbre">
        <p>Para alta certidumbre usamos <strong>it's almost certain</strong>, <strong>undoubtedly</strong>, <strong>it's inevitable</strong>.</p>
        <SubjectList items={[
          "<strong>It's almost certain</strong> that they'll win. (Es casi seguro que ganarán)",
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
        Practica el uso de estas expresiones para comunicar predicciones y promesas de manera efectiva en inglés.
      </PracticeTip>
    </SubjectLayout>
  );
}
