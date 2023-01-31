import Questionaire from './components/Questionaire/Questionaire';
import { QuestionaireProvider } from '../contexts/questionaire';
import { FirebaseContextProvider} from '../contexts/database';

export default function Home() {
  return (
    <>
      <FirebaseContextProvider>
        <QuestionaireProvider>
          <Questionaire />
        </QuestionaireProvider>
      </FirebaseContextProvider>
    </>
  );
}
