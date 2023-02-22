import Image from 'next/image';
import WalkingMan from '../../public/images/walking-man.png';
import MobileWalkingPerson from './MobileWalkingPerson';


function MobileTrack(props) {
    return (
        <div style={{ position: "relative" }} className="mx-auto h-[100%] w-[11.4vw] border-2 bg-black border-zinc-600 rounded-lg">
            <div style={{bottom: 0, right: 0}} className={`pl-1 absolute ${props.mobilePlayerPadding}`}>
                <MobileWalkingPerson walkBool={props.walkBool} setWalkBool={props.setWalkBool} image={WalkingMan} />
            </div>
        </div>
    );
}

export default MobileTrack;
