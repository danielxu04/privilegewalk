import WalkingPerson from './WalkingPerson';

function PlayerTrack(props) {
    return (
        <div className="relative h-[5vw] px-2 darkcream-border w-[100%] cream-boxshadow">
            <span className="absolute bg-white border-white w-[0.01vw] h-[100%] left-[3vw]"></span>
            <span className="absolute bg-white border-white w-[0.01vw] h-[100%] left-[6vw]"></span>
            <span className="absolute bg-white border-white w-[0.01vw] h-[100%] left-[9vw]"></span>
            <span className="absolute bg-white border-white w-[0.01vw] h-[100%] left-[12vw]"></span>
            <span className="absolute bg-white border-white w-[0.01vw] h-[100%] left-[15vw]"></span>
            <span className="absolute bg-white border-white w-[0.01vw] h-[100%] left-[18vw]"></span>
            <span className="absolute bg-white border-white w-[0.01vw] h-[100%] left-[21vw]"></span>
            <span className="absolute bg-white border-white w-[0.01vw] h-[100%] left-[24vw]"></span>
            <span className="absolute bg-white border-white w-[0.01vw] h-[100%] left-[27vw]"></span>
            <span className="absolute bg-white border-white w-[0.01vw] h-[100%] left-[30vw]"></span>
            <span className="absolute bg-white border-white w-[0.01vw] h-[100%] left-[33vw]"></span>
            <span className="absolute bg-white border-white w-[0.01vw] h-[100%] left-[36vw]"></span>
            <span className="absolute bg-white border-white w-[0.01vw] h-[100%] left-[39vw]"></span>
            <span className="absolute bg-white border-white w-[0.01vw] h-[100%] left-[42vw]"></span>
            <span className="absolute bg-white border-white w-[0.01vw] h-[100%] left-[45vw]"></span>
            <span className="absolute bg-white border-white w-[0.01vw] h-[100%] left-[48vw]"></span>
            <span className="absolute bg-white border-white w-[0.01vw] h-[100%] left-[51vw]"></span>
            <span className="absolute bg-white border-white w-[0.01vw] h-[100%] left-[54vw]"></span>
            <span className="absolute bg-white border-white w-[0.01vw] h-[100%] left-[57vw]"></span>
            <span className="absolute bg-white border-white w-[0.01vw] h-[100%] left-[60vw]"></span>
            <span className="absolute bg-white border-white w-[0.01vw] h-[100%] left-[63vw]"></span>
            <span className="absolute bg-white border-white w-[0.01vw] h-[100%] left-[66vw]"></span>
            <span className="absolute bg-white border-white w-[0.01vw] h-[100%] left-[69vw]"></span>
            <span className="absolute bg-white border-white w-[0.01vw] h-[100%] left-[72vw]"></span>
            <span className="absolute bg-white border-white w-[0.01vw] h-[100%] left-[75vw]"></span>
            <span className="absolute bg-white border-white w-[0.01vw] h-[100%] left-[78vw]"></span>
            <span className="absolute bg-white border-white w-[0.01vw] h-[100%] left-[81vw]"></span>
            <span className="absolute bg-white border-white w-[0.01vw] h-[100%] left-[84vw]"></span>
            <span className="absolute bg-white border-white w-[0.01vw] h-[100%] left-[87vw]"></span>
            <div className={`absolute top-[48%] pl-[0.5vw] ${props.playerPadding}`}>
                <WalkingPerson walkBool={props.walkBool} setWalkBool={props.setWalkBool} image={props.playerImage}/>
            </div>
        </div>
    )
}

export default PlayerTrack;