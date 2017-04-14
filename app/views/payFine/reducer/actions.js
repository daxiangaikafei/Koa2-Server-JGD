/**
 * created by zhao at 2017-3-31
 */
import * as ActionTypes from '../../main/reducer/ActionTypes'
import * as helpAction from '../../../redux/common/helpAction'

let formatData = data => {
    data.ma
}

const receiveData = data => ({
    type : ActionTypes.INIT_PAY_FINE,
    data : {
        ...data,
        punishDetailList: data.punishDetailList.map((obj)=>({
            ...obj,
            bbAmt: helpAction.fenToYuan(obj.bbPunish),
            bqAmt: helpAction.fenToYuan(obj.bqPunish)
        }))
    }
})

/**获取套餐数据 */
export const getPayData = () => dispatch => {
    let url = "rights/punishInit"
    dispatch(helpAction.fetchPosts(url, url, {})).then((data)=>dispatch(receiveData(data)))
}

export const changeBreakType = val => dispatch => {
    dispatch({
        type: ActionTypes.CHANGE_BREAK_TYPE,
        data: val
    })
}

export const payFine = (param) => {
    param.pwd = helpAction.encodePassword(param.pwd)
    let url = "rights/punishPay"
    return (dispatch, getState) => {
        return dispatch(helpAction.fetchPosts(url, url, param))
    }
}