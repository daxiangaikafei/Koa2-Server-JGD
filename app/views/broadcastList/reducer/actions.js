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

