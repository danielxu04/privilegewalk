import {useContext} from 'react';
import { QuestionaireContext } from '../../contexts/questionaire';
import Wrapper from '../../helpers/Wrapper';

function ResultPage(){

    const [questionaireState, dispatch] = useContext(QuestionaireContext);

    return (
        <Wrapper>
            <div className="bg-white p-4">
                Your Privilege Score is: {((questionaireState.privilegeCount / questionaireState.questions.length) * 100).toFixed(2)}%
            </div>
            <div 
                className="w-[10vw] bg-white mt-10 text-center hover:cursor-pointer hover:scale-110"
                onClick={() => dispatch({ type: 'restart' })}
            >
                Restart
            </div>
        </Wrapper>
        
    );
}

export default ResultPage;