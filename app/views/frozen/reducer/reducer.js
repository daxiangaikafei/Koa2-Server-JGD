/**
 * created by zhao at 2017-3-20
 */
import * as ActionTypes from '../../main/reducer/ActionTypes'


const initialState = {
    mobile: ""
}

export default function update (state = initialState, action){
    switch(action.type){
        case ActionTypes.INIT_FROZEN_MOBILE:
            return {
                ...state,
                mobile: action.data.mobile
            }
        default:
            return state
    }
}