/**
 * created by zhao at 2017-3-20
 */
import * as ActionTypes from '../../../main/reducer/ActionTypes'
import * as helpAction from '../../../../redux/common/helpAction'


const receiveData = data => ({
    type : ActionTypes.CHEK_INFO,
    data : data
})
//检查四要素信息
export const checkInfo = (obj) => dispatch => {
    let url = "userDeblocking/fourElementsVerification";
    dispatch(helpAction.fetchPosts(url, url, {})).then((data)=>{
            dispatch(receiveData(data));
    })
}
