/**
 * created by zhao at 2017-3-31
 */
import * as ActionTypes from '../../main/reducer/ActionTypes'
import * as helpAction from '../../../redux/common/helpAction'

const receiveData = data => ({
    type : ActionTypes.BROAD_LIST,
    data :  data
})

export const getBroadcastList = (pagenum) => dispatch => {
    let url = "announce/list"
    dispatch(helpAction.fetchPosts(url, url, {pageNum:pagenum})).then((data)=>dispatch(receiveData(data)))
}

export const resetLastPage = () => dispatch => {
    dispatch({
        type : ActionTypes.RESET_BROADCAST_LAST_PAGE,
    })
}


let receiveInfoDate = data => ({
    type : ActionTypes.BROAD_INFO,
    data : data
})

/**获取安全播报详细内容 */
export const getBroadcastInfo = (bid) => dispatch => {
    let url = "announce/detail"
    dispatch(helpAction.fetchPosts(url, url, {announceId:bid})).then((data)=>dispatch(receiveInfoDate(data)))
}
