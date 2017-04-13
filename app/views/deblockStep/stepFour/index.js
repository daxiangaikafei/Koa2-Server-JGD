/**
 * created by zhao at 2017/3/15
 */

import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Page from '../../../components/page'
import './index.scss'
import '../common.scss'
import { getUserData } from './reducer/actions'

class stepFour extends React.Component {
    
    componentDidMount(){
        this.props.getUserData();
    }

    onOpenHandler(){
    }
    
    render() {
        let {securityQuestionStr,securityListDisplay,nextDisabled} =this.props;
        return (
            <Page id="safety-grade-view">
                <div className="step4-container step-container">
                   <div className="step-region">
                           <div className="step-container stepfour-bg"></div>
                    </div>
                     <div className="step4-main step-main">
                        <div className="security-div" >
                            <span className="questionSpan">{securityQuestionStr}</span>
                            <input className="questionInput" type="text" />

                            <button className="btnGetQuestion">重新获取密保问题</button>
                        </div>
                        
                        <div className="security-list"  style={{display:securityListDisplay}}>
                            <div className="security-item prepaid">
                                <div className="security-question f-c">1、您最近一次充值金额为：</div>
                                <div className="security-answer f-c selected">
                                    <div className="icon"></div>
                                    <input type="text" />
                                </div>
                                <div className="security-answer f-c">
                                    <div className="icon"></div>
                                    <span>无</span>
                                </div>
                            </div>
                            <div className="security-item withdrawals">
                                <div className="security-question f-c">2、您最近一次提现金额为：</div>
                                <div className="security-answer f-c selected">
                                    <div className="icon"></div>
                                    <input type="text" />
                                </div>
                                <div className="security-answer f-c">
                                    <div className="icon"></div>
                                    <span>无</span>
                                </div>
                            </div>
                        </div>
                        <button className="deblocking-btnNext" disabled={nextDisabled}>下一步</button>
                    </div>
                    
                </div>
            </Page>
        )
    }
}
stepFour.propTypes = {
}

let mapStateToProps = state => ({
    securityQuestionStr:state.stepFourReducer.securityQuestionStr,
    securitySelectDisplay: state.stepFourReducer.securitySelectDisplay,
    securityListDisplay: state.stepFourReducer.securityListDisplay,
    nextDisabled: state.stepFourReducer.nextDisabled,
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getUserData } , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(stepFour)
// export default SafeGrade