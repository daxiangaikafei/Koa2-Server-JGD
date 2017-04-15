/**
 * created by zhao at 2017-3-20
 */
import * as ActionTypes from '../../../main/reducer/ActionTypes'

const initialState = {
    content:[]
}


export default function update (state = initialState, action){
    switch(action.type){
        case ActionTypes.GETFIVE_DATA:
            return {
                content:action.data
            }
        default:
            return state
    }
}