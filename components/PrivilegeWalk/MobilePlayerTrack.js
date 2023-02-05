import Image from 'next/image';
import WalkingMan from '../../public/images/walking-man.png';

function MobileTrack(props) {
    return (
        <div style={{ position: "relative" }} className="flex mx-auto h-[100%] w-[10vw] border-2 mobile-player-track b-2 border-zinc-700 
        rounded-lg">
            <div style={{ position: "absolute", bottom: 0 }} className={`flex pl-1 ${props.mobileUserPadding}`}>
                <Image src={WalkingMan} className="invert-img h-[7vw] w-[7vw]"/>
            </div>
        </div>
    );
}

export default MobileTrack;