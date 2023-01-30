import Image from 'next/image';
import WalkingMan from '../../../public/images/walking-man.png'

function MobileTrack(props) {
    return (
        <div style={{ position: "relative" }} className="mx-auto h-[100%] pt-2 w-[10vw] border-2 bg-black border-zinc-600 rounded-lg">
            <div style={{ position: "absolute", bottom: 0 }} className={`pl-1 ${props.mobilePlayerPadding}`}>
                <Image src={WalkingMan} className="invert-img h-[7vw] w-[7vw]"/>
            </div>
        </div>
    );
}

export default MobileTrack;
