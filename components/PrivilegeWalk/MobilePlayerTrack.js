import Image from 'next/image';
import WalkingMan from '../../public/images/walking-man.png';
import MobileWalkingPerson from './MobileWalkingPerson';

function MobileTrack(props) {
    return (
        <div style={{ position: "relative" }} className="flex mx-auto h-[100%] w-[11.4vw] border-2 mobile-player-track b-2 border-zinc-700 
        rounded-lg">
            <div style={{ position: "absolute", bottom: 0 }} className={`flex pl-1 ${props.mobileUserPadding}`}>
                <MobileWalkingPerson walkBool={props.walkBool} setWalkBool={props.setWalkBool} image={WalkingMan} />
            </div>
        </div>
    );
}

export default MobileTrack;