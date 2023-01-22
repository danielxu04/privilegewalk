import {useContext} from 'react';
import { QuestionaireContext } from '../../contexts/questionaire';
import { FirebaseContext } from '../../contexts/database';
import Wrapper from '../../helpers/Wrapper';

function ResultPage(){

    const [questionaireState, dispatch] = useContext(QuestionaireContext);
    const firebaseContext = useContext(FirebaseContext);

    return (
        <Wrapper>
            <div className="bg-white p-4">
                Your Privilege Score is: {((questionaireState.privilegeCount / questionaireState.questions.length) * 100).toFixed(2)}
            </div>
            <div 
                className="w-[10vw] bg-white mt-10 text-center hover:cursor-pointer hover:scale-110"
                onClick={() => {dispatch({ type: 'restart' }); firebaseContext.restartApp();}}
            >
                Restart
            </div>
        </Wrapper>
        
    );
}

export default ResultPage;