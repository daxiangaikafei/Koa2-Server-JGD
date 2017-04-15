/**
 * created by zhao at 2017-3-28
 */
// import * as riskCenterApi from './api'
import * as ActionTypes from '../../main/reducer/ActionTypes'
import * as helpAction from '../../../redux/common/helpAction'

let findOtherByDevice = (dev, list) => {
    let i=0, len = list.length;
    for(i=0; i<len; i++){
        let obj = list[i];
        if(obj.bind == dev.bind && dev.device == obj.device && dev.env_id != obj.env_id){
            return true;
        }
    }

    return false;
}

let formatTrustedDeviceData = data => {
    return data.map((obj, index) => {
        return {...obj, has_same: findOtherByDevice(obj, data)}
    })
}

let receiveData = data => ({
    type : ActionTypes.INIT_TRUSTED_DEVICE,
    data : {
        ...data,
        devs: formatTrustedDeviceData(data.devs)
    }
})

let receiveUnbindDevice = (data) => ({
    type : ActionTypes.UNBIND_TRUSTED_DEVICE,
    data : data
})

let receiveBindDevice = data => ({
    type : ActionTypes.BIND_TRUSTED_DEVICE,
    data : data
})

/**获取可信设备列表 */
export const getTrustedDeviceList = () => dispatch => {
    let url = "trustDevs/list"
    dispatch(helpAction.fetchPosts(url, url, {})).then(data=>dispatch(receiveData(data)))
}

export const bindDevice = (env_ids, code) => {
        let opt = {
        envIds: env_ids,
        verifyCode: code,
        bind: 1
    }
    
    let url = "trustDevs/bind"
    return (dispatch, getState) => {
        return dispatch(helpAction.fetchPosts(url, url, opt)).then(data=>dispatch(receiveBindDevice(env_ids)))
    }
}

export const unbindDevice = (env_id, code) => {
    let opt = {
        envIds: env_id,
        verifyCode: code,
        bind: 2
    }
    
    let url = "trustDevs/bind"
    return (dispatch, getState) => {
        return dispatch(helpAction.fetchPosts(url, url, opt)).then(data=>dispatch(receiveUnbindDevice(env_id)))
    }
}

let receiveDeviceInfo = data => ({
    type : ActionTypes.INIT_TRUSTED_DEVICE_INFO,
    data : {
        list: data,
        devName: getDeviceName(data)
    }
})

let getDeviceName = data => {
    if(!data || data.length == 0) return ""
    let obj = data[0]
    for(let k in obj){
        if(obj[k].length > 0){
            return obj[k][0]["device"]
        }
    }
    return ""
}

export const getDeviceInfoData = (devId) => dispatch => {
    let url = "trustDevs/track"
    var opt = {};
    opt.envId = devId;
    opt.pageSize = 30;
    dispatch(helpAction.fetchPosts(url, url, opt)).then(data=>dispatch(receiveDeviceInfo(data)))
}