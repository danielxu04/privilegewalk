import { createContext, useContext, useEffect, useState } from 'react';
import { QuestionaireContext } from './questionaire';
import { ref, onValue, getDatabase, child, get, set } from 'firebase/database';
import { database } from '../../firebase/firebase';


export const FirebaseContext = createContext();

export function FirebaseContextProvider({ children }) {

    const [answerMatrix, setAnswerMatrix] = useState(null);
    
    useEffect(() => {
        const dbRef = ref(getDatabase());
        get(child(dbRef, 'answers')).then((snapshot) => {
        if (snapshot.exists()) {
            setAnswerMatrix(snapshot.val());
        } else {
            console.log("No data available");
        }
        }).catch((error) => {
        console.error(error);
        });
    }, []);


    function writeUserData() {
        console.log("writing...");
        console.log("answerMatrix: ", answerMatrix);
        set(ref(database, 'answers'),
            answerMatrix
        );
    }

    return <FirebaseContext.Provider value={{answerMatrix, setAnswerMatrix, writeUserData}}>{children}</FirebaseContext.Provider>
}

