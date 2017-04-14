/**
 * created by zhao at 2017-3-20
 */
import * as ActionTypes from '../../../main/reducer/ActionTypes'

const initialState = {
    phoneTxt: ""
}


export default function update (state = initialState, action){
    switch(action.type){
        case ActionTypes.GET_MSG:
            return {
                phoneTxt:action.data.mobile||""
            }
        case ActionTypes.GET_MSG:
            return {
                ...state
            }
        case ActionTypes.COMFIRM_CODE:
            navigator.push('/stepThree')
            return {
                ...state
            }
        default:
            return state
    }
}