import {useContext} from 'react';
import { QuestionaireContext } from '../contexts/questionaire';

const Question = () => {

    const [questionaireState, dispatch] = useContext(QuestionaireContext);

    const currentQuestion = questionaireState.questions[questionaireState.currentQuestionIndex];

    return (
        <div>
            <div className="bg-white text-center pt-10">{currentQuestion.question}</div>
        </div>
    );
}

export default Question;