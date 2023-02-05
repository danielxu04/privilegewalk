import React from 'react';
import Questionaire from '../components/Questionaire/Questionaire';
import { QuestionaireProvider } from '../contexts/questionaire';
import { FirebaseContextProvider} from '../contexts/database';

export default function Home() {
  return (
    <React.StrictMode>
      <FirebaseContextProvider>
        <QuestionaireProvider>
          <Questionaire />
        </QuestionaireProvider>
      </FirebaseContextProvider>
    </React.StrictMode>
  );
}
