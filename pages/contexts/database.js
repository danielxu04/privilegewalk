import { createContext, useEffect, useState } from 'react';
import { ref, onValue, getDatabase, child, get, set } from 'firebase/database';
import { database } from '../../firebase/firebase';


export const FirebaseContext = createContext();

export function FirebaseContextProvider({ children }) {

    const [answerMatrix, setAnswerMatrix] = useState(null);

    const [answerList1, setAnswerList1] = useState(null);
    const [answerList2, setAnswerList2] = useState(null);
    const [answerList3, setAnswerList3] = useState(null);
    const [answerList4, setAnswerList4] = useState(null);
    const [answerList5, setAnswerList5] = useState(null);
    const [answerList6, setAnswerList6] = useState(null);
    const [answerList7, setAnswerList7] = useState(null);
    const [answerList8, setAnswerList8] = useState(null);
    const [answerList9, setAnswerList9] = useState(null);
    const [answerList10, setAnswerList10] = useState(null); 
/*
    const [loadDatabase, setLoadDatabase] = useState();
    const [averageScore, setAverageScore] = useState();

    const scoreMap = new Map();
*/   
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
/*
    function averagePrivilegeScore(){
        for(i = 0; i < loadDatabase.length; i++){
            for(j = 0; j < 28; j++){
                if(loadDatabase[i][j] === "yes"){
                    
                };
            }
        }
    }
*/

    const[privilegeCount1, setPrivilegeCount1] = useState(0);
    const[privilegeCount2, setPrivilegeCount2] = useState(0);
    const[privilegeCount3, setPrivilegeCount3] = useState(0);
    const[privilegeCount4, setPrivilegeCount4] = useState(0);
    const[privilegeCount5, setPrivilegeCount5] = useState(0);
    const[privilegeCount6, setPrivilegeCount6] = useState(0);
    const[privilegeCount7, setPrivilegeCount7] = useState(0);
    const[privilegeCount8, setPrivilegeCount8] = useState(0);
    const[privilegeCount9, setPrivilegeCount9] = useState(0);
    const[privilegeCount10, setPrivilegeCount10] = useState(0);

    const[padding1, setPadding1] = useState('');
    const[padding2, setPadding2] = useState('');
    const[padding3, setPadding3] = useState('');
    const[padding4, setPadding4] = useState('');
    const[padding5, setPadding5] = useState('');
    const[padding6, setPadding6] = useState('');
    const[padding7, setPadding7] = useState('');
    const[padding8, setPadding8] = useState('');
    const[padding9, setPadding9] = useState('');
    const[padding10, setPadding10] = useState('');

    const[currentQuestionIndexv2, setCurrentQuestionIndexv2] = useState(0);


    function changePadding(){
        setPrivilegeCount1(answerList1[currentQuestionIndexv2] === "yes" ? privilegeCount1 + 1 : privilegeCount1);
        setPadding1("pl-" + (privilegeCount1 * 3).toString() + "vw");
        setPrivilegeCount2(answerList2[currentQuestionIndexv2] === "yes" ? privilegeCount2 + 1 : privilegeCount2);
        setPadding2("pl-" + (privilegeCount2 * 3).toString() + "vw"); 
        setPrivilegeCount3(answerList3[currentQuestionIndexv2] === "yes" ? privilegeCount3 + 1 : privilegeCount3);
        setPadding3("pl-" + (privilegeCount3 * 3).toString() + "vw"); 
        setPrivilegeCount4(answerList4[currentQuestionIndexv2] === "yes" ? privilegeCount4 + 1 : privilegeCount4);
        setPadding4("pl-" + (privilegeCount4 * 3).toString() + "vw"); 
        setPrivilegeCount5(answerList5[currentQuestionIndexv2] === "yes" ? privilegeCount5 + 1 : privilegeCount5);
        setPadding5("pl-" + (privilegeCount5 * 3).toString() + "vw"); 
        setPrivilegeCount6(answerList6[currentQuestionIndexv2] === "yes" ? privilegeCount6 + 1 : privilegeCount6);
        setPadding6("pl-" + (privilegeCount6 * 3).toString() + "vw"); 
        setPrivilegeCount7(answerList7[currentQuestionIndexv2] === "yes" ? privilegeCount7 + 1 : privilegeCount7);
        setPadding7("pl-" + (privilegeCount7 * 3).toString() + "vw");
        setPrivilegeCount8(answerList8[currentQuestionIndexv2] === "yes" ? privilegeCount8 + 1 : privilegeCount8);
        setPadding8("pl-" + (privilegeCount8 * 3).toString() + "vw"); 
        setPrivilegeCount9(answerList9[currentQuestionIndexv2] === "yes" ? privilegeCount9 + 1 : privilegeCount9);
        setPadding9("pl-" + (privilegeCount9 * 3).toString() + "vw"); 
        setPrivilegeCount10(answerList10[currentQuestionIndexv2] === "yes" ? privilegeCount10 + 1 : privilegeCount10);
        setPadding10("pl-" + (privilegeCount10 * 3).toString() + "vw");
        }
    
    function restartApp(){
        setPrivilegeCount1(0);
        setPrivilegeCount2(0);
        setPrivilegeCount3(0);
        setPrivilegeCount4(0);
        setPrivilegeCount5(0);
        setPrivilegeCount6(0);
        setPrivilegeCount7(0);
        setPrivilegeCount8(0);
        setPrivilegeCount9(0);
        setPrivilegeCount10(0);
        setPadding1('');
        setPadding2('');
        setPadding3('');
        setPadding4('');
        setPadding5('');
        setPadding6('');
        setPadding7('');
        setPadding8('');
        setPadding9('');
        setPadding10('');
    }

    function writeUserData() {
        console.log("writing...");
        console.log("answerMatrix: ", answerMatrix);
        set(ref(database, 'answers'),
            answerMatrix
        );
    }
    

    return <FirebaseContext.Provider 
                value={{answerMatrix, setAnswerMatrix, writeUserData, answerList1, answerList2, 
                    answerList3, answerList4, answerList5, answerList6, answerList7, answerList8, answerList9, answerList10,
                setCurrentQuestionIndexv2, currentQuestionIndexv2, padding1, padding2, padding3, padding4, padding5, padding6, padding7,
                padding8, padding9, padding10, changePadding, restartApp}}
            >
            {children}
            </FirebaseContext.Provider>
}

