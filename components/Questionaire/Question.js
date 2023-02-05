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
            className="flex justify-center h-[25vw] w-[85vw] items-center text-sm text-center p-3 mt-2 mx-[5vw] darkblue-text font-interSemiBold  
            cream-boxshadow cream-background rounded-xl xl:text-2xl xl:w-[60vw] xl:h-[7vw] xl:px-10 xl:py-5 xl:mt-3">
                {currentQuestion.question}
        </div>
    );
}

export default Question;