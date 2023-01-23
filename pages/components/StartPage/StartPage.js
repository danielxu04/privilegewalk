import { useContext } from 'react';
import { QuestionaireContext  } from '../../contexts/questionaire';

function StartPage(){

    const [questionaireState, dispatch] = useContext(QuestionaireContext);

    return(
        <div className="text-xl hover:cursor-pointer text-center">
            <h2 className="text-white">Privilege Walk</h2>

            <div onClick={() => dispatch({ type: 'start' })}>Start</div>
        </div>
    );
}

export default StartPage;