/**
 * created by zhao at 2017-3-20
 */
import * as ActionTypes from '../../../main/reducer/ActionTypes'
import * as helpAction from '../../../../redux/common/helpAction'
import navigate  from '../../../../router/navigate'
import * as routerConst from '../../../../static/const/routerConst.js'

let setNum=(obj)=>{
    let step;
    if(obj==1){step=routerConst.ROUTER_STEP_ONE}
    else if(obj==2){step=routerConst.ROUTER_STEP_TWO}
    else if(obj==3){step=routerConst.ROUTER_STEP_THREE}
    else if(obj==4){step=routerConst.ROUTER_STEP_FOUR}
    else if(obj==5){step=routerConst.ROUTER_STEP_FIVE}
    else if(obj==6){step=routerConst.ROUTER_STEP_SIX}
    else{step=routerConst.ROUTER_STEP_FIVE}
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
    dispatch(helpAction.fetchPosts(url, url, {answer:obj})).then((data)=>{
        var step =setNum(data.status) 
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
