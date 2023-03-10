import React, { useContext } from 'react';
import { QuestionaireContext } from '../../contexts/questionaire';

const Question = () => {

    const [questionaireState, dispatch] = useContext(QuestionaireContext) || {};

    if(!questionaireState){
        return null;
    }

    const currentQuestion = questionaireState.questions[questionaireState.currentQuestionIndex];

    return (
        <div 
            className="flex text-center h-[50vw] w-[35vw] py-[18vw] items-center text-xs p-2 mt-2 mx-[5vw] darkblue-text font-interSemiBold  
            cream-boxshadow cream-background rounded-xl xl:text-2xl xl:w-[60vw] xl:h-[7vw] xl:px-10 xl:py-5 xl:mt-3 xl:justify-center">
                {currentQuestion.question}
        </div>
    );
}

export default Question;