import * as types from '../constants/actionTypes'
let defaultState = ''

const strSearch = (state = defaultState, action) => {
    let {type, strSearch} = action
    switch (type) {
        case types.SEARCH_ITEM:
            return strSearch
        default:
            return state
    }
}

export default strSearch