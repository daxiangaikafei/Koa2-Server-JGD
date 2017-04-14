/**
 * created by zhao at 2017-3-20
 */
import * as ActionTypes from '../../../main/reducer/ActionTypes'

const initialState = {
   securityQuestionStr : "",
   securitySelectDisplay : "block",
   securityListDisplay : "none",
   nextDisabled : "disabled"
}

let initData = (state, data) => {
     var _securitySelectDisplay = "none", _securityListDisplay = "none", _securityQuestionStr="";
    if(data.isBindMibao == 1){
          _securityQuestionStr = "密保问题：" + data.question;
          _securitySelectDisplay = "block";
    }else{
          _securityListDisplay = "block";
    }
    return {
        ...state,
        securitySelectDisplay : _securitySelectDisplay,
        securityListDisplay : _securityListDisplay,
        nextDisabled : "",
        securityQuestionStr: _securityQuestionStr
    }
}
export default function update (state = initialState, action){
    let data=action.data;
    switch(action.type){
        case ActionTypes.GET_DATA:
            return initData(state, data )
        default:
            return state
    }
}