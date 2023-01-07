import Questionaire from './components/Questionaire/Questionaire';
import { QuestionaireProvider } from './contexts/questionaire';

export default function Home() {
  return (
    <>
      <QuestionaireProvider>
        <Questionaire />
      </QuestionaireProvider>
    </>
  );
}
