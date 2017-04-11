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

class stepTwo extends React.Component {
    
    componentDidMount(){
        this.props.getSafetyGradeData();
    }

    onOpenHandler(){
    }
    
    render() {
        let {openStatus,content,safetyLevel} = this.props;
        return (
            <Page id="safety-grade-view">
                <div className="step2-container step-container">
                   <div className="step-region">
                           <div className="step-container steptwo-bg"></div>
                    </div>
                    <div className="step2-main step-main">
                        <div className="phone-div">
                            <div className="phone-title  f-c">您的手机号码：</div>
                            <div className="phone-txt f-t"></div>
                        </div>
                        <div className="code-div f-c">
                            <div className="code-title">短信验证码：</div>
                            <input className="code-input" type="text" />
                            <button className="btnSend">短信验证</button>
                        </div>
                        <button className="deblocking-btnNext" >下一步</button>
                    </div>
                </div>
            </Page>
        )
    }
}
stepTwo.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(stepTwo)
// export default SafeGrade