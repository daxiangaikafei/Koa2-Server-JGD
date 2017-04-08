/**
 * created by zhao at 2017-3-20
 */
import * as ActionTypes from '../../main/reducer/ActionTypes'


const initialState = {
    myFooterList: []
}

let initMyFooter = (state, data) => {
    return {
        ...state,
        myFooterList: data
    }
}

export default function update (state = initialState, action){
    switch(action.type){
        case ActionTypes.INIT_MYFOOTER:
            return initMyFooter(state, action.data)
        default:
            return state
    }
}