/**
 * created by zhao at 2017/4/11
 */

import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Page from '../../components/page'

import './index.scss'
import { getDeviceInfoData } from '../trustedDevice/reducer/actions'

class TruestedDeviceInfo extends React.Component {
    
    componentDidMount(){
        let devId = this.props.params.devId
        if(devId) this.props.getDeviceInfoData(devId)
    }
   
    getComponent(){
        let { devInfoList } = this.props
        return devInfoList.length > 0 
        ? 
        devInfoList.map((obj, index) => {
            let infoItems = []
            for(let key in obj){
                let temp = obj[key] || [], items
                items = temp.map((t, j) => {
                    return (
                        <div className="device-place-item" key={j}>
                            <div className="device-place-title">登录位置：{t.city}</div>
                            <div className="device-place-date">{t.time}</div>
                        </div>
                    )
                })

                infoItems.push(
                    <div className="device-info-item" key={index}>
                        <div className="device-info-date-div">
                            <div className="date-icon"></div><span className="date-title">{key}</span>
                        </div>
                        <div className="device-place-list">{items}</div>
                    </div>
                )
            }
            return infoItems
        })
        : 
        <div className="no-info device-no-device-info"><div className="no-data-icon"></div><div className="msg">暂时无法获得数据</div></div>
    }

    render() {
        let {deviceInfoName} = this.props;
        return (
            <Page id="trusted-device-info-view">
                <div className="trusted-device-info-container">
                    <div className="title-txt f-t">设备：<span className="device-name">{deviceInfoName}</span></div>
                    <div className="device-info-list">
                        {this.getComponent()}
                    </div>
                </div>
            </Page>
        )
    }
}

TruestedDeviceInfo.propTypes = {
    deviceInfoName: PropTypes.string.isRequired,
    devInfoList: PropTypes.arrayOf(
        PropTypes.shape()
    ).isRequired,

    getDeviceInfoData: PropTypes.func.isRequired
}

let mapStateToProps = state => ({
    devInfoList: state.trustedDeviceReducer.devInfoList,
    deviceInfoName: state.trustedDeviceReducer.deviceInfoName
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getDeviceInfoData } , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TruestedDeviceInfo)