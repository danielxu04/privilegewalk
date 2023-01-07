import Image from 'next/image';

import WalkingPerson from '../../../public/images/person-walking.jpeg'

function Track() {
    return (
        <div className="bg-zinc-800 flex text-white text-2xl p-4 border-black border-2">
            <Image src={WalkingPerson} className="w-[3vw] bg-transparent"/>
        </div>
    )
}

export default Track;