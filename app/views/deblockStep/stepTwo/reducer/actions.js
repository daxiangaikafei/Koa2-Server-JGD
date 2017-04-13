/**
 * created by zhao at 2017-3-20
 */
import * as ActionTypes from '../../../main/reducer/ActionTypes'
import * as helpAction from '../../../../redux/common/helpAction'


const getMsgData = data => ({
    type : ActionTypes.GET_MSG,
    data : data
})
//获取短信
export const getMssage = () => dispatch => {
    let url = "userDeblocking/getSmsKey"
    dispatch(helpAction.fetchPosts(url, url, {})).then((data)=>{
        console.log(data)
            dispatch(getMsgData(data));
    })
}


const codeData = data => ({
    type : ActionTypes.COMFIRM_CODE,
    data : data
})
//确认验证码
export const comfirmCode = (code) => dispatch => {
    let url = "userDeblocking/smsKeyVerification"
    dispatch(helpAction.fetchPosts(url, url, {smsKey:code})).then((data)=>{
            dispatch(codeData(data));
    })
}