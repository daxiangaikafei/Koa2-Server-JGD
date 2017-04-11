/**
 * created by zhao at 2017-4-11
 */
import * as ActionTypes from '../../main/reducer/ActionTypes'

const initialState = {
    mobile: "",
    devs: [],
    devInfoList: [],
    deviceInfoName: ""
}

let changeStateByDevId = (state, devId, status) => {
    return state.devs.map(obj => {
        return obj.env_id == devId ? {...obj, bind: status} : obj
    })
}

export default function update (state = initialState, action){
    switch(action.type){
        case ActionTypes.INIT_TRUSTED_DEVICE:
            return {
                ...state,
                mobile: action.data.mobile,
                devs: action.data.devs
            }
        case ActionTypes.BIND_TRUSTED_DEVICE:
            return {
                ...state,
                devs: changeStateByDevId(state, action.data, true)
            }
        case ActionTypes.UNBIND_TRUSTED_DEVICE:
            return {
                ...state,
                devs: changeStateByDevId(state, action.data, false)
            }
        case ActionTypes.RECEIVE_DEVICE_INFO:
            return {
                ...state,
                devInfoList: action.data.list,
                deviceInfoName: action.data.devName
            }
        default:
            return state
    }
}