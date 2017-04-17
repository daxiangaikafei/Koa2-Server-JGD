/**
 * created by zhao at 2017/3/15
 */

import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Page from '../../../components/page'
import './index.scss'
import '../common.scss'
import navigate  from '../../../router/navigate'
import { getUserBlockInfo ,payMoney} from './reducer/actions'
import * as helpAction from '../../../redux/common/helpAction'
import * as routerConst from '../../../static/const/routerConst.js'

class stepOne extends React.Component {
    constructor(props) {
        super(props)
        
        this.state={
            value:""
        }
    };
    handleChange(e){
        this.setState({value: e.target.value})
    }
    componentDidMount(){
        this.props.getUserBlockInfo(this.getString("userName"));
    };
    getString(name){
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null)return  unescape(r[2]); return null;
    };

    goStepTwo(){
        navigate.push(routerConst.ROUTER_STEP_TWO)
    };

    pay(){
        if(this.state.value){
            this.props.payMoney(helpAction.encodePassword(this.state.value))
        }
    };
    
    render() {
        let {nextDisplay,nextDisabled,payDisplay,payResultDisplay,payResultStr,amount} = this.props;
        return (
            <Page id="safety-grade-view" title="自主解封-Step1">
                <div className="step1-container step-container">
                   <div className="step-region">
                           <div className="step-container stepone-bg"></div>
                    </div>
                    <div className="step1-main step-main">
                        <div className="pay-div" style={{display:payDisplay}} >
                            <div className="desc">本次在线自助解封申请的解封
                                <span className="blue">押金为您账户金额（可提现+冻结）的1%</span>（最低10元，最高500元），
                                您可以享有15次验证尝试机会（其中银行卡四要素验证最多3次），如您的账号在解封后一个月内，未被检测到风险，
                                押金在扣除解封成本后将退还。</div>
                            <div className="desc">解封成本如下：</div>
                            <div className="desc">密保验证免费、充值提现流水验证免费、短信验证0.1元/条、银行卡四要素验证1元/条。</div>
                            <div className="current-yj">本次押金为：{amount}元</div>
                            <div className="input-div">
                                <span className="f-c">输入交易密码：</span>
                                <input className="password-input"
                                       type="password"
                                       placeholder="交易密码"
                                       value={this.state.value} 
                                       onChange={(e)=>this.handleChange(e)}/>
                                <button className="btn-pay" onTouchTap={()=>this.pay()}>确认支付</button>
                            </div>
                        </div>
                        <div className="pay-result-div"  style={{display:payResultDisplay}}>
                            <div className="desc" dangerouslySetInnerHTML={{__html:payResultStr}}></div>
                        </div>
                        
                        <button className="deblocking-btnNext" 
                          onTouchTap={()=>this.goStepTwo()}
                          style={{display:nextDisplay}}  
                          disabled={nextDisabled}>下一步 </button>
                    </div>
                </div>
            </Page>
        )
    }
}
stepOne.propTypes = {
    nextDisplay:PropTypes.string.isRequired,
    nextDisabled : PropTypes.string.isRequired,
    payDisplay : PropTypes.string.isRequired,
    payResultDisplay:PropTypes.string.isRequired,
    amount : PropTypes.number.isRequired
}

let mapStateToProps = state => ({
    nextDisplay: state.userInfoReducer.nextDisplay,
    nextDisabled:state.userInfoReducer.nextDisabled,
    payDisplay:state.userInfoReducer.payDisplay,
    payResultDisplay:state.userInfoReducer.payResultDisplay,
    payResultStr:state.userInfoReducer.payResultStr,
    amount:state.userInfoReducer.amount,
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getUserBlockInfo,payMoney } , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(stepOne)
// export default SafeGrade