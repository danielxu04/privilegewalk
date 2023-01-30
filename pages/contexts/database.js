import { createContext, useEffect, useState } from 'react';
import { ref, getDatabase, child, get, set } from 'firebase/database';
import { database } from '../../firebase/firebase';




export const FirebaseContext = createContext();

export function FirebaseContextProvider({ children }) {

    const [answerMatrix, setAnswerMatrix] = useState();

    const [answerList1, setAnswerList1] = useState();
    const [answerList2, setAnswerList2] = useState();
    const [answerList3, setAnswerList3] = useState();
    const [answerList4, setAnswerList4] = useState();
    const [answerList5, setAnswerList5] = useState();
    const [answerList6, setAnswerList6] = useState();
    const [answerList7, setAnswerList7] = useState();
    const [answerList8, setAnswerList8] = useState();
    const [answerList9, setAnswerList9] = useState();
    const [answerList10, setAnswerList10] = useState(); 

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

    const[padding1, setPadding1] = useState('pl-[0vw]');
    const[padding2, setPadding2] = useState('pl-[0vw]');
    const[padding3, setPadding3] = useState('pl-[0vw]');
    const[padding4, setPadding4] = useState('pl-[0vw]');
    const[padding5, setPadding5] = useState('pl-[0vw]');
    const[padding6, setPadding6] = useState('pl-[0vw]');
    const[padding7, setPadding7] = useState('pl-[0vw]');
    const[padding8, setPadding8] = useState('pl-[0vw]');
    const[padding9, setPadding9] = useState('pl-[0vw]');
    const[padding10, setPadding10] = useState('pl-[0vw]');

    const[currentQuestionIndexv2, setCurrentQuestionIndexv2] = useState(0);

    
    function changePadding(){
        setPrivilegeCount1(answerList1[currentQuestionIndexv2] === "yes" ? privilegeCount1 + 1 : privilegeCount1);
        setWalk1(answerList1[currentQuestionIndexv2 - 1] === "yes" ? true : false);
        setPadding1("pl-" + (privilegeCount1 * 3).toString() + "vw");

        setPrivilegeCount2(answerList2[currentQuestionIndexv2] === "yes" ? privilegeCount2 + 1 : privilegeCount2);
        setPadding2("pl-" + (privilegeCount2 * 3).toString() + "vw");
        setWalk2(answerList2[currentQuestionIndexv2 - 1] === "yes" ? true : false);

        setPrivilegeCount3(answerList3[currentQuestionIndexv2] === "yes" ? privilegeCount3 + 1 : privilegeCount3);
        setPadding3("pl-" + (privilegeCount3 * 3).toString() + "vw"); 
        setWalk3(answerList3[currentQuestionIndexv2 - 1] === "yes" ? true : false);

        setPrivilegeCount4(answerList4[currentQuestionIndexv2] === "yes" ? privilegeCount4 + 1 : privilegeCount4);
        setPadding4("pl-" + (privilegeCount4 * 3).toString() + "vw"); 
        setWalk4(answerList4[currentQuestionIndexv2 - 1] === "yes" ? true : false);

        setPrivilegeCount5(answerList5[currentQuestionIndexv2] === "yes" ? privilegeCount5 + 1 : privilegeCount5);
        setPadding5("pl-" + (privilegeCount5 * 3).toString() + "vw");
        setWalk5(answerList5[currentQuestionIndexv2 - 1] === "yes" ? true : false);

        setPrivilegeCount6(answerList6[currentQuestionIndexv2] === "yes" ? privilegeCount6 + 1 : privilegeCount6);
        setPadding6("pl-" + (privilegeCount6 * 3).toString() + "vw");
        setWalk6(answerList6[currentQuestionIndexv2 - 1] === "yes" ? true : false);

        setPrivilegeCount7(answerList7[currentQuestionIndexv2] === "yes" ? privilegeCount7 + 1 : privilegeCount7);
        setPadding7("pl-" + (privilegeCount7 * 3).toString() + "vw");
        setWalk7(answerList7[currentQuestionIndexv2 - 1] === "yes" ? true : false);

        setPrivilegeCount8(answerList8[currentQuestionIndexv2] === "yes" ? privilegeCount8 + 1 : privilegeCount8);
        setPadding8("pl-" + (privilegeCount8 * 3).toString() + "vw"); 
        setWalk8(answerList8[currentQuestionIndexv2 - 1] === "yes" ? true : false);

        setPrivilegeCount9(answerList9[currentQuestionIndexv2] === "yes" ? privilegeCount9 + 1 : privilegeCount9);
        setPadding9("pl-" + (privilegeCount9 * 3).toString() + "vw"); 
        setWalk9(answerList9[currentQuestionIndexv2 - 1] === "yes" ? true : false);

        setPrivilegeCount10(answerList10[currentQuestionIndexv2] === "yes" ? privilegeCount10 + 1 : privilegeCount10);
        setPadding10("pl-" + (privilegeCount10 * 3).toString() + "vw");
        setWalk10(answerList10[currentQuestionIndexv2 - 1] === "yes" ? true : false);
        }

    function writeUserData() {
        console.log("writing...");
        console.log("answerMatrix: ", answerMatrix);
        set(ref(database, 'answers'),
            answerMatrix
        );
    }

    const [walk, setWalk] = useState(false);

    const [walk1, setWalk1] = useState(false);
    const [walk2, setWalk2] = useState(false);
    const [walk3, setWalk3] = useState(false);
    const [walk4, setWalk4] = useState(false);
    const [walk5, setWalk5] = useState(false);
    const [walk6, setWalk6] = useState(false);
    const [walk7, setWalk7] = useState(false);
    const [walk8, setWalk8] = useState(false);
    const [walk9, setWalk9] = useState(false);
    const [walk10, setWalk10] = useState(false);
    



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
                setCurrentQuestionIndexv2, currentQuestionIndexv2, padding1, padding2, padding3, padding4, padding5, padding6, padding7,
                padding8, padding9, padding10, changePadding, walk, setWalk, walk1, walk2, walk3, walk4, walk5, walk6, walk7,
                walk8, walk9, walk10, setWalk1, setWalk2, setWalk3, setWalk4, setWalk5, setWalk6, setWalk7, setWalk8, setWalk9, setWalk10,
                mobilePadding1, mobilePadding2, mobilePadding3, mobilePadding4, changePaddingMobile}}
            >
            {children}
            </FirebaseContext.Provider>
}

export default () => null;

