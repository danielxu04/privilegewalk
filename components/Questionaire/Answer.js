import {useContext} from 'react';
import { FirebaseContext } from '../../contexts/database';


const Answer = ({onAnswerText}) => {

    const firebaseContext = useContext(FirebaseContext);

    return (
        <div className="flex flex-row justify-center mt-5">
            <div 
                className="flex px-[5vw] py-2 cream-background justify-center hover:cursor-pointer hover:scale-105 mr-2 rounded-lg font-interMedium
                darkblue-text answer-btn xl:w-[10vw] xl:px-0 xl:py-3 xl:mx-4"
                onClick={() => {onAnswerText("yes"); 
                                firebaseContext.setCurrentQuestionIndexv2(firebaseContext.currentQuestionIndexv2 + 1);
                                firebaseContext.changePadding();
                                firebaseContext.changePaddingMobile();}}
            >
                Yes
            </div>
            <div 
                className="flex cream-background px-[5vw] py-2 justify-center hover:cursor-pointer hover:scale-105 ml-2 rounded-lg font-interMedium
                darkblue-text answer-btn xl:w-[10vw] xl:px-0 xl:py-3 xl:mx-4"
                onClick={() => {onAnswerText("no"); 
                                firebaseContext.setCurrentQuestionIndexv2(firebaseContext.currentQuestionIndexv2 + 1);
                                firebaseContext.changePadding();
                                firebaseContext.changePaddingMobile();}}
            >
                No
            </div>
        </div>
    );
}

export default Answer;