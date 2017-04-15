/**
 * created by zhao at 2017/3/24
 */

import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import RiskMessageContainer from './riskMessageContainer'
import Page from '../../components/page'
import TabItemArrow from '../../components/ui/tabItemArrow'
import MessageCode from "../../components/ui/messageCode"

import Modal from '../../components/modal'
import * as ModalConst from '../../components/modal/modalConst'

import './index.scss'
import * as CommonConst from '../main/reducer/CommonConst'

import { getRiskCenterData, onSaveData } from './reducer/actions'

class RiskCenter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isShow: true,
            isShowMessageCode: false,
            bnDisabled: false,
        }
    }

    componentDidMount() {
        this.setState({
            isShow: true,
            isShowMessageCode: false,
            bnDisabled: false,
        })
        let { getRiskCenterData } = this.props
        getRiskCenterData()
    }

    changeBtnStatus(value){
        this.setState({bnDisabled: value})
    }

    onRiskTabHandler() {
        this.setState({
            isShow: !this.state.isShow
        })
    }

    onShowMessageCode() {
        this.setState({ isShowMessageCode: true })
    }

    onMessageCodeHandler(data) {
        if (data.type) {
            let { onSaveData, risks } = this.props
            onSaveData(risks, data.code)
                .then(result => {
                    this.setState({ isShowMessageCode: false, bnDisabled: true })
                    Modal.alert({ tip: "保存成功！" }, ModalConst.MODAL_AUTO_CLOSE_SKIN)
                })
        } else {
            this.setState({ isShowMessageCode: false })
        }
    }

    render() {
        let { isShow, isShowMessageCode, bnDisabled } = this.state
        let { mobile, risks } = this.props

        return (
            <Page id="user-center-view">
                <div className="risk-scroll-div">
                    <div className="risk-view-container">
                        <TabItemArrow title="风险短信提醒" direction={isShow ? CommonConst.ARROW_DIRECTION_UP : CommonConst.ARROW_DIRECTION_DOWN} onClickHandler={() => this.onRiskTabHandler()} />
                        <RiskMessageContainer
                            isShow={isShow}
                            risks={risks}
                            bnDisabled={bnDisabled}
                            onChangeBtnStatus={(value)=>this.changeBtnStatus(value)}
                            onConfirmHandler={() => this.onShowMessageCode()} />
                    </div>
                </div>
                {isShowMessageCode ? <MessageCode mobile={mobile} codeType="riskCenter" onClickHandler={(data) => this.onMessageCodeHandler(data)} /> : ""}
            </Page>
        )
    }
}

RiskCenter.propTypes = {
    risks: PropTypes.arrayOf(
        PropTypes.shape({
            code: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            labelSon: PropTypes.string,
            status: PropTypes.number.isRequired,
            inputArr: PropTypes.arrayOf(
                PropTypes.shape({
                    defaultVal: PropTypes.string,
                    name: PropTypes.string,
                    unit: PropTypes.string,
                    value: PropTypes.string,
                })
            )
        })
    ).isRequired,
    mobile: PropTypes.string.isRequired,
    getRiskCenterData: PropTypes.func.isRequired,
    onSaveData: PropTypes.func.isRequired
}

let mapStateToProps = state => ({
    mobile: state.riskCenterReducer.mobile,
    risks: state.riskCenterReducer.riskList,
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getRiskCenterData, onSaveData }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RiskCenter)