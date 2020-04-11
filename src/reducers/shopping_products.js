import * as types from '../constants/actionTypes'
// import lodash from 'lodash'
// const uuidv4 = require('uuid/v4')
let defaultState = [
    {
        id: 1,
        imgLink: 'aplusautomation.jpg',
        title: 'aplusautomation',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
        price: 12,
        closeStatus: false
    },
    {
        id: 2,
        imgLink: 'aplus-media.jpg',
        title: 'aplus media',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
        price: 50,
        closeStatus: true
    },
    {
        id: 3,
        imgLink: 'robo_fig_combo.jpg',
        title: 'robo fig combo',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
        price: 23,
        closeStatus: false
    },
    {
        // id: uuidv4(),
        id: 4,
        imgLink: 'target-leap-frog.jpg',
        title: 'target leap frog',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
        price: 50,
        closeStatus: false
    }
]



const shopping_products = (state = defaultState, action) => {
    let { type } = action
    switch(type) {
        default:
            return state
    }
}

export default shopping_products