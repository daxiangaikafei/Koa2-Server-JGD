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

import './index.scss'
import {  } from '../trustedDevice/reducer/actions'

class AddTrustedDevice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowMessageCode: false,
            selectDevIds: []
        }
    }
    
    componentDidMount(){
        this.setState({isShowMessageCode: false, selectDevIds: []})
    }

    onDeviceItemHandler(env_id){
        let selectDevIds = this.state.selectDevIds
        let index = selectDevIds.findIndex(n=>n==env_id)
        index >= 0 ? selectDevIds.splice(index, 0) : selectDevIds.push(env_id)
        this.setState({selectDevIds: selectDevIds})
    }

    onBtnViewHandler(env_id){
        navigate("/trustedDeviceInfo/devId=" + env_id);
    }

    onMessageCodeHandler(data){
        let { select_id } = this.state
        if(data.type && select_id){
            let { bindDevice } = this.props
            bindDevice(select_id, data.code)
            .then(result => {
                this.setState({ isShowMessageCode: false, select_id: "" })
                Modal.alert({tip:"解除成功！"}, ModalConst.MODAL_SUCCESS_ALERT_SKIN)
            })
        }else{
            this.setState({ isShowMessageCode: false })
        }
    }

    getDeviceItem(obj, index){
        let { selectDevIds } = this.state
        return (
            <div className={selectDevIds.findIndex(obj.env_id) >= 0 ? "add-trusted-device-item selected" : "add-trusted-device-item"} key={index}>
                <div className="device-div" onTouchTap={()=>this.onDeviceItemHandler(obj.env_id)}>
                    <div className="icon"></div>
                    <div className="name-txt">{obj.device}{obj.isself ? <span className='red' style='margin-left:0.5rem'>(当前设备)</span> : ""}{obj.has_same ? " " + obj.env_id : ""}</div>
                </div>
                <div className="btn-view" onTouchTap={()=>this.onBtnViewHandler(obj.env_id)}><span>查看登录记录</span><div className="arrow-icon"></div></div>
            </div>
        )
    }

    getDeviceList(){
        let { deviceList } = this.props
        return deviceList.map(obj => {
            if(!obj.bind) return obj
        })
    }

    render() {
        let { isShowMessageCode } = this.state
        let { mobile } = this.props
        let list = this.getDeviceList();
        return (
            <Page id="trusted-device-view">
                <div className="add-trusted-device-container">
                    <div className="add-title-txt f-t">请选择下列常用设备为可信设备：</div>
                    {
                        list.length ? 
                            <div className="add-trusted-device-list f-t">{list.map(this.getDeviceItem)}</div>
                            :
                            <div className="add-trusted-device-no-list f-t">无可设置的常用设备</div>
                    }
                    { list.length ? <div className="btn-confirm">添加</div> : ""}
                </div>
                { isShowMessageCode ? <MessageCode mobile={mobile} codeType="trustedDevice" onClickHandler={(data)=>this.onMessageCodeHandler(data)} /> : "" }
            </Page>
        )
    }
}

AddTrustedDevice.propTypes = {
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
}

let mapStateToProps = state => ({
    mobile: state.trustedDeviceReducer.mobile,
    deviceList: state.trustedDeviceReducer.devs,
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({  } , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTrustedDevice)