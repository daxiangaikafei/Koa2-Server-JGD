/**
 * created by zhao at 2017-3-20
 */
import * as ActionTypes from '../../../main/reducer/ActionTypes'
import * as helpAction from '../../../../redux/common/helpAction'
import {Alert} from '../../../../components/modal/alert'

const receiveData = data => ({
    type : ActionTypes.USER_INFO,
    data : data
})
//进入加载数据
export const getUserBlockInfo = (username) => dispatch => {
    
    let url = "userDeblocking/getUserDeblockingInfo"
    dispatch(helpAction.fetchPosts(url, url, {userName:username})).then((data)=>{
                    dispatch(receiveData(data));
            })
}





const payMoneyData = data => ({
    type : ActionTypes.PAY_MON,
    data : data
})
//确认支付
export const payMoney = (val) => dispatch => {
    let url = "userDeblocking/userDepositPay"
    dispatch(helpAction.fetchPosts(url, url, {pwd:val})).then((data)=>{
            dispatch(payMoneyData(data));
    })
}

