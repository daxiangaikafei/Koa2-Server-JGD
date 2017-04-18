/**
 * created by zhao at 2017-3-20
 */
import * as ActionTypes from '../../../main/reducer/ActionTypes'

const initialState = {
    mobile: "",
    type:"",
    isShowAlert:"false"
}


export default function update (state = initialState, action){
    switch(action.type){
        case ActionTypes.FOUR_CHECK:
            return {
                     mobile:action.data.mobile,
                     type:"deblocking",
                      isShowAlert:"true"
                  }
        default:
            return state
    }
}