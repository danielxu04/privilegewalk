import { useContext } from 'react';
import WalkingWoman from '../../../public/images/walking-woman.png';
import WalkingPerson from '../../../public/images/person-walking.jpeg';

import Track from './Track';
import { QuestionaireContext } from '../../contexts/questionaire';
import { FirebaseContext } from '../../contexts/database';

function Window(){

    const [questionaireState, dispatch] = useContext(QuestionaireContext);
    const firebaseContext = useContext(FirebaseContext);

    return (
        <div className="flex flex-col mx-[5vw] mt-[3vw] mb-[2vw] border-2 track-bg rounded-md border-cream cream-boxshadow-lg">
            <Track playerPadding={firebaseContext.padding1} playerImage={WalkingWoman}/>
            <Track playerPadding={firebaseContext.padding2} playerImage={WalkingWoman}/>
            <Track playerPadding={firebaseContext.padding3} playerImage={WalkingWoman}/>
            <Track playerPadding={firebaseContext.padding4} playerImage={WalkingWoman}/>
            <Track playerPadding={firebaseContext.padding5} playerImage={WalkingWoman}/>
            <Track playerPadding={firebaseContext.padding6} playerImage={WalkingWoman}/>
            <Track playerPadding={firebaseContext.padding7} playerImage={WalkingWoman}/>
            <Track playerPadding={firebaseContext.padding8} playerImage={WalkingWoman}/>
            <Track playerPadding={firebaseContext.padding9} playerImage={WalkingWoman}/>
            <Track playerPadding={firebaseContext.padding10} playerImage={WalkingWoman}/>
            <Track playerPadding={questionaireState.trackPadding} playerImage={WalkingPerson}/>
        </div>
    );
}

export default Window;