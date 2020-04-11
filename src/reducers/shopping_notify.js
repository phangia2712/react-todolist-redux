import * as types from '../constants/actionTypes'
import * as configs from '../constants/configs';

let defaultState = configs.NOTI_READY_TO_BUY;

const notify = (state = defaultState, action) => {
    let { type, content } = action;
    switch(type) {
        case types.CHANGE_NOTIFY:
            return content;
        default:
            return state;
    }
}

export default notify;
