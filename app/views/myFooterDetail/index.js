/**
 * created by zhao at 2017/3/27
 */

import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Page from '../../components/page'

import BottomCloseAlert from '../../components/ui/bottomCloseAlert'
import * as MyFooterConst from '../myFooter/reducer/const'

import './index.scss'

class MyFooterDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isShowAlert: false
        }
    }

    componentDidMount(){
        this.setState({isShowAlert: false})
    }

    onShowAlertHandler(){
        this.setState({isShowAlert: true})
    }

    onHideAlertHandler(){
        this.setState({isShowAlert: false})
    }

    render(){
        let {isShowAlert} = this.state
        let { detailData } = this.props
        let trueIp = detailData ? detailData.trueIp : ""
        let location = detailData ? detailData.location : ""
        let os = detailData ? detailData.os : ""
        let dateFormat = detailData ? detailData.dateFormat : ""

        return(
            <Page id="my-footer-detail-view">
                <div className="my-footer-detail-container">
                    <div className="detail-top-div">
                        <div className="topIcon"></div><div className="topTxt">{os + " " + location}</div>
                    </div>
                    <div className="detail-content">
                        <div className="time-div">时间：<span className="time-txt">{dateFormat}</span></div>
                        <div className="place-div">地点：<span className="place-txt">{location}</span><span className="btn-help-blue" onTouchTap={()=>this.onShowAlertHandler()}></span></div>
                        <div className="device-div">
                            <div className="model-div">系统：<span className="model-txt">{os}</span></div>
                        </div>
                        <div className="ip-div">IP：<span className="ip-txt">{trueIp}</span></div>
                    </div>
                </div>
                {isShowAlert ? <BottomCloseAlert title={MyFooterConst.FOOT_VIEW_HELP_TITLE} msg={MyFooterConst.FOOT_VIEW_HELP} onCloseHandler={()=>this.onHideAlertHandler()}/> : ""}
            </Page>
        )
    }
}

MyFooterDetail.propTypes = {
    detailData: PropTypes.shape({
        location: PropTypes.string.isRequired,
        os: PropTypes.string.isRequired,
        trueIp: PropTypes.string.isRequired,
        dateFormat: PropTypes.string.isRequired,
    })
}

let mapStateToProps = state => ({
    detailData: state.myFooterReducer.detailData
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({} , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MyFooterDetail)