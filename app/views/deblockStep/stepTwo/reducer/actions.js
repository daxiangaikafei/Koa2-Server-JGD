/**
 * created by zhao at 2017-3-20
 */
import * as ActionTypes from '../../../main/reducer/ActionTypes'
import * as helpAction from '../../../../redux/common/helpAction'
import navigate  from '../../../../router/navigate'
import * as routerConst from '../../../../static/const/routerConst.js'

const getUserData = data => ({
    type : ActionTypes.GET_TWO_DATA,
    data : data
})
//获取数据
export const getData = () => dispatch => {
    let url = "userDeblocking/getUserStatus"
    dispatch(helpAction.fetchPosts(url, url, {})).then((data)=>{
            dispatch(getUserData(data));
    })
}


const getMsgData = data => ({
    type : ActionTypes.GET_MSG,
    data : data
})
//获取短信
export const getMssage = () => dispatch => {
    let url = "userDeblocking/getSmsKey"
    dispatch(helpAction.fetchPosts(url, url, {})).then((data)=>{
            dispatch(getMsgData(data));
    })
}


const codeData = data => ({
    type : ActionTypes.COMFIRM_CODE,
    data : data
})
let setNum=(obj)=>{
    let step;
    if(obj==1){step=routerConst.ROUTER_STEP_ONE}
    else if(obj==2){step=routerConst.ROUTER_STEP_TWO}
    else if(obj==3){step=routerConst.ROUTER_STEP_THREE}
    else if(obj==4){step=routerConst.ROUTER_STEP_FOUR}
    else if(obj==5){step=routerConst.ROUTER_STEP_FIVE}
    else if(obj==6){step=routerConst.ROUTER_STEP_SIX}
    else{step=routerConst.ROUTER_STEP_THREE}
    return step;
}
//确认验证码
export const comfirmCode = (code) => dispatch => {
    let url = "userDeblocking/smsKeyVerification"
    dispatch(helpAction.fetchPosts(url, url, {smsKey:code})).then((data)=>{
            let  step=setNum(data.status)
            navigate.push(step)
    })
}