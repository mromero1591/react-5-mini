//inital state
const initalState = {
    currentValue: 0,
    futureValues: [],
    previousValues: []
}

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const UNDO = 'UNDO';
const REDO = 'REDO';

function counter(state = initalState, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                currentValue: state.currentValue + action.amount,
                futureValues: [],
                previousValues: [state.currentValue,...state.previousValues]
            };

        case DECREMENT:
            return {
                currentValue: state.currentValue - action.amount
            }

        case UNDO:
            return {
                currentValue: state.previousValues[0],
                futureValues: [state.currentValue, ...state.futureValues],
                previousValues: state.previousValues.slice(1)
            }
        case REDO:
            return {
                currentValue: state.futureValues[0],
                futureValues: state.futureValues.slice(1),
                previousValues: [state.currentValue, ...state.previousValues]
            }
        default:
            return state;
    }
    return state;
}


//ACTION CREATORS
export function increment(amount) {
    return {
        amount, 
        type:INCREMENT
    };
}

export function decrement(amount) {
    return {
        amount,
        type:DECREMENT
    }
}

export function redo() {
    return {
        type: REDO
    }
}

export function undo() {
    return {
        type: UNDO
    }
}

export default counter;

