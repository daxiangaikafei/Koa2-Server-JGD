/**
 * created by zhao at 2017-3-20
 */
import * as ActionTypes from '../../main/reducer/ActionTypes'
import * as helpAction from '../../../redux/common/helpAction'
import * as homeConst from './const'

const receiveData = data => ({
    type : ActionTypes.HOME_UPDATE,
    data : data
})

//获取首页用户数据
export const getHomeData = () => dispatch => {
    let url = "secIndex"
    dispatch(helpAction.fetchPosts("secIndex", url, {})).then(data=>dispatch(receiveData(data)))
}

/**金戈盾关闭功能 */
export const closeSecurity = () => dispatch => {
    let url = "close"
    dispatch(helpAction.fetchPosts(url, url, {})).then(data=>dispatch(getHomeData()))
}

//首页动画
export const addAnimationGrade = () => dispatch => {
    dispatch({
        type : ActionTypes.UPDATE_ANIMATION_GRADE,
    })
}