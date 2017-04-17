/**
 * created by zhao at 2017-3-20
 */
import * as ActionTypes from '../../main/reducer/ActionTypes'
import * as helpAction from '../../../redux/common/helpAction'


const initialState = {
    lastPage: 0,
    announceData: [],

    //安全播报详情
    broadcastData: {
        title: "",
        modifyTime: "",
        content: ""
    },
}

let initPackage = (state, data) => {
    return {
        ...state,
        lastPage: data.lastPage,
        pageNum: data.pageNum,
        announceData: state.announceData.concat(formatData(data.announceData || []))
    }
}
let formatData = (data) => {
    return data.map(item => {
        let date=item.createTime.split(' ')[0];
         return {
            ...item,
            title:item.title,
            date:helpAction.formatTime(date.replace(/-/g, "/"), "yyyy年MM月dd日"),
            url: item.imgUrl ? item.imgUrl : (item.type==1?"./app/views/broadcastList/images/broadcast-icon.png":'./app/views/broadcastList/images/safe-icon.png'),
            isTop:item.top==1?"red":"",
            broadcastClass:item.top==1?"notice":"safe"
         }
    })
}

export default function update (state = initialState, action){
    switch(action.type){
        case ActionTypes.BROAD_LIST:
            return initPackage(state, action.data)
        case ActionTypes.RESET_BROADCAST_LAST_PAGE:
            return {
                ...state,
                lastPage: 0,
                announceData: [],
            }
        case ActionTypes.BROAD_INFO:
            return {
                ...state,
                broadcastData: action.data
            }
        default:
            return state
    }
}