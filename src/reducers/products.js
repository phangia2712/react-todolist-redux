import * as types from '../constants/actionTypes'
import lodash from 'lodash'
const uuidv4 = require('uuid/v4')
const images = require.context('../images', true)
let defaultState = [
    {
        id: uuidv4(),
        imgLink: images('./aplusautomation.jpg'),
        title: 'aplusautomation',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
        price: 12,
        quantity: 1,
        closeStatus: false
    },
    {
        id: uuidv4(),
        imgLink: images('./aplus-media.jpg'),
        title: 'aplus media',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
        price: 50,
        quantity: 1,
        closeStatus: true
    },
    {
        id: uuidv4(),
        imgLink: images('./robo_fig_combo.jpg'),
        title: 'robo fig combo',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
        price: 23,
        quantity: 1,
        closeStatus: false
    },
    {
        id: uuidv4(),
        imgLink: images('./target-leap-frog.jpg'),
        title: 'target leap frog',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
        price: 50,
        quantity: 1,
        closeStatus: false
    }
]

const products = (state = defaultState, action) => {
    let { type, item, newQuantity } = action
    console.log('newQuantity', newQuantity)
    switch(type) {
        case types.CHANGE_QUANTITY_PRODUCT:
                state = lodash.reject(state, { id: item.id })
                state.push({
                    id: item.id,
                    imgLink: item.imgLink,
                    title: item.title,
                    content: item.content,
                    price: item.price,
                    quantity: newQuantity,
                    closeStatus: item.closeStatus
                })
            return state
        default:
            return state
    }
}

export default products