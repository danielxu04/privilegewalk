import { createContext, useEffect, useState } from 'react';
import { ref, getDatabase, child, get, set } from 'firebase/database';
import { database } from '../firebase/firebase';

export const FirebaseContext = createContext();

export function FirebaseContextProvider({ children }) {

    const [answerMatrix, setAnswerMatrix] = useState([]);

    const [answerList1, setAnswerList1] = useState([]);
    const [answerList2, setAnswerList2] = useState([]);
    const [answerList3, setAnswerList3] = useState([]);
    const [answerList4, setAnswerList4] = useState([]);
    const [answerList5, setAnswerList5] = useState([]);
    const [answerList6, setAnswerList6] = useState([]);
    const [answerList7, setAnswerList7] = useState([]);
    const [answerList8, setAnswerList8] = useState([]);
    const [answerList9, setAnswerList9] = useState([]);
    const [answerList10, setAnswerList10] = useState([]);

    useEffect(() => {
        const dbRef = ref(getDatabase());
        get(child(dbRef, 'answers')).then((snapshot) => {
        if (snapshot.exists()) {
            const readData = snapshot.val();

            console.log(readData);

            setAnswerMatrix(readData);
            
            setAnswerList1(readData[Math.floor(Math.random() * (readData.length))]);
            setAnswerList2(readData[Math.floor(Math.random() * (readData.length))]);
            setAnswerList3(readData[Math.floor(Math.random() * (readData.length))]);
            setAnswerList4(readData[Math.floor(Math.random() * (readData.length))]);
            setAnswerList5(readData[Math.floor(Math.random() * (readData.length))]);
            setAnswerList6(readData[Math.floor(Math.random() * (readData.length))]);
            setAnswerList7(readData[Math.floor(Math.random() * (readData.length ))]);
            setAnswerList8(readData[Math.floor(Math.random() * (readData.length))]);
            setAnswerList9(readData[Math.floor(Math.random() * (readData.length))]);
            setAnswerList10(readData[Math.floor(Math.random() * (readData.length))]);
            
        } else {
            console.log("No data available");
        }
        }).catch((error) => {
        console.error(error);
        });
    }, []);

    const[currentQuestionIndexv2, setCurrentQuestionIndexv2] = useState(0);

    const[privilegeCount1, setPrivilegeCount1] = useState(0);
    const[privilegeCount2, setPrivilegeCount2] = useState(0);
    const[privilegeCount3, setPrivilegeCount3] = useState(0);
    const[privilegeCount4, setPrivilegeCount4] = useState(0);
    const[privilegeCount5, setPrivilegeCount5] = useState(0);

    const[padding1, setPadding1] = useState('pl-0vw');
    const[padding2, setPadding2] = useState('pl-0vw');
    const[padding3, setPadding3] = useState('pl-0vw');
    const[padding4, setPadding4] = useState('pl-0vw');
    const[padding5, setPadding5] = useState('pl-0vw');

    const [walk, setWalk] = useState(false);
    const [walk1, setWalk1] = useState(false);
    const [walk2, setWalk2] = useState(false);
    const [walk3, setWalk3] = useState(false);
    const [walk4, setWalk4] = useState(false);
    const [walk5, setWalk5] = useState(false);



    function changePadding(){
        setPrivilegeCount1(answerList1[currentQuestionIndexv2] === "yes" ? privilegeCount1 + 1 : privilegeCount1);
        setPadding1("pl-" + (privilegeCount1 * 3).toString() + "vw");
        setWalk1(answerList1[currentQuestionIndexv2 - 1] === "yes");

        setPrivilegeCount2(answerList2[currentQuestionIndexv2] === "yes" ? privilegeCount2 + 1 : privilegeCount2);
        setPadding2("pl-" + (privilegeCount2 * 3).toString() + "vw");
        setWalk2(answerList2[currentQuestionIndexv2 - 1] === "yes");

        setPrivilegeCount3(answerList3[currentQuestionIndexv2] === "yes" ? privilegeCount3 + 1 : privilegeCount3);
        setPadding3("pl-" + (privilegeCount3 * 3).toString() + "vw"); 
        setWalk3(answerList3[currentQuestionIndexv2 - 1] === "yes");

        setPrivilegeCount4(answerList4[currentQuestionIndexv2] === "yes" ? privilegeCount4 + 1 : privilegeCount4);
        setPadding4("pl-" + (privilegeCount4 * 3).toString() + "vw"); 
        setWalk4(answerList4[currentQuestionIndexv2 - 1] === "yes");

        setPrivilegeCount5(answerList5[currentQuestionIndexv2] === "yes" ? privilegeCount5 + 1 : privilegeCount5);
        setPadding5("pl-" + (privilegeCount5 * 3).toString() + "vw");
        setWalk5(answerList5[currentQuestionIndexv2 - 1] === "yes");
    }

        

    function writeUserData() {
        console.log("writing...");
        console.log("answerMatrix: ", answerMatrix);
        set(ref(database, 'answers'),
            answerMatrix
        );
    }

/************************************************** MOBILE **********************************************/


    const [mobilePadding1, setMobilePadding1] = useState('pb-0');
    const [mobilePadding2, setMobilePadding2] = useState('pb-0');
    const [mobilePadding3, setMobilePadding3] = useState('pb-0');
    const [mobilePadding4, setMobilePadding4] = useState('pb-0');


    function changePaddingMobile(){
        setPrivilegeCount1(answerList1[currentQuestionIndexv2] === "yes" ? privilegeCount1 + 1 : privilegeCount1);
        setMobilePadding1("pb-" + (privilegeCount1).toString());

        setPrivilegeCount2(answerList2[currentQuestionIndexv2] === "yes" ? privilegeCount2 + 1 : privilegeCount2);
        setMobilePadding2("pb-" + (privilegeCount2).toString());

        setPrivilegeCount3(answerList3[currentQuestionIndexv2] === "yes" ? privilegeCount3 + 1 : privilegeCount3);
        setMobilePadding3("pb-" + (privilegeCount3).toString());

        setPrivilegeCount4(answerList4[currentQuestionIndexv2] === "yes" ? privilegeCount4 + 1 : privilegeCount4);
        setMobilePadding4("pb-" + (privilegeCount4).toString());
    }
    
    

    return <FirebaseContext.Provider 
                value={{answerMatrix, setAnswerMatrix, writeUserData, answerList1, answerList2, 
                    answerList3, answerList4, answerList5, answerList6, answerList7, answerList8, answerList9, answerList10,
                    setCurrentQuestionIndexv2, currentQuestionIndexv2, padding1, padding2, padding3, padding4, padding5, changePadding, walk, 
                    setWalk, walk1, walk2, walk3, walk4, walk5, setWalk1, setWalk2, setWalk3, setWalk4, setWalk5,
                    mobilePadding1, mobilePadding2, mobilePadding3, mobilePadding4, changePaddingMobile}}
            >
            {children}
            </FirebaseContext.Provider>
}

