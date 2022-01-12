import { CHANGE_NUMBER_OF_ITEM } from '../actions/app'

const initialState = {
    items: [],
}

function appReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_NUMBER_OF_ITEM:
            return {
                ...state,
                items: [...state.items, action.value]
            }
        default:
            return state;
    }
}

export default appReducer;