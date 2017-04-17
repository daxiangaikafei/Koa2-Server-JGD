/**
 * created by zhao at 2017-3-20
 */
import * as ActionTypes from '../../../main/reducer/ActionTypes'
const initialState = {
    phoneTxt: "",
    nextDisabled:"disabled"
}



export default function update (state = initialState, action){
    switch(action.type){
        case ActionTypes.GET_TWO_DATA:
            return {
                ...state,
                phoneTxt:action.data.mobile,
            }
        case ActionTypes.GET_MSG:
            return {
                ...state,
                nextDisabled:action.data.nextDisabled
            }
        case ActionTypes.COMFIRM_CODE:
            let  step=setNum(action.data.status)||'stepThree'
            navigate.push(step)
        default:
            return state
    }
}