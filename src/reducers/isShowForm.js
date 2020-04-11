import * as types from '../constants/actionTypes'
let defaultState = false

const isShowForm = (state = defaultState, action) => {
    let {type} = action
    switch (type) {
        case types.TOGGLE_FORM:
            return !state
        case types.CLOSE_FORM:
            return false
        case types.OPEN_FORM:
            return true
        default:
            return state
    }
}

export default isShowForm