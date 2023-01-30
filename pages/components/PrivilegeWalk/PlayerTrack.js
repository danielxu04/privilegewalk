import {useContext } from 'react';
import { QuestionaireContext } from '../../contexts/questionaire';
import WalkingPerson from './WalkingPerson';



function PlayerTrack(props) {

    const [questionaireState, dispatch] = useContext(QuestionaireContext);

    // console.log(questionaireState.trackPadding);

    return (
        <div className="flex text-white text-2xl pt-5 px-2 z-10 player-track darkcream-border border-2 w-[100%] cream-boxshadow">
            <div className={`flex ${props.playerPadding}`}>
                <WalkingPerson walkBool={props.walkBool} setWalkBool={props.setWalkBool} image={props.playerImage}/>
                {/* <Image src={props.playerImage} className="w-[2.2vw] invert-img" alt="person"/> */}
            </div>
        </div>
    )
}

export default PlayerTrack;