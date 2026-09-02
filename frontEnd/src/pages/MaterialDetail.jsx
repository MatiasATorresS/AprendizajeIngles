import { useParams } from 'react-router-dom';
import NotFound from '../components/NotFound';
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

const MATERIALS = {
  '1': PastSimple,
  '2': PastCont,
  '3': PresentPerfect,
  '4': EverNever,
  '5': PresentPerfectHowLongForSince,
  '6': NecessityProbability,
  '7': PredictionsAndPromises,
  '8': PastSimplePassive,
  '9': PresentSimple,
  '10': PresentSimplePassive,
  '11': RelativeClauses,
  '12': QuestionTags,
};

export default function MaterialDetail() {
  const { id } = useParams();
  const Component = MATERIALS[id];

  if (!Component) {
    return <NotFound />;
  }

  return <Component />;
}