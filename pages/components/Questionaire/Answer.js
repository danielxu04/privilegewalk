import {useContext} from 'react';
import { FirebaseContext } from '../../contexts/database';


const Answer = ({onAnswerText}) => {

    const firebaseContext = useContext(FirebaseContext);

    return (
        <div className="flex flex-row w-full justify-center mt-5">
            <div 
                className="flex pr-2 w-[10vw] cream-background justify-center hover:cursor-pointer hover:scale-105 mx-3 p-2 rounded-lg font-interMedium
                darkblue-text answer-btn"
                onClick={() => {onAnswerText("yes"); firebaseContext.setCurrentQuestionIndexv2(firebaseContext.currentQuestionIndexv2 + 1);
                firebaseContext.changePadding();}}
            >
                Yes
            </div>
            <div 
                className="pl-2 flex w-[10vw] cream-background justify-center hover:cursor-pointer hover:scale-105 mx-3 p-2 rounded-lg font-interMedium
                darkblue-text answer-btn"
                onClick={() => {onAnswerText("no"); 
                                firebaseContext.setCurrentQuestionIndexv2(firebaseContext.currentQuestionIndexv2 + 1);
                                firebaseContext.changePadding();}}
            >
                No
            </div>
        </div>
    );
}

export default Answer;