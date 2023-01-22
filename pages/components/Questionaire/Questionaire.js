import { useContext, useEffect } from 'react';
import { QuestionaireContext } from '../../contexts/questionaire';
import { FirebaseContext } from '../../contexts/database';
import Wrapper from '../../helpers/Wrapper';
import Question from './Question';
import ResultPage from './ResultPage';
import Answer from './Answer';
import Window from '../PrivilegeWalk/Window';

const Questionaire = () => {

    const [questionaireState, dispatch] = useContext(QuestionaireContext);
    // console.log('questionaireState', questionaireState)
    // console.log(questionaireState.answerSequence);
    const firebaseContext = useContext(FirebaseContext);
    
    useEffect(() => {
        if(questionaireState.isComplete){
            firebaseContext.setAnswerMatrix(
                [
                    ...firebaseContext.answerMatrix,
                    questionaireState.answerSequence
                ]
            );

            firebaseContext.writeUserData();
        }
    }, [questionaireState.isComplete]);

    return (
        <Wrapper>
            {questionaireState.isComplete && (
                <ResultPage />
            )}
            {!questionaireState.isComplete && (
                <Wrapper>
                    <Window />
                    <div className="items-center flex flex-col">
                        <div className="block text-center text-white">
                            Question {questionaireState.currentQuestionIndex + 1} / {questionaireState.questions.length}
                        </div>
                        <Question />
                        <Answer onAnswerText={(answerText) => dispatch({type: "select_answer", payload: answerText})}/>
                    </div>
                </Wrapper>
            )}
        </Wrapper>
    );
}

export default Questionaire;