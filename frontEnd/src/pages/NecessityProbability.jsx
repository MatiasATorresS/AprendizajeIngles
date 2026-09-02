import SubjectLayout, { SubjectSection, SubjectList, LevelCard, LevelsRow, PracticeTip } from '../components/SubjectLayout';

export default function NecessityProbability() {
  const basicExamples = [
    <li key="1"><strong>You must wear</strong> a seatbelt in the car. (<strong>Debes llevar</strong> puesto el cinturón de seguridad en el auto).</li>,
    <li key="2"><strong>It can get</strong> very cold in the winter. (<strong>Puede ponerse</strong> muy frío en el invierno).</li>,
    <li key="3"><strong>We have to be</strong> at the airport by 7 AM. (<strong>Tenemos que estar</strong> en el aeropuerto a las 7 de la mañana).</li>,
  ];

  const intermediateExamples = [
    <li key="1"><strong>They might have left</strong> already. (<strong>Podrían haberse ido</strong> ya).</li>,
    <li key="2"><strong>You should call</strong> the doctor if you don't feel well. (<strong>Deberías llamar</strong> al médico si no te sientes bien).</li>,
    <li key="3"><strong>It's likely that they will come</strong> to the party. (<strong>Es probable que vengan</strong> a la fiesta).</li>,
  ];

  const advancedExamples = [
    <li key="1"><strong>There's a possibility that the meeting has been canceled</strong>. (<strong>Existe la posibilidad de que la reunión haya sido cancelada</strong>).</li>,
    <li key="2"><strong>It's essential that you arrive on time</strong>. (<strong>Es esencial que llegues a tiempo</strong>).</li>,
    <li key="3"><strong>They couldn't have finished the project without your help</strong>. (<strong>No podrían haber terminado el proyecto sin tu ayuda</strong>).</li>,
  ];

  return (
    <SubjectLayout
      tag="Verbos Modales"
      title="Expresando Necesidad y Probabilidad"
      intro={
        <p>
          En inglés, existen varias formas de expresar la necesidad y la probabilidad mediante verbos modales y expresiones que indican cuán cierta o necesaria es una acción.
        </p>
      }>
      <SubjectSection title="Expresión de la Necesidad">
        <p>
          La necesidad se expresa mediante verbos modales como <strong>must</strong> (deber), <strong>have to</strong> (tener que) y <strong>should</strong> (debería). Indican que algo es necesario o requerido.
        </p>
        <SubjectList items={[
          'You <strong>must</strong> finish your homework. (Debes terminar tu tarea)',
          'She <strong>has to</strong> call the doctor. (Ella tiene que llamar al médico)',
        ]} />
      </SubjectSection>

      <SubjectSection title="Expresión de la Probabilidad">
        <p>
          La probabilidad se expresa con verbos como <strong>can</strong>, <strong>might</strong>, <strong>may</strong>, y expresiones como "it's likely" o "there's a possibility".
        </p>
        <SubjectList items={[
          'It <strong>might</strong> rain tomorrow. (Podría llover mañana)',
          'She <strong>may</strong> be at home. (Ella puede que esté en casa)',
        ]} />
      </SubjectSection>

      <SubjectSection title="Alta Probabilidad">
        <p>
          Para expresar alta probabilidad se usan <strong>must</strong> (debe ser), <strong>can't</strong> (no puede ser), y <strong>couldn't</strong>.
        </p>
        <SubjectList items={[
          'He <strong>must</strong> be tired. (Debe estar cansado)',
          "She <strong>can't</strong> be home — I saw her leave. (No puede estar en casa)",
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
        Practica el uso de estas expresiones para comunicar efectivamente la necesidad y la probabilidad en inglés.
      </PracticeTip>
    </SubjectLayout>
  );
}
