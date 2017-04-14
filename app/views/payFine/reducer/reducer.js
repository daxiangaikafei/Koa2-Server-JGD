/**
 * created by zhao at 2017-3-20
 */
import * as ActionTypes from '../../main/reducer/ActionTypes'


const initialState = {
    breakType: 0,
    punishDetailList: [],
    punishTypeList: []
}

export default function update (state = initialState, action){
    switch(action.type){
        case ActionTypes.INIT_PAY_FINE:
            return {
                ...state,
                breakType: action.data.punishTypeList.length > 0 ? action.data.punishTypeList[0].breakType : 0,
                punishDetailList: action.data.punishDetailList,
                punishTypeList: action.data.punishTypeList,
            }
        case ActionTypes.CHANGE_BREAK_TYPE:
            return {
                ...state,
                breakType: action.data
            }
        default:
            return state
    }
}