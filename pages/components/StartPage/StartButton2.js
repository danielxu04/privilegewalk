import React, { useContext } from 'react';
import { QuestionaireContext } from '../../contexts/questionaire';

function StartButton2(){

    const [questionaireState, dispatch] = useContext(QuestionaireContext);

    return(
        <React.Fragment>
            <div 
                className="hover:cursor-pointer hover:scale-105 px-3 py-2 font-interMedium text-lg transition-050s justify-center rounded-lg cream-background start-btn w-[8vw]" 
                onClick={() => dispatch({ type: 'start' })}>
                    Start
            </div>
            {/*
            <div class="progress-bar"></div>
            <svg x="0px" y="0px"
                viewBox="0 0 25 30" style="enable-background:new 0 0 25 30;">
                <path class="check" className="st0" d="M2,19.2C5.9,23.6,9.4,28,9.4,28L23,2"/>
            </svg>
            */}
        </React.Fragment>
        
    );
}

export default StartButton2;