import * as types from '../constants/actionTypes'
let defaultState = {
    orderBy: 'name',
    orderDir: 'asc'
}

const order = (state = defaultState, action) => {
    let {type, orderBy, orderDir} = action
    switch (type) {
        case types.ORDER_ITEM:
            return {orderBy: orderBy, orderDir: orderDir}
        default:
            return state
    }
}

export default order