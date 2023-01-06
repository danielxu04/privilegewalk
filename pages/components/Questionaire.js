import {useContext} from 'react';
import { QuestionaireContext } from '../contexts/questionaire';

import Question from './Question';

const Questionaire = () => {

    const [questionaireState, dispatch] = useContext(QuestionaireContext);
    //console.log('questionaireState', questionaireState)
    return (
        <div>
            <div className="block text-center text-white">
                Question {questionaireState.currentQuestionIndex + 1} / {questionaireState.questions.length}
            </div>
            <Question />
        </div>
    );
}

export default Questionaire;