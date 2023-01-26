import Image from 'next/image';
import {useContext } from 'react';
import { QuestionaireContext } from '../../contexts/questionaire';



function Track(props) {

    const [questionaireState, dispatch] = useContext(QuestionaireContext);

    // console.log(questionaireState.trackPadding);



    return (
        <div className="flex text-white text-2xl p-2 border-cream border-b-2 w-[86vw]">
            <div className={`flex ${props.playerPadding}`}>
                <Image src={props.playerImage} className={`w-[2vw]`} alt="person"/>
            </div>
        </div>
    )
}

export default Track;