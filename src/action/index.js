import * as types from '../constants/actionTypes'

export const actToggleForm = () => {
    return {
        type: types.TOGGLE_FORM
    }
}

export const actCloseForm = () => {
    return {
        type: types.CLOSE_FORM
    }
}

export const actOpenForm = () => {
    return {
        type: types.OPEN_FORM
    }
}


export const actSearchItem = (strSearch) => {
    return {
        type: types.SEARCH_ITEM,
        strSearch
    }
}

export const actOrderItem = (orderBy, orderDir) => {
    return {
        type: types.ORDER_ITEM,
        orderBy,
        orderDir
    }
}

export const actRemoveItem = (id) => {
    return {
        type: types.REMOVE_ITEM,
        id
    }
}

export const actAddItem = (inputForm) => { // ten tham so truyen vao phai giong voi ten tham so truyen vao ben Form: actAddItem: (inputForm) => dispatch(actAddItem(inputForm)) neu khong se bi loi ko add dc
    return {
        type: types.ADD_ITEM,
        inputForm
    }
}

export const actGetValueIsSelected = (item) => {
    return {
        type: types.GET_VALUE_IS_SELECTED,
        item
    }
}

export const actResetIsSelected = () => {
    return {
        type: types.RESET_IS_SELECTED
    }
}

/* Shopping Cart */

export const actListProduct = () => {
    return {
        type: types.LIST_PRODUCT
    }
}
export const actBuyProduct = (product, quantity) => {
    return {
        type: types.BUY_PRODUCT,
        product,
        quantity
    }
}
export const actUpdateProduct = (product, quantity) => {
    return {
        type: types.UPDATE_PRODUCT,
        product,
        quantity
    }
}
export const actDeleteProduct = (idProduct) => {
    return {
        type: types.DELETE_PRODUCT,
        idProduct
    }
}
export const actChangeNotify = (content) => {
    return {
        type: types.CHANGE_NOTIFY,
        content
    }
}


