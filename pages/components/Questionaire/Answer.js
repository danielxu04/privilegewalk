import {useContext} from 'react';
import { FirebaseContext } from '../../contexts/database';


const Answer = ({onAnswerText}) => {

    const firebaseContext = useContext(FirebaseContext);

    return (
        <div className="flex flex-row w-full justify-center mt-5">
            <div 
                className="flex pr-2 w-[10vw] bg-white text-center hover:cursor-pointer hover:scale-110"
                onClick={() => {onAnswerText("yes"); firebaseContext.setCurrentQuestionIndexv2(firebaseContext.currentQuestionIndexv2 + 1);
                firebaseContext.changePadding();}}
            >
                Yes
            </div>
            <div 
                className="pl-2 flex w-[10vw] bg-white text-center hover:cursor-pointer hover:scale-110"
                onClick={() => {onAnswerText("no"); firebaseContext.setCurrentQuestionIndexv2(firebaseContext.currentQuestionIndexv2 + 1);
                firebaseContext.changePadding();}}
            >
                No
            </div>
        </div>
    );
}

export default Answer;