import SubjectLayout, { SubjectSection, SubjectList, LevelCard, LevelsRow, PracticeTip } from '../components/SubjectLayout';

export default function PastSimplePassive() {
  const basicExamples = [
    <li key="1">The letter <strong>was sent</strong> yesterday. (La carta <strong>fue enviada</strong> ayer).</li>,
    <li key="2">The cake <strong>was eaten</strong> by the kids. (El pastel <strong>fue comido</strong> por los niños).</li>,
    <li key="3"><strong>Was the book read</strong> by you? (<strong>¿Fue leído el libro</strong> por ti?).</li>,
  ];

  const intermediateExamples = [
    <li key="1">The old building <strong>was demolished</strong> last week. (El antiguo edificio <strong>fue demolido</strong> la semana pasada).</li>,
    <li key="2">The story <strong>was written</strong> by a famous author. (La historia <strong>fue escrita</strong> por un autor famoso).</li>,
    <li key="3"><strong>Were the documents signed</strong> by the manager? (<strong>¿Fueron firmados los documentos</strong> por el gerente?).</li>,
  ];

  const advancedExamples = [
    <li key="1">The research project <strong>was conducted</strong> by a team of experts. (El proyecto <strong>fue llevado a cabo</strong> por un equipo de expertos).</li>,
    <li key="2">The film <strong>was directed</strong> by an award-winning director. (La película <strong>fue dirigida</strong> por un director galardonado).</li>,
    <li key="3"><strong>Were the paintings stolen</strong> from the museum? (<strong>¿Fueron robados los cuadros</strong> del museo?).</li>,
  ];

  return (
    <SubjectLayout
      tag="Voz Pasiva"
      title="Past Simple Passive"
      intro={
        <p>
          El <strong>Pasado Simple Pasivo</strong> se utiliza para describir una acción que fue realizada en el pasado. El foco está en la acción, no en quién la realizó. Se forma con <strong>was/were + participio pasado</strong>.
        </p>
      }>
      <SubjectSection title="Estructura">
        <p>Las expresiones en Pasado Simple Pasivo se forman con el verbo auxiliar <strong>was</strong> o <strong>were</strong> seguido del participio pasado del verbo principal.</p>
        <SubjectList items={[
          'The book <strong>was written</strong> in 1990. (El libro fue escrito en 1990)',
          'The houses <strong>were built</strong> last year. (Las casas fueron construidas el año pasado)',
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
        Practica la construcción y el uso del Pasado Simple Pasivo para mejorar tus habilidades en inglés.
      </PracticeTip>
    </SubjectLayout>
  );
}
