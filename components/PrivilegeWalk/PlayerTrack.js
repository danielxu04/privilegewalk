import WalkingPerson from './WalkingPerson';

function PlayerTrack(props) {
    return (
        <div className="flex text-white text-2xl pt-9 px-2 z-10 player-track darkcream-border border-2 w-[100%] cream-boxshadow">
            <div className={`flex ${props.playerPadding}`}>
                <WalkingPerson walkBool={props.walkBool} setWalkBool={props.setWalkBool} image={props.playerImage}/>
            </div>
        </div>
    )
}

export default PlayerTrack;