'use strict'
import React, { PropTypes } from 'react';

import './index.scss'
import '../../../static/scss/common.scss'

class PayMemberPw extends React.Component {

    constructor(props) {
        super(props);
        this.state = {pw: ""}
    }

    componentDidMount(){
        this.setState({pw: ""})
    }

    onChangeHandler(e){
        this.setState({pw:e.target.value})
    }

    handOk(){
        let value = this.state.pw;
        if(value == "") return

        let { onClickHandler } = this.props
        onClickHandler && onClickHandler({type: true, value: value})
    }

    handCancel(){
        let { onClickHandler } = this.props
        onClickHandler && onClickHandler({type:false})
    }

    render() {
        let { pw } = this.state
        let { data } = this.props
        return (
            <div className="password-alert">
                <div className="alert-password-container">
                    <div className="alert-title">支付会员费</div>
                    <div className="alert-content">
                        <div className="alert-password-title">本次支付<span className="paymount">{data.amount}</span>元，到期日期：<span className="paydate">{data.endDate}</span>，后续将自动扣费，无须再次输入密码。<span className="red">请保持账户始终有余额。</span>如需停止服务，请主动关闭金戈盾。</div>
                        <div className="alert-input-div"><div>交易密码：</div><input value={pw} onChange={(e)=>this.onChangeHandler(e)} className="password-input" type="password" placeholder="请输入交易密码" /></div>
                        <div className="errorMsg"></div>
                        <div className="alert-button-div">
                            <button className="alert-button-no" onTouchTap={()=>this.handCancel()}>取消</button>
                            <button className="alert-button-yes" onTouchTap={()=>this.handOk()}>确定</button>
                            <div className="clear"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

PayMemberPw.propTypes = {
    data: PropTypes.shape({
        pkgId: PropTypes.number.isRequired,
        amount: PropTypes.string.isRequired,
        endDate: PropTypes.string.isRequired
    }).isRequired,

    onClickHandler: PropTypes.func.isRequired
}

export default PayMemberPw