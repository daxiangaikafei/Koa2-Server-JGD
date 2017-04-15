import * as helpAction from '../../../redux/common/helpAction'
import * as ActionTypes from '../../main/reducer/ActionTypes'
import navigate from '../../../router/navigate'
import {RouterConst} from '../../../static/const'

/**
 * 检测账号是否可以冻结
 * @param {*} accountName 
 */
export const checkFrozenAccount = (accountName) => dispatch => {
    let url = "userFrozen/verificationUser", opt = {};
    opt.name = accountName;
    dispatch(helpAction.fetchPosts(url, url, opt)).then(data=>{
        data.status == 1 ? navigate.push(RouterConst.ROUTER_FROZEN_CHOICE_WAY) : gotoFrozenResult(data, "check")
    })
}

let receiveMobileData = data => ({
    type : ActionTypes.INIT_FROZEN_MOBILE,
    data : data
})

export const getUserMobile = () => dispatch => {
    let url = "userFrozen/verificationType", opt = {}
    opt.type = 1
    dispatch(helpAction.fetchPosts(url, url, opt)).then(data=>dispatch(receiveMobileData(data)))
}

export const getSmsKey = () => {
    let url = "userFrozen/getSmsKey"
    return (dispatch, getState) => {
        return dispatch(helpAction.fetchPosts(url, url, {}))
    }
}

/**
 * 验证短信验证码是否通过
 */
export const checkSmsKey = (code) => dispatch => {
    let url = "userFrozen/verificationMobile", opt = {}
    opt.smsKey = code;
    dispatch(helpAction.fetchPosts(url, url, opt)).then(data=>gotoFrozenResult(data))
}

export const gotoFrozenResult = (data, fromType) => {
    let params = {};
    if(data.status){
        params.status = true;
    }else{
        params.errorTimes = data.errorTimes;
        params.totalTimes = data.totalTimes;
        params.message = data.message;
        params.status = false
    }

    if(fromType){
        params.fromType = fromType;
    }
    navigate.push(RouterConst.ROUTER_FROZEN_ACCOUNT_RESULT+encodeURIComponent(encodeURIComponent(JSON.stringify(params))));
}


/**
 * 银行四要素冻结账号
 * opts = {};
 * opts.name
 * opts.identity
 * opts.cardNo
 * opts.mobile 银行手机号码
 */
export const checkFourElements = opts => dispatch => {
    let url = "userFrozen/verificationFourElements"
    dispatch(helpAction.fetchPosts(url, url, opts)).then(data=>gotoFrozenResult(data))
}