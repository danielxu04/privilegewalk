import Image from 'next/image';
import {useContext } from 'react';
import { QuestionaireContext } from '../../contexts/questionaire';

import WalkingPerson from '../../../public/images/person-walking.jpeg'

function Track() {

    const [questionaireState, dispatch] = useContext(QuestionaireContext);

    console.log(questionaireState.trackPadding);


    return (
        <div className="bg-zinc-800 flex text-white text-2xl p-4 border-black border-2 w-[86vw]">
            <div className={`flex ${questionaireState.trackPadding}`}>
                <Image src={WalkingPerson} className={`w-[3vw]`} alt="person"/>
            </div>
        </div>
    )
}

export default Track;