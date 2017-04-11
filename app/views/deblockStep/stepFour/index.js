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

class stepFour extends React.Component {
    
    componentDidMount(){
        this.props.getSafetyGradeData();
    }

    onOpenHandler(){
    }
    
    render() {
        return (
            <Page id="safety-grade-view">
                <div className="step4-container step-container">
                   <div className="step-region">
                           <div className="step-container stepfour-bg"></div>
                    </div>
                     <div className="step4-main step-main">
                        <div className="security-div" >
                            <span className="questionSpan"></span>
                            <input className="questionInput" type="text" />

                            <button className="btnGetQuestion">重新获取密保问题</button>
                        </div>
                        
                        <div className="security-list" >
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
                        <button className="deblocking-btnNext">下一步</button>
                    </div>
                    
                </div>
            </Page>
        )
    }
}
stepFour.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(stepFour)
// export default SafeGrade