/**
 * created by zhao at 2017-3-20
 */
import * as ActionTypes from '../../../main/reducer/ActionTypes'
import * as helpAction from '../../../../redux/common/helpAction'


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
