import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';


const initialState = {
    input: ""
}

function wreducer(state = initialState, action) {
    switch(action.type) {
        case"LOCATION":
            return {
               input: action.payload
            
            };
        default:
            return state;
    }
}


const store = createStore(wreducer, composeWithDevTools());
store.dispatch({type: "LOCATION"})

export default store;