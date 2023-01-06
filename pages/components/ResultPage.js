import {useContext} from 'react';
import { QuestionaireContext } from '../contexts/questionaire';
import Wrapper from '../helpers/Wrapper';

function ResultPage(){

    const [questionaireState, dispatch] = useContext(QuestionaireContext);

    return (
        <div className="bg-white p-4">
            Your Privilege Score is: {Math.round(questionaireState.privilegeCount / questionaireState.questions.length)}%
        </div>
    );
}

export default ResultPage;