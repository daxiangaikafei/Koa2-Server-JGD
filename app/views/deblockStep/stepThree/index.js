/**
 * created by zhao at 2017/3/15
 */

import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Page from '../../../components/page'
import './index.scss'
import '../common.scss'
import { checkInfo } from './reducer/actions'

class stepThree extends React.Component {
    constructor(props) {
        super(props)
        
        this.state={
            name:"",
            code:"",
            bankcode:"",
            iphone:""
        }
    }
    handleChange(name,e){
        newState[name]=e.target.value;
        this.setState(newState);
    }
    componentDidMount(){
    }

    goStepFour(){
        let  obj = {};;
            obj.name = this.state.name,
            obj.code = this.state.code,
            obj.bankcode = this.state.bankcode,
            obj.iphone = this.state.iphone;
        this.props.checkInfo(obj)

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
                            <input className="name" type="text" value={this.state.name} onChange={this.handleChange.bind(this,'name')}/>
                        </div>
                        <div className="idCard-div">
                            <span  className="title f-c">身份证号码：</span>
                            <input className="code" type="text" value={this.state.code} onChange={this.handleChange.bind(this,'code')}/>
                        </div>
                        <div className="blank-div">
                            <span  className="title f-c">银行卡号码：</span>
                            <input className="bankcode" type="text" value={this.state.bankcode} onChange={this.handleChange.bind(this,'bankcode')}/>
                        </div>
                        <div className="blank-phone-div">
                            <span  className="title f-c">银行卡预留手机号码：</span>
                            <input className="iphone" type="text"   value={this.state.iphone} onChange={this.handleChange.bind(this,'iphone')}/>
                        </div>
                        <button className="deblocking-btnNext" onTouchTap={()=>this.goStepFour()}  >下一步</button>
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
    return bindActionCreators({ checkInfo } , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(stepThree)
// export default SafeGrade