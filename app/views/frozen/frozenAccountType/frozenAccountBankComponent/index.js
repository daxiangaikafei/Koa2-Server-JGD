/**
 * created by zhao at 2017/4/11
 */

import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Modal from '../../../../components/modal'

import { checkFourElements } from '../../reducer/actions'

import './index.scss'

class FrozenAccountBank extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            userCardId: "",
            bankId: "",
            mobile: ""
        }
    }

    componentDidMount() {
        this.setState({
            userName: "",
            userCardId: "",
            bankId: "",
            mobile: ""
        })
    }

    onUserNameChange(e) {
        this.setState({userName: e.currentTarget.value})
    }

    onCardIdChange(e) {
        let userCardId = e.currentTarget.value
        var regStrs = [
            ['^0(\\d+)$', '$1'], //禁止录入整数部分两位以上，但首位为0
            ['[^\\d\\xX]+$', ''], //禁止录入任何非数字和点
        ];

        for(let i=0; i<regStrs.length; i++){
            var reg = new RegExp(regStrs[i][0]);
            userCardId = userCardId.replace(reg, regStrs[i][1]);
        }
        this.setState({userCardId: userCardId})
    }

    onBankChange(e) {
        let bankId = e.currentTarget.value
        bankId = bankId.replace(/\D/g, "");
        this.setState({bankId: bankId})
    }

    onMobileChange(e){
        let mobile = e.currentTarget.value
        mobile = mobile.replace(/\D/g, "");
        this.setState({mobile: mobile})
    }

    onSendHandler(){
        let {userName, userCardId, bankId, mobile} = this.state,
            errMsg = ""

        if(!userName){
            errMsg = "姓名不能为空";
        }else if(!userCardId){
            errMsg = "身份证号码不能为空";
        }else if(!bankId){
            errMsg = "银行卡号码不能为空";
        }else if(!mobile){
            errMsg = "银行卡预留手机号码不能为空";
        }

        if(errMsg != ""){
            Modal.alert({message: errMsg, title: "提示"})
            return
        }

        let opts = {};
        opts.name = userName;
        opts.identity = userCardId;
        opts.cardNo = bankId;
        opts.mobile = mobile;
        this.props.checkFourElements(opts)
    }

    render() {
        return (
            <div id="frozen-account-bank-view">
                <div className="frozen-bank-content">
                    <div className="bank-item">
                        <span className="title">持卡人</span>
                        <input value={this.state.userName} className="user_name" type="text" placeholder="持卡人姓名" onChange={(e)=>this.onUserNameChange(e)}  />
                    </div>
                    <div className="bank-item">
                        <span className="title">身份证</span>
                        <input value={this.state.userCardId} className="user-id" type="text" placeholder="请输入身份证" onChange={(e)=>this.onCardIdChange(e)} />
                    </div>
                    <div className="bank-item">
                        <span className="title">银行卡</span>
                        <input value={this.state.bankId} className="blank-id" type="text" placeholder="请输入银行卡" onChange={(e)=>this.onBankChange(e)} />
                    </div>
                    <div className="bank-item">
                        <span className="title">银行预留手机</span>
                        <input value={this.state.mobile} className="phone-number" type="text" placeholder="请输入用户手机号" onChange={(e)=>this.onMobileChange(e)} />
                    </div>

                    <div className="btn-div"><button className="btn-send" onTouchTap={()=>this.onSendHandler()}>提交</button></div>
                </div>
            </div>
        )
    }
}

FrozenAccountBank.propTypes = {
    checkFourElements: PropTypes.func.isRequired
}

let mapStateToProps = state => ({
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ checkFourElements } , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FrozenAccountBank)