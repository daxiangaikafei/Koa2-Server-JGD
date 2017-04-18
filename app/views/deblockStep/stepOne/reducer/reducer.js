/**
 * created by zhao at 2017-3-20
 */
import * as ActionTypes from '../../../main/reducer/ActionTypes'
import * as helpAction from '../../../../redux/common/helpAction'

const initialState = {
    nextDisplay: "block",
    nextDisabled:"disabled",
    payDisplay:"block",
    payResultDisplay:"none",
    payResultStr:"",
    amount:50
}
const PAYOKSTRING = "解封押金已支付成功<br />请点击下一步继续";
const NOTDEBLOCKSTRING = "由于您的账号不支持在线自助解封<br />请您<span class='red'><a href='tel:4001558899'>拨打客服电话400-155-8899</a></span>进行申诉。<br />谢谢！";

export default function update (state = initialState, action){
   
    if(action.type==ActionTypes.USER_INFO&&action.data){
         console.log(action.type,action.data,11111111111111)
        if(action.data.status==0){
            return {
                ...state,
                payDisplay:'none',
                payResultStr:NOTDEBLOCKSTRING,
                payResultDisplay:"block",
                nextDisplay:"none"
            }
        }else if(action.data.status==1){
            return {
                ...state,
                payDisplay:"block",
                amount:action.data.deposit,
                amount:50
            }
        }else if(action.data.status==2){
            return {
                ...state,
                payResultStr:PAYOKSTRING,
                payResultDisplay:"block",
                nextDisabled:"",
                payDisplay:"none"
            }
        }
    }
    else if(action.type==ActionTypes.PAY_MON){
        return {
            ...state,
            nextDisabled : "", 
            payDisplay:"none", 
            payResultDisplay:"block", 
            payResultStr: PAYOKSTRING
        }
    }
    else{
        return state
    }

    return state
}