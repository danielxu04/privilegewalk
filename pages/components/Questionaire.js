import {useContext} from 'react';
import { QuestionaireContext } from '../contexts/questionaire';

import Question from './Question';

const Questionaire = () => {

    const [questionaireState, dispatch] = useContext(QuestionaireContext);
    //console.log('questionaireState', questionaireState)
    return (
        <div className="items-center flex flex-col">
            <div className="block text-center text-white">
                Question {questionaireState.currentQuestionIndex + 1} / {questionaireState.questions.length}
            </div>
            <Question />
            <div 
                className="w-[10vw] bg-white mt-10 text-center hover:cursor-pointer hover:scale-110"
                onClick={() => dispatch({ type: "next_question" })}
            >
                Next
            </div>
        </div>
    );
}

export default Questionaire;