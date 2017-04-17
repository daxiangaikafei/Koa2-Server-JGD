/**
 * created by zhao at 2017-3-20
 */
import * as ActionTypes from '../../../main/reducer/ActionTypes'

const initialState = {
    mobile: "",
    type:""
}


export default function update (state = initialState, action){
    switch(action.type){
        case ActionTypes.FOUR_CHECK:
         if(action.data.code == "1001"){
                       return {
                        mobile:action.data.mobile,
                        type:"deblocking"
                    }
                }
        default:
            return state
    }
}