/**
 * created by zhao at 2017-3-20
 */
import * as ActionTypes from '../../../main/reducer/ActionTypes'
import * as helpAction from '../../../../redux/common/helpAction'
import Modal from '../../../../components/modal'
import navigate  from '../../../../router/navigate'

const receiveData = data => ({
    type : ActionTypes.FOUR_CHECK,
    data : data
})
let setNum=(obj)=>{
    let step;
    if(obj==1){step='stepOne'}
    else if(obj==2){step='stepTwo'}
    else if(obj==3){step='stepThree'}
    else if(obj==4){step='stepFour'}
    else if(obj==5){step='stepFive'}
    else if(obj==6){step='stepSix'}
    else{step='stepFour'}
    return step;
}
//检查四要素信息
export const checkInfo = (obj) => dispatch => {
    let url = "userDeblocking/fourElementsVerification";
    dispatch(helpAction.fetchPosts(url, url, {})).then((data)=>{
            dispatch(receiveData(data));
    })
}





export const comfirmCode = (code) => dispatch => {
    let url = "userDeblocking/fourElementsVerification";
    dispatch(helpAction.fetchPosts(url, url, {smsKey:code})).then((data)=>{
            navigate.push(setNum(data.status ))
    })
}
