import {useContext} from 'react';
import { QuestionaireContext } from '../../contexts/questionaire';
import { FirebaseContext } from '../../contexts/database';
import Wrapper from '../../helpers/Wrapper';

function ResultPage(){

    const [questionaireState, dispatch] = useContext(QuestionaireContext);
    const firebaseContext = useContext(FirebaseContext);

    return (
        <div className="flex flex-col mt-[40vw] xl:mt-0">
            <div className="mt-[20vw] text-center text-white text-5xl font-latoBold cream-textshadow cream-text px-4">
                Your Privilege Score is: 
            </div>
            <div className="mt-[1vw] mb-[2vw] text-center text-white text-7xl font-latoBold cream-textshadow cream-text p-4">
                {((questionaireState.privilegeCount / questionaireState.questions.length) * 100).toFixed(2)}%
            </div>
            <div className="text-center font-montserratRegular text-md cream-text pb-[6vw] px-[8vw] md:px-[25vw] xl:text-xl">
                Thank you for participating in our virtual privilege walk! <br />
                Your response has been recorded and will be used in future virtual privilege walks. 
            </div>
            {/*<div 
                className="w-[10vw] bg-white mt-10 text-center hover:cursor-pointer hover:scale-110"
                onClick={() => {dispatch({ type: 'restart' }); firebaseContext.restartApp();}}
            >
                Restart
    </div>*/}
        </div>
        
    );
}

export default ResultPage;