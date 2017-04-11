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

class stepThree extends React.Component {
    
    componentDidMount(){
        this.props.getSafetyGradeData();
    }

    onOpenHandler(){
    }
    
    render() {
        let {openStatus,content,safetyLevel} = this.props;
        return (
            <Page id="safety-grade-view">
                <div className="step3-container step-container">
                   <div className="step-region">
                           <div className="step-container stepthree-bg"></div>
                    </div>
                    
                    <div className="step3-main step-main">
                        <div className="name-div">
                            <span className="title f-c">姓名：</span>
                            <input className="nameInput" type="text"/>
                        </div>
                        <div className="idCard-div">
                            <span  className="title f-c">身份证号码：</span>
                            <input className="idCard-input" type="text"/>
                        </div>
                        <div className="blank-div">
                            <span  className="title f-c">银行卡号码：</span>
                            <input className="blank-input" type="text"/>
                        </div>
                        <div className="blank-phone-div">
                            <span  className="title f-c">银行卡预留手机号码：</span>
                            <input className="blankPhoneInput" type="text"/>
                        </div>
                        <button className="deblocking-btnNext">下一步</button>
                    </div>
                </div>
            </Page>
        )
    }
}
stepThree.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(stepThree)
// export default SafeGrade