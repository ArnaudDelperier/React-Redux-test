import {
    CHANGE_CONTAINER_NAME, EDIT_CONTAINER_NAME,
} from '../actions/container'

const initialState = {
    name: "no name",
    inputField: "",
}

function containerReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_CONTAINER_NAME:
            return {
                ...state,
                inputField: action.value
            }
        case EDIT_CONTAINER_NAME:
            return {
                ...state,
                name: state.inputField,
            }
        default:
            return state;
    }
}

export default containerReducer;