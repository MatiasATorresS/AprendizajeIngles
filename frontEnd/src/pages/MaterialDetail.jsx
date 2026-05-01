import React from 'react';
import { useParams } from 'react-router-dom';
import PastSimple from './PastSimple'; 
import PastCont from './PastCont';
import PresentPerfect from './PresentPerfect';
import EverNever from './EverNever';
import PresentPerfectHowLongForSince from './PresentPerfectHowLongForSince';
import NecessityProbability from './NecessityProbability';
import PredictionsAndPromises from './PredictionsAndPromises';
import PresentSimplePassive from './PresentSimplePassive';
import PastSimplePassive from './PastSimplePassive';
import PresentSimple from './PresentSimple';
import RelativeClauses from './RelativeClauses';
import QuestionTags from './QuestionTags';
// Importar otros componentes de detalle de materia 

export default function MaterialDetail() {
  const { id } = useParams(); // Obtiene el ID de la materia desde la URL


  //  ejemplo, si el ID es 1, muestra los detalles de Past Simple
  if (id === '1') {
    return <PastSimple />;
  }
  if (id == '2') {
    return <PastCont />;
  }
  if (id == '3') {
    return <PresentPerfect />;
  }
  if (id == '4') {
    return <EverNever />;
  }
  if (id == '5') {
    return <PresentPerfectHowLongForSince />;
  }
  if (id == '6') {
    return <NecessityProbability />;
  }
  if (id == '7') {
    return <PredictionsAndPromises />;
  }
  if (id == '8') {
    return <PastSimplePassive />;
  }
  if (id == '9') {
    return <PresentSimple />;
  }
  if (id == '10') {
    return <PresentSimplePassive />;
  }
  if (id == '11') {
    return <RelativeClauses />;
  }
  if (id == '12') {
    return <QuestionTags />;
  }

  // Agregar más casos para otras materias 

  // Si el ID no coincide con ninguna materia conocida, mostrar un mensaje de error o redireccionar a una página de error 404.
  return <p>Materia no encontrada</p>;
}
