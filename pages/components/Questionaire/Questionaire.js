import { useContext, useEffect } from 'react';
import { QuestionaireContext } from '../../contexts/questionaire';
import { FirebaseContext } from '../../contexts/database';
import Wrapper from '../../helpers/Wrapper';
import Question from './Question';
import ResultPage from './ResultPage';
import Answer from './Answer';
import Window from '../PrivilegeWalk/Window';
import MobileWindow from '../PrivilegeWalk/MobileWindow';
import StartPage from '../StartPage/StartPage';

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
            console.log("prewriting answermatrix", firebaseContext.answerMatrix);
            // write function is executing before the answerMatrix has been updated
            firebaseContext.writeUserData();
        }
    }, [questionaireState.isComplete]);

    useEffect(() => {
        if (questionaireState.isComplete) {
            firebaseContext.writeUserData();
        }
    }, [questionaireState.isComplete, firebaseContext.answerMatrix]);
    

    return (
        <Wrapper>
            {questionaireState.startClicked && (
                <StartPage/>
            )}
            {questionaireState.isComplete && (
                <ResultPage />
            )}
            {!questionaireState.isComplete && !questionaireState.startClicked && (
                <Wrapper>
                    <MobileWindow />
                    <Window />
                    <div className="items-center flex flex-col">
                        <div className="block text-2xl text-center text-white font-latoBold cream-textshadow cream-text lg:text-3xl">
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