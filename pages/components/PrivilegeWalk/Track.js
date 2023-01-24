import Image from 'next/image';
import {useContext } from 'react';
import { QuestionaireContext } from '../../contexts/questionaire';

import WalkingPerson from '../../../public/images/person-walking.jpeg'
import WalkingWoman from '../../../public/images/walking-woman.png'


function Track(props) {

    const [questionaireState, dispatch] = useContext(QuestionaireContext);

    // console.log(questionaireState.trackPadding);



    return (
        <div className="bg-transparent flex text-white text-2xl p-2 border-cream border-2 w-[86vw]">
            <div className={`flex ${props.playerPadding}`}>
                <Image src={WalkingWoman} className={`w-[2vw]`} alt="person"/>
            </div>
        </div>
    )
}

export default Track;