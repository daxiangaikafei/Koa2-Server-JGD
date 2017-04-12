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

class stepFive extends React.Component {
    
    componentDidMount(){
        this.props.getSafetyGradeData();
    }

    onOpenHandler(){
    }
    
    render() {
        return (
            <Page id="safety-grade-view">
                <div className="step5-container step-container">
                   <div className="step-region">
                           <div className="step-container stepfive-bg"></div>
                    </div>
                      <div className="step5-main step-main">
                            <div className="blue step5-title">恭喜您通过身份验证！</div>
                            <div className="step5-desc">账号被封是否是由于账号风险较大呢？<br />欢迎订购金戈盾保障账号安全。<br />自助解封是内置于金戈盾的一项服务</div>
                            <div className="list-title">请选择下列订阅套餐：</div>
                            <div className="package-list">
                            </div>
                            <button className="deblocking-btnNext">下一步</button>
                        </div>
                    
                </div>
            </Page>
        )
    }
}
stepFive.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(stepFive)
// export default SafeGrade