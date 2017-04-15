/**
 * created by zhao at 2017-3-24
 */

import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import RiskMessageItem from '../riskMessageItem'

import * as RiskCenterConst from '../reducer/const'

import { onSaveData, switchRiskItem, riskItemDataChange } from '../reducer/actions'

import './index.scss'

class RiskMessageContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
    }

    componentDidUpdate(){
        let { risks, isShow } = this.props
        if(risks.length > 0){
            let _h = this.refs.messageDiv.offsetHeight
            this.messageHeight = _h > 0 ? _h : this.messageHeight
            this.refs.messageDiv.style.height = isShow ? this.messageHeight + "px" : 0
        }
    }

    //风险条例开关按钮事件
    onSwitchHandler(code, checked){
        this.props.switchRiskItem(code, checked)
        this.props.onChangeBtnStatus(false)
    }

    //风险条例值改变事件
    onSelectChangeHandler(name, value){
        this.props.riskItemDataChange(name, value)
        this.props.onChangeBtnStatus(false);
    }

    render(){
        let riskItems, { risks, isOpen, mobile, bnDisabled } = this.props
        riskItems = risks.map((data, index) =>
            <RiskMessageItem key={index} data={data} onSwitchHandler={this.onSwitchHandler.bind(this)} onSelectChangeHandler={this.onSelectChangeHandler.bind(this)} />
        )
        return(
            <div ref="messageDiv" className="risk-tab-div message-item-div">
                <div className="div-title" dangerouslySetInnerHTML={{__html:isOpen == 2 ? RiskCenterConst.riskMessageOpenTip : RiskCenterConst.riskMessageCloseTip}}></div>
                <div className="risk-div-list">
                    {riskItems}
                </div>
                <div className="btn-div">
                    <button className="btn-confirm" disabled={bnDisabled} onTouchTap={this.props.onConfirmHandler}>确认</button>
                </div>
            </div>
        )
    }
}

RiskMessageContainer.propTypes = {
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
    
    isOpen: PropTypes.number.isRequired,
    isShow: PropTypes.bool.isRequired,
    bnDisabled: PropTypes.bool.isRequired,
    onChangeBtnStatus: PropTypes.func.isRequired,
    onConfirmHandler: PropTypes.func,

    switchRiskItem: PropTypes.func.isRequired,
    riskItemDataChange: PropTypes.func.isRequired,
}

let mapStateToProps = state => ({
    isOpen: state.userReducer.status
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ switchRiskItem, riskItemDataChange } , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RiskMessageContainer)