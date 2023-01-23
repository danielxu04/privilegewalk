import { useContext } from 'react';

import Track from './Track';
import { QuestionaireContext } from '../../contexts/questionaire';
import { FirebaseContext } from '../../contexts/database';

function Window(){

    const [questionaireState, dispatch] = useContext(QuestionaireContext);
    const firebaseContext = useContext(FirebaseContext);

    return (
        <div className="flex flex-col mx-[5vw] mt-[3vw] mb-[1vw]">
            <Track playerPadding={firebaseContext.padding1}/>
            <Track playerPadding={firebaseContext.padding2}/>
            <Track playerPadding={firebaseContext.padding3}/>
            <Track playerPadding={firebaseContext.padding4}/>
            <Track playerPadding={firebaseContext.padding5}/>
            <Track playerPadding={firebaseContext.padding6}/>
            <Track playerPadding={firebaseContext.padding7}/>
            <Track playerPadding={firebaseContext.padding8}/>
            <Track playerPadding={firebaseContext.padding9}/>
            <Track playerPadding={firebaseContext.padding10}/>
            <Track playerPadding={questionaireState.trackPadding}/>
        </div>
    );
}

export default Window;