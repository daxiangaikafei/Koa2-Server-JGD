/**
 * created by zhao at 2017-3-28
 */
import * as ActionTypes from '../../main/reducer/ActionTypes'

const initialState = {
    mobile: "",
    deviceData: [],
    devicePass: {
        protect: {
            total: 0,
            data: []
        },
        login: {
            total: 0,
            data: []
        },
        trade: {
            total: 0,
            data: []
        }
    },
    deviceBankTotal: 0,
    deviceBankList: [],
    deviceMobileTotal: 0,
    deviceMobileList: [],
    devicePlace: [],
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