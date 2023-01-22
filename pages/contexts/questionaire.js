import { createContext, useReducer } from 'react';
import questions from "../questions";

// access questions from our state, so we can access these values globally from context functionality
const initialState = {
    // question array
    questions,
    // maintain the current question's array index
    currentQuestionIndex: 0,
    // show result page?
    isComplete: false,
    // privilege counter
    privilegeCount: 0,
    // current answer
    currentAnswer: '',
    // padding for track movement
    trackPadding: '',
    // array to store answer sequence
    answerSequence: [],
    // array to store player 1 sequence
    answerSequenceP1: [],
    privilegeCount1: 0,
    padding1: 0,
    // array to store player 2 sequence
    answerSequenceP2: [],
    privilegeCount2: 0,
    padding2: 0,
    // array to store player 3 sequence
    answerSequenceP3: [],
    privilegeCount3: 0,
    padding3: 0,
    // array to store player 4 sequence
    answerSequenceP4: [],
    privilegeCount4: 0,
    padding4: 0,
    // array to store player 5 sequence
    answerSequenceP5: [],
    privilegeCount5: 0,
    padding5: 0,
    // array to store player 6 sequence
    answerSequenceP6: [],
    privilegeCount6: 0,
    padding6: 0,
    // array to store player 7 sequence
    answerSequenceP7: [],
    privilegeCount7: 0,
    padding7: 0,
    // array to store player 8 sequence
    answerSequenceP8: [],
    privilegeCount8: 0,
    padding8: 0,
    // array to store player 9 sequence
    answerSequenceP9: [],
    privilegeCount9: 0,
    padding9: 0,
    // array to store player 10 sequence
    answerSequenceP10: [],
    privilegeCount10: 0,
    padding10: 0,
};


const reducer = (state, action) => {
    //console.log('reducer', state, action);

    // in reducer, create new objects, do not mutate old objects
    switch (action.type){
        case "select_answer": {
            const privilegeCount = action.payload === "yes" ? state.privilegeCount + 1 : state.privilegeCount;
            // add array values to answer sequence according to user's answer
            const answerSequence =  action.payload === "yes" 
                    ?
                        [...state.answerSequence, "yes"]
                    : 
                        [...state.answerSequence, "no"];
            // is questionaire complete?
            const isComplete = state.currentQuestionIndex === state.questions.length - 1;
            // compute currentQuestionIndex based on isComplete
            const currentQuestionIndex = isComplete ? state.currentQuestionIndex : state.currentQuestionIndex + 1;
            // compute trackPadding based on privilegeCount
            const trackPadding = "pl-" + (privilegeCount * 3).toString() + "vw";
            
            return{
                ...state,
                currentAnswer: action.payload,
                privilegeCount,
                currentQuestionIndex,
                isComplete,
                trackPadding,
                answerSequence,
            }
        }
        case "restart": {
            // restarting application so return initial state
            return initialState;
        }
        default: {
            return state;
        }
    }
    return state;
};

export const QuestionaireContext = createContext();

// children is our application. we are wrapping context around our entire app
export const QuestionaireProvider = ({ children }) => {
    const value = useReducer(reducer, initialState);
    return <QuestionaireContext.Provider value={value}>{children}</QuestionaireContext.Provider>;
};