/**
 * created by zhao at 2017-3-28
 */
// import * as riskCenterApi from './api'
import * as ActionTypes from '../../main/reducer/ActionTypes'
import * as helpAction from '../../../redux/common/helpAction'
import * as SafeHeadConst from './const'

/**发送请求
 * url = 请求api
 * opt = {
 *      day: -1, 天数限制
 *      pageNum: 0, 页数
 *      pageSize: 15, 每页做大数量
 * }
*/
let getData = (url, opt) => {
    if(!url) return
    let param = {
        day: -1,
        pageNum: 0,
        pageSize: 15
    }

    return helpAction.fetchPosts(url, url, {...param, ...opt})
}

/**接受到DeviceLbs数据 */
let receiveDeviceLBS = (data) => {
    return {
        type: ActionTypes.RECEIVE_DEVICE_LBS,
        data: formatDeviceData(SafeHeadConst.SAFE_HEAD_DEVICE_LBS, data)
    }
}

/**接受到DeviceInfo数据 */
let receiveDevice = (data) => {
    return {
        type: ActionTypes.RECEIVE_DEVICE_INFO,
        data: formatDeviceData(SafeHeadConst.SAFE_HEAD_DEVICE_INFO, data)
    }
}

let receivePlace = (data) => {
    return {
        type: ActionTypes.RECEIVE_PLACE_DATA,
        data: data
    }
}

let formatPassData = data => {
    return{
        ...data,
        data: data.data.map(obj=>{
            return {
                ...obj,
                operator_date: helpAction.formatTime(obj.operator_time.replace(/-/g, "/"), "yyyy年MM月dd日 HH:mm") 
            }
        }) 
    }
}

let receivePass = (data) => {
    return {
        type: ActionTypes.RECEIVE_PASS_DATA,
        data: {
            protect: formatPassData(data.protect),
            login: formatPassData(data.login),
            trade: formatPassData(data.trade),
        }
    }
}

let receiveCard = (data) => {
    return {
        type: ActionTypes.RECEIVE_CARD_DATA,
        data: {
            ...data,
            blank_date: helpAction.formatTime(data.create_time.replace(/-/g, "/"), "yyyy年MM月dd日 HH:mm")
        }
    }
}

let receiveMobile = data => {
    return {
        type: ActionTypes.RECEIVE_MOBILE_DATA,
        data: {
            ...data,
            mobile_date: helpAction.formatTime(data.create_time.replace(/-/g, "/"), "yyyy年MM月dd日 HH:mm")
        }
    }
}

let formatOsArray = (arr, key, value) => {
    let resObj = {}, res = [];
    for(let i = 0; i< arr.length; i++){
        var obj = arr[i];
        if(resObj[obj[key]]){
            resObj[obj[key]] += parseInt(obj[value]);
        }else{
            resObj[obj[key]] = parseInt(obj[value]);
        }
    }

    for(let p in resObj){
        let obj = {};
        obj[key] = p;
        obj[value] = resObj[p];
        res.push(obj);
    }

    return res;
}

let formatDeviceData = (type, data) =>{
    let n, c
    if(type == SafeHeadConst.RECEIVE_DEVICE_LBS){
        n = "region"
        c = "count"
    }else{
        n = "os"
        c = "count"
    }
    data = formatOsArray(data, n, c);
    data.sort(function(a,b){
        return parseInt(b.count) - parseInt(a.count);
    })

    return data
}

/**获取设备LBS数据 */
export const geDeviceLBSData = (opt) => dispatch => {
    opt = opt || {};
    let url = "persona/lbs";
    dispatch(getData(url, opt)).then(data=>dispatch(receiveDeviceLBS(data)))
}

/**获取设备信息 */
export const getDeviceData = (opt) => dispatch => {
    opt = opt || {};
    let url = "persona/devices";
    dispatch(getData(url, opt)).then(data=>dispatch(receiveDevice(data)))
}

/**获取收货地址 
 * opt = {
 *      day: -1, 天数限制
 *      pageNum: 0, 页数
 *      pageSize: 15, 每页做大数量
 * }
*/
export const getPlaceData = (opt) => dispatch => {
    opt = opt || {};
    let url = "persona/orderAddr";
    dispatch(getData(url, opt)).then(data=>dispatch(receivePlace(data)))
}

/**获取修改密码信息
 * opt = {
 *      day: -1, 天数限制
 *      pageNum: 0, 页数
 *      pageSize: 15, 每页做大数量
 * }
*/
export const getPassData = (opt) => dispatch => {
    opt = opt || {};
    opt.pageSize = 5;
    let url = "persona/secrets";
    dispatch(getData(url, opt)).then(data=>dispatch(receivePass(data)))
}

/**获取换绑数据
 * opt = {
 *      day: -1, 天数限制
 *      pageNum: 0, 页数
 *      pageSize: 15, 每页做大数量
 * }
*/
export const getCardData = (opt) => dispatch => {
    opt = opt || {};
    let url = "persona/bankCard";
    dispatch(getData(url, opt)).then(data=>dispatch(receiveCard(data)))
}

/**获取登录设备
 * opt = {
 *      day: -1, 天数限制
 *      pageNum: 0, 页数
 *      pageSize: 15, 每页做大数量
 * }
*/
export const getMobileData = (opt) => dispatch => {
    opt = opt || {};
    let url = "persona/mobiles";
    dispatch(getData(url, opt)).then(data=>dispatch(receiveMobile(data)))
}