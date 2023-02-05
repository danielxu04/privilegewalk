import { useContext, useEffect } from 'react';
import { QuestionaireContext } from '../../../contexts/questionaire';
import { FirebaseContext } from '../../../contexts/database';
import Question from './Question';
import ResultPage from './ResultPage';
import Answer from './Answer';
import Window from '../PrivilegeWalk/Window';
import MobileWindow from '../PrivilegeWalk/MobileWindow';
import StartPage from '../StartPage/StartPage';

const Questionaire = () => {

    const [questionaireState, dispatch] = useContext(QuestionaireContext);
    const firebaseContext = useContext(FirebaseContext);
    
    useEffect(() => {
        if(questionaireState.isComplete){
            console.log(firebaseContext.answerMatrix);
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
/*
    useEffect(() => {
        if (questionaireState.isComplete) {
            firebaseContext.writeUserData();
        }
    }, [questionaireState.isComplete, firebaseContext.answerMatrix]);
*/

    return (
        <div>
            {questionaireState.startClicked && (
                <StartPage/>
            )}
            {questionaireState.isComplete && (
                <ResultPage />
            )}
            {!questionaireState.isComplete && !questionaireState.startClicked && (
                <div>
                    <MobileWindow />
                    <Window />
                    <div className="items-center flex flex-col">
                        <div className="block text-2xl text-center text-white font-latoBold cream-textshadow cream-text lg:text-3xl">
                            Question {questionaireState.currentQuestionIndex + 1} / {questionaireState.questions.length}
                        </div>
                        <Question />
                        <Answer onAnswerText={(answerText) => dispatch({type: "select_answer", payload: answerText})}/>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Questionaire;