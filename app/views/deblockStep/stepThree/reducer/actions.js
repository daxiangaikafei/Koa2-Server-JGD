/**
 * created by zhao at 2017-3-20
 */
import * as ActionTypes from '../../../main/reducer/ActionTypes'
import * as helpAction from '../../../../redux/common/helpAction'
import Modal from '../../../../components/modal'
import navigate  from '../../../../router/navigate'
import * as routerConst from '../../../../static/const/routerConst.js'

const receiveData = data => ({
    type : ActionTypes.FOUR_CHECK,
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
    else{step=routerConst.ROUTER_STEP_FOUR}
    return step;
}
//检查四要素信息
export const checkInfo = (obj) => dispatch => {
    let url = "userDeblocking/fourElementsVerification";
    dispatch(helpAction.fetchPosts(url, url, {
        name:obj.name,
        identity:obj.identity,
        mobile:obj.mobile,
        cardNo:obj.cardNo
    })).then((data)=>{
            dispatch(receiveData(data));
    })
}





export const comfirmCode = (code) => dispatch => {
    let url = "userDeblocking/fourElementsVerification";
    dispatch(helpAction.fetchPosts(url, url, {smsKey:code})).then((data)=>{
            navigate.push(setNum(data.status ))
    })
}
