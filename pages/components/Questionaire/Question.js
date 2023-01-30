import React, { useContext } from 'react';
import { QuestionaireContext } from '../../contexts/questionaire';

const Question = () => {

    const [questionaireState, dispatch] = useContext(QuestionaireContext);

    const currentQuestion = questionaireState.questions[questionaireState.currentQuestionIndex];

    return (
        <React.Fragment>
            <div 
            className="flex justify-center items-center text-center px-10 py-5 w-[60vw] h-[7vw] mt-3 darkblue-text font-interSemiBold  
            cream-boxshadow cream-background rounded-xl xl:text-2xl">
                {currentQuestion.question}
            </div>
        </React.Fragment>
    );
}

export default Question;