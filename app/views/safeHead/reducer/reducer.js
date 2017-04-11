/**
 * created by zhao at 2017-3-28
 */
import * as ActionTypes from '../../main/reducer/ActionTypes'

const initialState = {
    mobile: "",
    deviceData: [{value: 3, name: "甲方1"},{value: 1, name: "甲方2"},{value: 2, name: "甲方3"},{value: 4, name: "甲方4"}],
    devicePass: {
        protect: {total: 1, data: [{operator_date:"yyyy年MM月dd日 HH:mm"},{operator_date:"yyyy年MM月dd日 HH:mm"},{operator_date:"yyyy年MM月dd日 HH:mm"}]},
        login: {total: 2, data: [{operator_date:"yyyy年MM月dd日 HH:mm"},{operator_date:"yyyy年MM月dd日 HH:mm"},{operator_date:"yyyy年MM月dd日 HH:mm"}]},
        trade: {total: 3, data: [{operator_date:"yyyy年MM月dd日 HH:mm"},{operator_date:"yyyy年MM月dd日 HH:mm"},{operator_date:"yyyy年MM月dd日 HH:mm"}]}
    },
    deviceBankTotal: 0,
    deviceBankList: [],
    deviceMobileTotal: 0,
    deviceMobileList: [],
    devicePlace: [{addr:"上海", count:10},{addr:"上海", count:10},{addr:"上海", count:10},{addr:"上海", count:10},{addr:"上海", count:10},{addr:"上海", count:10},{addr:"上海", count:10},{addr:"上海", count:10},{addr:"上海", count:10},{addr:"上海", count:10},{addr:"上海", count:10},{addr:"上海", count:10}],
}

export default function update (state = initialState, action){
    switch(action.type){
        case ActionTypes.RECEIVE_DEVICE_LBS:
            return {
                ...state,
                deviceData: action.data
            }
        case ActionTypes.RECEIVE_DEVICE_INFO:
            return {
                ...state,
                deviceData: action.data
            }
        case ActionTypes.RECEIVE_CARD_DATA:
            return {
                ...state,
                deviceBankTotal: action.data.total,
                deviceBankList: action.data.list
            }
        case ActionTypes.RECEIVE_MOBILE_DATA:
            return {
                ...state,
                deviceMobileTotal: action.data.total,
                deviceMobileList: action.data.list
            }
        case ActionTypes.RECEIVE_PASS_DATA:
            return {
                ...state,
                devicePass: action.data
            }
        case ActionTypes.RECEIVE_PLACE_DATA:
            return {
                ...state,
                devicePlace: action.data
            }
        default:
            return state
    }
}