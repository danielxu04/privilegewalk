import {useContext} from 'react';
import { QuestionaireContext } from '../contexts/questionaire';
import Wrapper from '../helpers/Wrapper';

import Question from './Question';
import ResultPage from './ResultPage';

const Questionaire = () => {

    const [questionaireState, dispatch] = useContext(QuestionaireContext);
    //console.log('questionaireState', questionaireState)
    return (
        <Wrapper>
            {questionaireState.isComplete && (
                <ResultPage />
            )}
            {!questionaireState.isComplete && (
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
            )}
        </Wrapper>
    );
}

export default Questionaire;