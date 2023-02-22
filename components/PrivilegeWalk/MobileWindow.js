import { useContext } from 'react';
import MobileTrack from "./MobileTrack";
import MobilePlayerTrack from './MobilePlayerTrack';
import { FirebaseContext } from '../../contexts/database';
import { QuestionaireContext } from '../../contexts/questionaire';

function MobileWindow() {

    const [questionaireState, dispatch] = useContext(QuestionaireContext);
    const firebaseContext = useContext(FirebaseContext);
    
    return (
        <div className="flex lg:hidden h-[65vh] px-6 mb-6">
            <MobilePlayerTrack walkBool={questionaireState.walk} setWalkBool={firebaseContext.setWalk} mobileUserPadding={questionaireState.mobileTrackPadding}/>
            <MobileTrack walkBool={firebaseContext.walk1} setWalkBool={firebaseContext.setWalk1} mobilePlayerPadding={firebaseContext.mobilePadding1}/>
            <MobileTrack walkBool={firebaseContext.walk2} setWalkBool={firebaseContext.setWalk2} mobilePlayerPadding={firebaseContext.mobilePadding2}/>
            <MobileTrack walkBool={firebaseContext.walk3} setWalkBool={firebaseContext.setWalk3} mobilePlayerPadding={firebaseContext.mobilePadding3}/>
            <MobileTrack walkBool={firebaseContext.walk4} setWalkBool={firebaseContext.setWalk4} mobilePlayerPadding={firebaseContext.mobilePadding4}/>
        </div>
    );
}

export default MobileWindow;
