/**
 * created by zhao at 2017-3-20
 */
import * as ActionTypes from '../../../main/reducer/ActionTypes'
import * as helpAction from '../../../../redux/common/helpAction'
import navigate  from '../../../../router/navigate'
import * as routerConst from '../../../../static/const/routerConst.js'


const receiveData = data => ({
    type : ActionTypes.GETFIVE_DATA,
    data : data
})
//获取首页用户数据
export const getFiveData = () => dispatch => {
    let url = "userDeblocking/pkgs"
    dispatch(helpAction.fetchPosts(url, url, {})).then((data)=>{
        console.log(data)
            dispatch(receiveData(data));
    })
}

const payData = data => ({
    type : ActionTypes.PAY_MONEY,
    data : data
})
export const payMoney = (id) => dispatch => {
    let url = "userDeblocking/pay"
    dispatch(helpAction.fetchPosts(url, url, {pkgId:id})).then((data)=>{
        navigate.push(routerConst.ROUTER_STEP_SIX)
    })
}