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

let receiveNewestBroadCast = data => ({
    type: ActionTypes.SHOW_NEWEST_BRAODCAST,
    data: (()=>{
        if(data){
            return {
                ...data,
                format_date: helpAction.formatTime(data.modifyTime.replace(/-/g, "/"), "yyyy年MM月dd日")
            }
        }
        return data
    })()
})

export const getNewestBroadCast = () => dispatch => {
    let url = "announce/latest"
    dispatch(helpAction.fetchPosts(url, url, {})).then(data=>dispatch(receiveNewestBroadCast(data)))
}

//获取首页用户数据
export const getHomeData = () => dispatch => {
    let url = "secIndex"
    dispatch(helpAction.fetchPosts(url, url, {})).then(data=>{
        dispatch(receiveData(data))

        /**获取安全播报推送 */
        dispatch(getNewestBroadCast())
    })
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

export const onCloseBroadCast = () => dispatch => {
    dispatch({
        type : ActionTypes.HIDE_NEWEST_BROADCAST,
    })
}