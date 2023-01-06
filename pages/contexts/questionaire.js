import { createContext, useReducer } from 'react';
import questions from "../questions";

// access questions from our state, so we can access these values globally from context functionality
const initialState = {
    // question array
    questions,
    // maintain the current question's array index
    currentQuestionIndex: 0,
};

const reducer = (state, action) => {
    //console.log('reducer', state, action);

    // in reducer, create new objects, do not mutate old objects
    switch (action.type){
        case "next_question": {
            return {
                ...state,
                // override currentQuestionIndex
                currentQuestionIndex: state.currentQuestionIndex + 1,
            }
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