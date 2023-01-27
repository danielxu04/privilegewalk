import Image from 'next/image';
import {useContext } from 'react';
import { QuestionaireContext } from '../../contexts/questionaire';
import WalkingPerson from './WalkingPerson';



function Track(props) {

    const [questionaireState, dispatch] = useContext(QuestionaireContext);

    // console.log(questionaireState.trackPadding);

    return (
        <div className="flex text-white text-2xl pt-2 px-2 darkcream-border border-b-2 w-[100%]">
            <div className={`flex ${props.playerPadding}`}>
                {/*<Image src={props.playerImage} className={`w-[2vw]`} alt="person"/>*/}
                <WalkingPerson walkBool={props.walkBool} setWalkBool={props.setWalkBool}/>
            </div>
        </div>
    )
}

export default Track;