import SubjectLayout, { SubjectSection, SubjectList, PracticeTip } from '../components/SubjectLayout';

export default function RelativeClauses() {
  return (
    <SubjectLayout
      tag="Estructura Gramatical"
      title="Relative Clauses"
      intro={
        <p>
          Las <strong>Relative Clauses</strong> (Oraciones relativas) son estructuras que dan información adicional sobre un sustantivo. Se dividen en dos tipos principales: <strong>Defining</strong> y <strong>Non-Defining</strong>.
        </p>
      }>
      <SubjectSection title="Defining Relative Clauses">
        <p>
          Aportan información <strong>esencial</strong> para identificar el sustantivo. No se separan con comas y son necesarias para comprender la oración. Se usan los pronombres <strong>who, that, which, whose, where, when</strong>.
        </p>
        <SubjectList items={[
          'The book <strong>that I bought yesterday</strong> is really interesting. (El libro que compré ayer es muy interesante)',
          'The woman <strong>who lives next door</strong> is a doctor. (La mujer que vive al lado es médica)',
          'The city <strong>where I was born</strong> is very beautiful. (La ciudad donde nací es muy hermosa)',
        ]} />
      </SubjectSection>

      <SubjectSection title="Non-Defining Relative Clauses">
        <p>
          Aportan información <strong>adicional pero no esencial</strong>. Se escriben siempre entre comas y si se eliminan, la oración principal sigue siendo comprensible. <strong>No se usa "that"</strong> en este tipo.
        </p>
        <SubjectList items={[
          'My sister, <strong>who lives in London</strong>, is coming to visit. (Mi hermana, que vive en Londres, vendrá de visita)',
          'My dog, <strong>which is very friendly</strong>, loves to play. (Mi perro, que es muy amistoso, adora jugar)',
        ]} />
      </SubjectSection>

      <SubjectSection title="Pronombres Relativos Principales">
        <SubjectList items={[
          '<strong>who</strong> — para personas (quien/que)',
          '<strong>which</strong> — para cosas o animales (que/cual)',
          '<strong>that</strong> — para personas o cosas (solo en Defining)',
          '<strong>whose</strong> — posesivo (cuyo/a)',
          '<strong>where</strong> — para lugares (donde)',
          '<strong>when</strong> — para tiempo (cuando)',
        ]} />
      </SubjectSection>

      <PracticeTip>
        Practica construyendo oraciones con Relative Clauses. Recuerda: si la información es esencial → sin comas. Si es extra → con comas.
      </PracticeTip>
    </SubjectLayout>
  );
}