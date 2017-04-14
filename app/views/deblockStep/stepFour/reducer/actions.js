/**
 * created by zhao at 2017-3-20
 */
import * as ActionTypes from '../../../main/reducer/ActionTypes'
import * as helpAction from '../../../../redux/common/helpAction'
import navigate  from '../../../../router/navigate'

let setNum=(obj)=>{
    let step;
    if(obj==1){step='stepOne'}
    else if(obj==2){step='stepTwo'}
    else if(obj==3){step='stepThree'}
    else if(obj==4){step='stepFour'}
    else if(obj==5){step='stepFive'}
    else if(obj==6){step='stepSix'}
    else{step='stepFive'}
    return step;
}
const receiveData = data => ({
    type : ActionTypes.GET_DATA,
    data : data
})
//获取首页用户数据
export const getUserData = () => dispatch => {
    let url = "userDeblocking/getAnswer"
    dispatch(helpAction.fetchPosts(url, url, {})).then((data)=>{
            dispatch(receiveData(data));
    })
}
export const securityVerification = (obj) => dispatch => {
    let url = "userDeblocking/securityVerification"
    dispatch(helpAction.fetchPosts(url, url, obj)).then((data)=>{
        var step =setNum(data.status) || 'stepFive';
        navigate.push(step)
    })
}
export const moneyVerification = (obj) => dispatch => {
    let url = "userDeblocking/moneyVerification"
    dispatch(helpAction.fetchPosts(url, url, obj)).then((data)=>{
        var step =setNum(data.status) || 'stepFive';
        navigate.push(step)
    })
}
