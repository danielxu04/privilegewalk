import {useContext} from 'react';
import { QuestionaireContext } from '../contexts/questionaire';

const Questionaire = () => {

    const [questionaireState, dispatch] = useContext(QuestionaireContext);
    //console.log('questionaireState', questionaireState)
    return (
        <div></div>
    );
}

export default Questionaire;