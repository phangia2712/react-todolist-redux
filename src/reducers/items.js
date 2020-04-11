import * as types from '../constants/actionTypes'
import lodash from 'lodash'

const uuidv4 = require('uuid/v4')

let defaultState = []
defaultState = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : defaultState

const items = (state = defaultState, action) => {
    let {type, id, inputForm} = action
    switch (type) {
        case types.REMOVE_ITEM:
            lodash.remove(state, function(item) {
                return item.id === id
            })
            localStorage.setItem('tasks', JSON.stringify(state))
            return [...state] // ko return ve state lien vi se bi dinh tham chieu, phai return ve 1 ban copy cua state
        case types.ADD_ITEM:
                let myId
                if (inputForm.id === '') {
                    myId = uuidv4()
                } else {
                    state = lodash.reject(state, { id: inputForm.id })
                    myId = inputForm.id
                }
                state.push({
                    id: myId,
                    name: inputForm.name,
                    level: Number(inputForm.level)
                })
                localStorage.setItem('tasks', JSON.stringify(state))
            return [...state]
        default:
            return state
    }
}

export default items