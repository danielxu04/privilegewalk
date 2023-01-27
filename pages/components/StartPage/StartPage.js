import React, { useContext } from 'react';
import { QuestionaireContext  } from '../../contexts/questionaire';
import StartButton2 from './StartButton2';
import StartButton from './StartButton';

function StartPage(){

    const [questionaireState, dispatch] = useContext(QuestionaireContext);

    return(
        <React.Fragment>
            <div className="text-xl text-center mt-[6vw] flex flex-col items-center">
                <h2 className="font-interBold text-6xl darkcream-text darkcream-textshadow-lg pb-[5vw]">Privilege Walk</h2>
                <p className="font-montserratRegular text-md cream-text pb-[6vw] md:px-[25vw] xl:text-lg">
                    Welcome to <strong className="darkcream-text darkcream-textshadow">Discourse Agency's</strong> interactive Privilege Walk.
                    <br /><br /><br />
                    In society, privileged groups benefit often to the detriment of other parties. This advantage can often stem from
                     various aspects of social inequalities such as education, race, appearance, and disability. In this 
                    particular exercise, we aim to help you, as the player, <strong className="darkcream-text darkcream-textshadow">recognize 
                    the various privileges</strong> in society.
                    <br /><br /><br />
                    In the following questionaire, you will answer a sequence of questions, which will aim to measure your privilege compared to 
                    <strong className="darkcream-text darkcream-textshadow">  10 other users</strong>, in a virtual privilege walk simulation. Let's go!
                </p>
                {/*
                <div 
                className="hover:cursor-pointer hover:scale-105 px-3 py-2 font-interMedium text-lg transition-050s justify-center rounded-lg cream-background start-btn w-[8vw]" 
                onClick={() => dispatch({ type: 'start' })}>
                    Start
                </div>
                <StartButton /> */}
                <StartButton2 />
            </div>
        </React.Fragment>
    );
}

export default StartPage;