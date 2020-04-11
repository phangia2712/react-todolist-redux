import * as types from '../constants/actionTypes'
let defaultState = null

const isSelected = (state = defaultState, action) => {
    let {type, item} = action
    switch (type) {
        case types.GET_VALUE_IS_SELECTED:
            return item
        case types.RESET_IS_SELECTED:
            return {
                id: '',
                name: '',
                level: 1
            }
        default:
            return state
    }
}

export default isSelected