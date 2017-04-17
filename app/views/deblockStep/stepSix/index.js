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
import * as helpAction from '../../../redux/common/helpAction'

class stepSix extends React.Component {
    
    componentDidMount(){
        this.props.getSafetyGradeData();
    }

    onOpenHandler(){
    }
    
    render() {
        return (
            <Page id="safety-grade-view">
                <div className="step6-container step-container">
                   <div className="step-region">
                           <div className="step-container stepsix-bg"></div>
                    </div>
                    
                    <div className="step6-main step-main">
                        <div className="title">
                            <div className="smile-icon"></div>
                            <div className="blue">恭喜您！ </div>
                        </div>
                        <div className="desc">您的账户已解封<br />请前往登录</div>
                        <button className="deblocking-btnNext" onTouchTap={()=>helpAction.goLogin()}>前往登录</button>
                    </div>
                 </div>
            </Page>
        )
    }
}
stepSix.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(stepSix)
// export default SafeGrade