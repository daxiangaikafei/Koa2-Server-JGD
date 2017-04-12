/**
 * created by zhao at 2017-3-20
 */
import * as ActionTypes from '../../main/reducer/ActionTypes'
import * as helpAction from '../../../redux/common/helpAction'

const receiveData = data => ({
    type : ActionTypes.INIT_MYSHIELD,
    data : data
})


/**获取我的安全中心 */
export const getMyShieldInfo = () => dispatch => {
    let url = "my/info"
    dispatch(helpAction.fetchPosts(url, url, {})).then(data=>dispatch(receiveData(data)))
}


export const onSaveFeedback = val => {
    var param = {};
    param.remark = helpAction.filteremoji(val);
    let url = "userFeedback/saveUserFeedback"
    return (dispatch, getState) => {
        return dispatch(helpAction.fetchPosts(url, url, param))
    }
}