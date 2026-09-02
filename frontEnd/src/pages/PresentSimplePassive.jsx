import SubjectLayout, { SubjectSection, SubjectList, LevelCard, LevelsRow, PracticeTip } from '../components/SubjectLayout';

export default function PresentSimplePassive() {
  const basicExamples = [
    <li key="1"><strong>The documents are prepared</strong> every morning. (Los documentos <strong>son preparados</strong> cada mañana).</li>,
    <li key="2"><strong>English lessons are taught</strong> at this school. (Lecciones de inglés <strong>son enseñadas</strong> en esta escuela).</li>,
    <li key="3"><strong>These cookies are baked</strong> by my mom. (Estas galletas <strong>son horneadas</strong> por mi mamá).</li>,
  ];

  const intermediateExamples = [
    <li key="1"><strong>The news is broadcasted</strong> on television daily. (Las noticias <strong>son transmitidas</strong> en la televisión a diario).</li>,
    <li key="2"><strong>New software updates are released</strong> regularly. (Nuevas actualizaciones <strong>son lanzadas</strong> regularmente).</li>,
    <li key="3"><strong>Important decisions are made</strong> by the board of directors. (Decisiones importantes <strong>son tomadas</strong> por la junta directiva).</li>,
  ];

  const advancedExamples = [
    <li key="1"><strong>The house has been painted</strong> by professionals. (La casa <strong>ha sido pintada</strong> por profesionales).</li>,
    <li key="2"><strong>New policies are being implemented</strong> by the government. (Nuevas políticas <strong>están siendo implementadas</strong> por el gobierno).</li>,
    <li key="3"><strong>Advanced technology is used</strong> in this research project. (Tecnología avanzada <strong>es utilizada</strong> en este proyecto de investigación).</li>,
  ];

  return (
    <SubjectLayout
      tag="Voz Pasiva"
      title="Present Simple Passive"
      intro={
        <p>
          El <strong>Presente Simple Pasivo</strong> se utiliza para hablar de acciones realizadas por alguien o algo, sin enfocarse en quién las realiza. Se forma con <strong>am/is/are + participio pasado</strong>.
        </p>
      }>
      <SubjectSection title="Estructura">
        <p>Se utiliza el verbo <strong>to be</strong> (am/is/are) en presente + participio pasado del verbo principal.</p>
        <SubjectList items={[
          'The mail <strong>is delivered</strong> every morning. (El correo es entregado cada mañana)',
          'Cars <strong>are made</strong> in factories. (Los autos son fabricados en fábricas)',
        ]} />
      </SubjectSection>

      <SubjectSection title="Forma Negativa">
        <p>Se añade <strong>not</strong> después de am/is/are: <strong>is not (isn't), are not (aren't)</strong>.</p>
        <SubjectList items={[
          "The report <strong>isn't finished</strong> yet. (El informe aún no está terminado)",
        ]} />
      </SubjectSection>

      <SubjectSection title="Forma Interrogativa">
        <p>Se invierte: <strong>Is/Are + sujeto + participio pasado?</strong></p>
        <SubjectList items={[
          '<strong>Is the homework done?</strong> (¿Está hecha la tarea?)',
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
        Practica la construcción de oraciones en Presente Simple Pasivo para describir acciones realizadas por terceros en diferentes contextos.
      </PracticeTip>
    </SubjectLayout>
  );
}