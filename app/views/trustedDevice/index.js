/**
 * created by zhao at 2017/4/11
 */

import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Page from '../../components/page'
import MessageCode from '../../components/ui/messageCode'
import Modal from '../../components/modal'
import * as ModalConst from '../../components/modal/modalConst'
import navigate from '../../router/navigate'
import {RouterConst} from '../../static/const'

import './index.scss'
import { getTrustedDeviceList, unbindDevice } from './reducer/actions'

class TruestedDevice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowMessageCode: false,
            select_id: ""
        }
    }
    
    componentDidMount(){
        this.props.getTrustedDeviceList()
        this.setState({isShowMessageCode: false, select_id: ""})
    }

    onRemoveHandler(env_id){
        this.setState({isShowMessageCode: true, select_id: env_id})
    }

    onAddHandler(){
        navigate.push(RouterConst.ROUTER_ADD_TRUSTED_DEVICE)
    }

    onMessageCodeHandler(data){
        let { select_id } = this.state
        if(data.type && select_id){
            let { unbindDevice } = this.props
            unbindDevice(select_id, data.code)
            .then(result => {
                this.setState({ isShowMessageCode: false, select_id: "" })
                Modal.alert({tip:"解除成功！"}, ModalConst.MODAL_SUCCESS_ALERT_SKIN)
            })
        }else{
            this.setState({ isShowMessageCode: false })
        }
    }

    getDeviceItem(obj, index){
        return (
            <div className="trusted-device-item" key={index}>
                <div className="name-txt">{obj.device}{obj.isself ? <span className='red' style={{marginleft: "0.5rem"}}>(当前设备)</span> : ""}{obj.has_same ? " " + obj.env_id : ""}</div>
                <div className="btn-remove" onTouchTap={()=>this.onRemoveHandler(obj.env_id)}>解除可信设备</div>
            </div>
        )
    }

    getShowComponent(){
        let { deviceList } = this.props
        let list = deviceList.filter((obj)=>{return obj.bind == true})
        return list.length ? 
            <div className="trusted-device-list">{list.map((obj, index)=>this.getDeviceItem(obj, index))}</div>
            : 
            <div className="trusted-device-no-list">暂无可信设备</div>
    }

    render() {
        let { isShowMessageCode } = this.state
        let { mobile } = this.props
        return (
            <Page id="trusted-device-view">
                <div className="trusted-device-container">
                    <div className="title-txt f-t">可信设备列表</div>
                    {this.getShowComponent()}
                    <div className="btn-add-new" onTouchTap={()=>this.onAddHandler()}>添加可信设备</div>
                </div>
                { isShowMessageCode ? <MessageCode mobile={mobile} codeType="trustedDevice" onClickHandler={(data)=>this.onMessageCodeHandler(data)} /> : "" }
            </Page>
        )
    }
}

TruestedDevice.propTypes = {
    mobile: PropTypes.string.isRequired,
    deviceList: PropTypes.arrayOf(
        PropTypes.shape({
            bind: PropTypes.bool.isRequired,
            device: PropTypes.string.isRequired,
            isself: PropTypes.bool.isRequired,
            env_id: PropTypes.string.isRequired,
            has_same: PropTypes.bool.isRequired
        })
    ).isRequired,

    getTrustedDeviceList: PropTypes.func.isRequired,
    unbindDevice: PropTypes.func.isRequired,
}

let mapStateToProps = state => ({
    mobile: state.trustedDeviceReducer.mobile,
    deviceList: state.trustedDeviceReducer.devs,
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getTrustedDeviceList, unbindDevice } , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TruestedDevice)