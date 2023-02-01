import WalkingPerson from './WalkingPerson';

function Track(props) {
    return (
        <div className="flex pt-2 px-2 darkcream-border border-b-2 w-[100%]">
            <div className={`flex ${props.playerPadding}`}>
                <WalkingPerson walkBool={props.walkBool} setWalkBool={props.setWalkBool} image={props.playerImage}/>
            </div>
        </div>
    )
}

export default Track;