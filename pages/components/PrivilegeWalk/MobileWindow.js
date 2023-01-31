import { useContext } from 'react';
import MobileTrack from "./MobileTrack";
import MobilePlayerTrack from './MobilePlayerTrack';
import { FirebaseContext } from '../../../contexts/database';
import { QuestionaireContext } from '../../../contexts/questionaire';

function MobileWindow() {

    const [questionaireState, dispatch] = useContext(QuestionaireContext) || {};
    const firebaseContext = useContext(FirebaseContext) || {};
    
    if(!questionaireState){
        return null;
    }
    else if(!firebaseContext){
        return null;
    }
    return (
        <div className="flex lg:hidden h-[65vh] px-6 my-8">
            <MobileTrack mobilePlayerPadding={firebaseContext.mobilePadding1}/>
            <MobileTrack mobilePlayerPadding={firebaseContext.mobilePadding2}/>
            <MobileTrack mobilePlayerPadding={firebaseContext.mobilePadding3}/>
            <MobileTrack mobilePlayerPadding={firebaseContext.mobilePadding4}/>
            <MobilePlayerTrack mobileUserPadding={questionaireState.mobileTrackPadding}/>
        </div>
    );
}

export default MobileWindow;
