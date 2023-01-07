import {useContext} from 'react';
import { QuestionaireContext } from '../contexts/questionaire';
import Wrapper from '../helpers/Wrapper';

import Question from './Question';
import ResultPage from './ResultPage';
import Answer from './Answer';

const Questionaire = () => {

    const [questionaireState, dispatch] = useContext(QuestionaireContext);
    console.log('questionaireState', questionaireState)
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
                    <Answer onAnswerText={(answerText) => dispatch({type: "select_answer", payload: answerText})}/>
                </div>
            )}
        </Wrapper>
    );
}

export default Questionaire;