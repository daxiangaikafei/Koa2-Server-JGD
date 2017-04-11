/**
 * created by zhao at 2017/3/15
 */

import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Page from '../../../components/page'
import './index.scss'
import '../common.scss'
import { getSafetyGradeData } from './reducer/actions'

class stepOne extends React.Component {
    
    componentDidMount(){
        this.props.getSafetyGradeData();
    }

    onOpenHandler(){
    }
    
    render() {
        let {openStatus,content,safetyLevel} = this.props;
        return (
            <Page id="safety-grade-view">
                <div className="step1-container step-container">
                   <div className="step-region">
                           <div className="step-container stepone-bg"></div>
                    </div>
                    <div className="step1-main step-main">
                        <div className="pay-div" >
                            <div className="desc">本次在线自助解封申请的解封
                                <span className="blue">押金为您账户金额（可提现+冻结）的1%</span>（最低10元，最高500元），
                                您可以享有15次验证尝试机会（其中银行卡四要素验证最多3次），如您的账号在解封后一个月内，未被检测到风险，
                                押金在扣除解封成本后将退还。</div>
                            <div className="desc">解封成本如下：</div>
                            <div className="desc">密保验证免费、充值提现流水验证免费、短信验证0.1元/条、银行卡四要素验证1元/条。</div>
                            <div className="current-yj">本次押金为：元</div>
                            <div className="input-div">
                                <span className="f-c">输入交易密码：</span>
                                <input className="password-input" type="password" placeholder="交易密码" />
                                <button className="btn-pay">确认支付</button>
                            </div>
                        </div>
                        <div className="pay-result-div" >
                            <div className="desc"></div>
                        </div>
                        
                        <button className="deblocking-btnNext" >下一步</button>
                    </div>
                </div>
            </Page>
        )
    }
}
stepOne.propTypes = {
    openStatus:PropTypes.number.isRequired,
    safetyLevel : PropTypes.number.isRequired,
    safetyTip : PropTypes.string.isRequired
}

let mapStateToProps = state => ({
    openStatus:state.userReducer.status,
    safetyLevel: state.userReducer.securityGrade,
    safetyTip: state.safetyGrade.safetyTip,
    content : state.safetyGrade.content,
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getSafetyGradeData } , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(stepOne)
// export default SafeGrade