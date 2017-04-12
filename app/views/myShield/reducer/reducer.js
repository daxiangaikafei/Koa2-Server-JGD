/**
 * created by zhao at 2017-3-20
 */
import * as ActionTypes from '../../main/reducer/ActionTypes'


const initialState = {
    realName: "",
    userName: "",
    openTime: ""
}

let initMyShield = (state, data) => {
    return {
        ...state,
        realName: data.realName,
        userName: data.userName,
        openTime: data.startDate
    }
}

export default function update (state = initialState, action){
    switch(action.type){
        case ActionTypes.INIT_MYSHIELD:
            return initMyShield(state, action.data)
        default:
            return state
    }
}