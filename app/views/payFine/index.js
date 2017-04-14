/**
 * created by zhao at 2017/4/11
 */

import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Page from '../../components/page'
import Modal from '../../components/modal'
import * as ModalConst from '../../components/modal/modalConst'

import navigate from '../../router/navigate'

import * as PayFineConst from './reducer/const'
import { getPayData, changeBreakType, payFine } from './reducer/actions'

import './index.scss'

class PayFine extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount(){
        this.props.getPayData()
    }

    onChangeSelect(e){
        this.props.changeBreakType(parseInt(e.target.value))
    }

    onBnPayHandler(){
        let val = this.refs.passwordInput.value
        if(val){
            let opt = {}
            opt.pwd = val;
            opt.breakType = this.props.breakType
            this.props.payFine(opt).then(data=>{
                data.respCode == 1 
                    ? Modal.alert({message: data.respMsg}) 
                    : Modal.alert({tip: "支付成功，已解除禁止支付！"}, ModalConst.MODAL_SUCCESS_ALERT_SKIN).then((type) => navigate.goBack())
            })
        }
    }

    /**
     * 设置下拉选项内容
     */
    getSelectOption() {
        let { punishTypeList } = this.props
        if(punishTypeList.length == 0) return ""
        return punishTypeList.map((obj, index) =>
            <option key={index} value={obj.breakType}>{obj.breakDetail}</option>
        )
    }

    getPayData(){
        let { punishDetailList, breakType } = this.props
        let result = { 
            isShow: false, 
            bnDisabled: true,
            bbAmt: 0,
            bqAmt: 0,
            moneyDesc: PayFineConst.MONEY_DESC_NORMAL
        }
        if(punishDetailList.length == 0) return result

        let detail = punishDetailList.find((obj, index) => obj.breakType == breakType)
        if(!detail) return result
        result.isShow = true
        result.bnDisabled = false
        result.bbAmt = detail.bbAmt
        result.bqAmt = detail.bqAmt
        result.moneyDesc = PayFineConst.MONEY_DESC_BLOCK
        return result
    }

    render() {
        let {isShow, bnDisabled, bbAmt, bqAmt, moneyDesc} = this.getPayData()
        return (
            <Page id="pay-fine-view">
                {
                    isShow ? 
                        <div className="pay-fine-container">
                            <div className="select-div">
                                <span>选择申诉类型：</span>
                                <select className="type-select" value={this.props.breakType} onChange={(e)=>this.onChangeSelect(e)}>
                                    {this.getSelectOption()}
                                </select>
                            </div>
                            <div className="desc-div">
                                <p>{moneyDesc}</p>
                                <div className="pay-content">
                                    <div>本次需缴纳罚金：</div>
                                    <div>
                                        <div><span className="red fine-rmb">{bbAmt}</span> 元</div>
                                        <div><span className="red fine-bq">{bqAmt}</span> 宝券</div>
                                    </div>
                                </div>
                            </div>
                            <div className="password-div" >
                                <span>输入交易密码</span><input ref="passwordInput" type="password" className="password-input" placeholder="请输入交易密码" />
                            </div>
                            <div className="btn-div"><button disabled={bnDisabled} className="btnPay" onTouchTap={()=>this.onBnPayHandler()}>确认支付</button></div>
                        </div>
                        :
                        <div className="notPay-container">
                            <div className="sucess-icon"></div>
                            <div className="desc">无违规行为！</div>
                        </div>
                }
            </Page>
        )
    }
}

PayFine.propTypes = {
    breakType: PropTypes.number.isRequired,
    punishDetailList: PropTypes.array.isRequired,
    punishTypeList: PropTypes.array.isRequired,
    
    getPayData: PropTypes.func.isRequired,
    changeBreakType: PropTypes.func.isRequired,
    payFine: PropTypes.func.isRequired
}

let mapStateToProps = state => ({
    breakType: state.payFineReducer.breakType,
    punishDetailList: state.payFineReducer.punishDetailList,
    punishTypeList: state.payFineReducer.punishTypeList,
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getPayData, changeBreakType, payFine } , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PayFine)