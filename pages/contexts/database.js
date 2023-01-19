import { createContext, useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { database } from '../../firebase/firebase';


const FirebaseContext = createContext();

export default FirebaseContext;

export function FirebaseContextProvider({ children }) {

    useEffect(() => {
        const answersRef = ref(database, 'answers');
    
        const unsubscribe = onValue(answersRef, (snapshot) => {
          const pastAnswers = snapshot.val();
    
            console.log(pastAnswers);
        });
    
        return unsubscribe;
      }, []);

    return <FirebaseContext.Provider>{children}</FirebaseContext.Provider>
    
}