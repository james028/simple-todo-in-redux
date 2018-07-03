import { createStore } from 'redux'

const initialState = {
    inputText: '',
    items: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_VALUE':
            return Object.assign({}, state, { inputText: action.text });
        case 'ADD_ITEM': 
            return Object.assign(
                {}, state, { items: state.items.concat(state.inputText), inputText: ''}
            );
        case 'DELETE_ITEM': 
            const objDel = state.items.slice();
            objDel.splice(action.index, 1);
            return Object.assign({}, state, { items: objDel });
        default: 
            return state;
    }
}

const store = createStore(reducer);

export default store;