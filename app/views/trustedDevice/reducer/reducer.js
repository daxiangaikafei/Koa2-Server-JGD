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

let changeStateByDevIds = (state, devIds, status) => {
    return state.devs.map(obj => {
        return devIds.findIndex((val)=>val == obj.env_id) >= 0 ? {...obj, bind: status} : obj
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
                devs: changeStateByDevIds(state, action.data, true)
            }
        case ActionTypes.UNBIND_TRUSTED_DEVICE:
            return {
                ...state,
                devs: changeStateByDevIds(state, [action.data], false)
            }
        case ActionTypes.INIT_TRUSTED_DEVICE_INFO:
            return {
                ...state,
                devInfoList: action.data.list,
                deviceInfoName: action.data.devName
            }
        default:
            return state
    }
}