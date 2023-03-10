import { createContext, useReducer } from 'react';
import { questions } from "./questions";

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
    // padding for track movement
    trackPadding: 'pl-0vw',
    // padding for mobile track movement
    mobileTrackPadding: 'pb-0',
    // array to store answer sequence
    answerSequence: ["yes"],
    // boolean for start
    startClicked: true,
    // player walk boolean
    walk: false,
};


const reducer = (state, action) => {
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
            // compute mobileTrackPadding based on privilegeCount
            const mobileTrackPadding = "pb-" + (privilegeCount).toString();
            // change walk boolean depending on player answerSequence
            const walk = action.payload === "yes";
            
            return{
                ...state,
                privilegeCount,
                currentQuestionIndex,
                isComplete,
                trackPadding,
                mobileTrackPadding,
                answerSequence,
                walk
            }
        }
        case "restart": {
            // restarting application so return initial state
            return initialState;
        }
        case "reset_walk": {
            const walk = false;
            return {
                ...state,
                walk
            }
        }
        case "start": {
            const startClicked = false;

            return {
                ...state,
                startClicked
            }
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