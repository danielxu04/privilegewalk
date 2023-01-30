import { useContext } from 'react';
import WalkingMan from '../../../public/images/walking-man.png';

import Track from './Track';
import PlayerTrack from './PlayerTrack';
import { QuestionaireContext } from '../../contexts/questionaire';
import { FirebaseContext } from '../../contexts/database';

function Window(){

    const [questionaireState, dispatch] = useContext(QuestionaireContext);
    const firebaseContext = useContext(FirebaseContext);

    return (
        <div className="hidden lg:flex flex-col mx-[5vw] mt-[3vw] mb-[2vw] border-2 track rounded-md darkcream-border cream-boxshadow-lg">
            <Track  
                playerPadding={firebaseContext.padding1}
                walkBool={firebaseContext.walk1} 
                setWalkBool={firebaseContext.setWalk1} 
                playerImage={WalkingMan}
            />
            <Track 
                playerPadding={firebaseContext.padding2} 
                walkBool={firebaseContext.walk2} 
                setWalkBool={firebaseContext.setWalk2} 
                playerImage={WalkingMan}
            />
            <Track 
                playerPadding={firebaseContext.padding3} 
                walkBool={firebaseContext.walk3}
                setWalkBool={firebaseContext.setWalk3}  
                playerImage={WalkingMan}
            />
            <Track 
                playerPadding={firebaseContext.padding4} 
                walkBool={firebaseContext.walk4}
                setWalkBool={firebaseContext.setWalk4} 
                playerImage={WalkingMan}
            />
            <Track 
                playerPadding={firebaseContext.padding5}
                walkBool={firebaseContext.walk5}
                setWalkBool={firebaseContext.setWalk5} 
                playerImage={WalkingMan}
            />
            <Track 
                playerPadding={firebaseContext.padding6} 
                walkBool={firebaseContext.walk6} 
                setWalkBool={firebaseContext.setWalk6} 
                playerImage={WalkingMan}
            />
            <Track 
                playerPadding={firebaseContext.padding7} 
                walkBool={firebaseContext.walk7} 
                setWalkBool={firebaseContext.setWalk7} 
                playerImage={WalkingMan}
            />
            <Track 
                playerPadding={firebaseContext.padding8} 
                walkBool={firebaseContext.walk8} 
                setWalkBool={firebaseContext.setWalk8} 
                playerImage={WalkingMan}
            />
            <Track 
                playerPadding={firebaseContext.padding9} 
                walkBool={firebaseContext.walk9}
                setWalkBool={firebaseContext.setWalk9} 
                playerImage={WalkingMan}
            />
            <Track 
                playerPadding={firebaseContext.padding10} 
                walkBool={firebaseContext.walk10}
                setWalkBool={firebaseContext.setWalk10} 
                playerImage={WalkingMan}
            />
            <PlayerTrack 
                playerPadding={questionaireState.trackPadding}
                walkBool={questionaireState.walk}
                setWalkBool={firebaseContext.setWalk} 
                playerImage={WalkingMan}
            />
        </div>
    );
}

export default Window;