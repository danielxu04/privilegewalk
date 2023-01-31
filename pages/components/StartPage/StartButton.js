import React, { useContext } from 'react';
import { QuestionaireContext } from '../../../contexts/questionaire';

function StartButton(){

    const [questionaireState, dispatch] = useContext(QuestionaireContext);

    return(
            <div 
                className="flex hover:cursor-pointer hover:scale-105 font-interMedium text-lg transition-050s justify-center rounded-lg 
                cream-background start-btn mt-[5vw] px-6 py-2 xl:w-[8vw] xl:px-3 xl:mt-0" 
                onClick={() => dispatch({ type: 'start' })}>
                    Start
            </div>
    );
}

export default StartButton;