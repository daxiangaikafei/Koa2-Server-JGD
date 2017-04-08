/**
 * created by zhao at 2017-3-20
 */
import * as ActionTypes from '../../main/reducer/ActionTypes'
import * as helpAction from '../../../redux/common/helpAction'

const receiveData = data => ({
    type : ActionTypes.INIT_MYFOOTER,
    data : addTitleProps(data)
})


addTitleProps = data => {
    return data.map((tempArr)=>tempArr.map((obj)=>{
        return {
            ...obj,
            title: obj.date == "tody" ? "今天" : helpAction.formatTime(obj.date.replace(/-/g, "/"), "yyyy年MM月dd日")
        }
    })
}

/**获取我的足迹数据 */
export const getMyFooterData = () => dispatch => {
    let url = "track"
    dispatch(helpAction.fetchPosts(url, url, {})).then(data=>dispatch(receiveData(data)))
}