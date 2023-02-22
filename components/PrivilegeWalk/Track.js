import WalkingPerson from './WalkingPerson';

function Track(props) {
    return (
        <div className="relative h-[5vw] px-2 darkcream-border border-b-2 w-[100%]">
            <span className="absolute bg-white border-white w-[0.01vw] h-[100%] left-[3vw] opacity-40"></span>
            <span className="absolute bg-white border-white w-[0.01vw] h-[100%] left-[6vw] opacity-40"></span>
            <span className="absolute bg-white border-white w-[0.01vw] h-[100%] left-[9vw] opacity-40"></span>
            <span className="absolute bg-white border-white w-[0.01vw] h-[100%] left-[12vw] opacity-40"></span>
            <span className="absolute bg-white border-white w-[0.01vw] h-[100%] left-[15vw] opacity-40"></span>
            <span className="absolute bg-white border-white w-[0.01vw] h-[100%] left-[18vw] opacity-40"></span>
            <span className="absolute bg-white border-white w-[0.01vw] h-[100%] left-[21vw] opacity-40"></span>
            <span className="absolute bg-white border-white w-[0.01vw] h-[100%] left-[24vw] opacity-40"></span>
            <span className="absolute bg-white border-white w-[0.01vw] h-[100%] left-[27vw] opacity-40"></span>
            <span className="absolute bg-white border-white w-[0.01vw] h-[100%] left-[30vw] opacity-40"></span>
            <span className="absolute bg-white border-white w-[0.01vw] h-[100%] left-[33vw] opacity-40"></span>
            <span className="absolute bg-white border-white w-[0.01vw] h-[100%] left-[36vw] opacity-40"></span>
            <span className="absolute bg-white border-white w-[0.01vw] h-[100%] left-[39vw] opacity-40"></span>
            <span className="absolute bg-white border-white w-[0.01vw] h-[100%] left-[42vw] opacity-40"></span>
            <span className="absolute bg-white border-white w-[0.01vw] h-[100%] left-[45vw] opacity-40"></span>
            <span className="absolute bg-white border-white w-[0.01vw] h-[100%] left-[48vw] opacity-40"></span>
            <span className="absolute bg-white border-white w-[0.01vw] h-[100%] left-[51vw] opacity-40"></span>
            <span className="absolute bg-white border-white w-[0.01vw] h-[100%] left-[54vw] opacity-40"></span>
            <span className="absolute bg-white border-white w-[0.01vw] h-[100%] left-[57vw] opacity-40"></span>
            <span className="absolute bg-white border-white w-[0.01vw] h-[100%] left-[60vw] opacity-40"></span>
            <span className="absolute bg-white border-white w-[0.01vw] h-[100%] left-[63vw] opacity-40"></span>
            <span className="absolute bg-white border-white w-[0.01vw] h-[100%] left-[66vw] opacity-40"></span>
            <span className="absolute bg-white border-white w-[0.01vw] h-[100%] left-[69vw] opacity-40"></span>
            <span className="absolute bg-white border-white w-[0.01vw] h-[100%] left-[72vw] opacity-40"></span>
            <span className="absolute bg-white border-white w-[0.01vw] h-[100%] left-[75vw] opacity-40"></span>
            <span className="absolute bg-white border-white w-[0.01vw] h-[100%] left-[78vw] opacity-40"></span>
            <span className="absolute bg-white border-white w-[0.01vw] h-[100%] left-[81vw] opacity-40"></span>
            <span className="absolute bg-white border-white w-[0.01vw] h-[100%] left-[84vw] opacity-40"></span>
            <span className="absolute bg-white border-white w-[0.01vw] h-[100%] left-[87vw] opacity-40"></span>
            <div className={`absolute top-[49%] pl-[0.5vw] ${props.playerPadding}`}>
                <WalkingPerson walkBool={props.walkBool} setWalkBool={props.setWalkBool} image={props.playerImage}/>
            </div>
        </div>
    )
}

export default Track;