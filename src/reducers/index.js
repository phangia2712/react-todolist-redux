import { combineReducers } from "redux";
import items from './items'
import isShowForm from './isShowForm'
import strSearch from './strSearch'
import order from './order'
import isSelected from './isSelected'
import shopping_products from './shopping_products'
import shopping_notify from './shopping_notify'
import shopping_cart_list from './shopping_cart_list'


const appReducers = combineReducers({
    items,
    isShowForm,
    strSearch,
    order,
    isSelected,
    shopping_products,
    shopping_notify,
    shopping_cart_list
})

export default appReducers