/**
 * created by zhao at 2017-3-20
 */
import * as ActionTypes from '../../../main/reducer/ActionTypes'
import * as helpAction from '../../../../redux/common/helpAction'


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
