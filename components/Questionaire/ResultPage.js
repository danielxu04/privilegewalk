import {useContext} from 'react';
import { QuestionaireContext } from '../../contexts/questionaire';

function ResultPage(){

    const [questionaireState, dispatch] = useContext(QuestionaireContext);

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
        </div>
        
    );
}

export default ResultPage;