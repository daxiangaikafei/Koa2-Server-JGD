/**
 * created by zhao at 2017/3/15
 */

import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Page from '../../../components/page'
import './index.scss'
import '../common.scss'
import { comfirmCode,getMssage,getData } from './reducer/actions'

class stepTwo extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            text:"",
            code:"",
            sec:60,
            disable:false,
            buttonText:"短信验证",
            value:"",
            btnDisable:true
        }
    }
    
    handleChange(e){
        this.setState({value: e.target.value})
        this.state.value&&this.setState({
            btnDisable:false
        })
    }
    getMes(){
        this.props.getMssage();
        this.countDown();
    }
    countDown(){
        let timer=setInterval(()=>{
            this.setState({
                buttonText:(--this.state.sec)+"S获取",
                disable:true
            })
            if(this.state.sec==0){
                this.setState({
                    buttonText:"短信验证",
                    sec:60,
                    disable:false
                })
                clearInterval(timer)
            }
        },1000)
    }
    goStepThree(){
        this.props.comfirmCode(this.state.value)
    }
    
    componentDidMount(){
        this.props.getData();
    }
    render() {
        let {phoneTxt,nextDisabled,disable} = this.props;
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
                            <input className="code-input" type="text" value={this.state.value} onChange={(e)=>this.handleChange(e)}/>
                            <button className="btnSend" onTouchTap={()=>this.getMes()} disabled={this.state.disable}>{this.state.buttonText}</button>
                        </div>
                        <button className="deblocking-btnNext" onTouchTap={()=>this.goStepThree()}  disabled={this.state.btnDisable}>下一步</button>
                    </div>
                </div>
            </Page>
        )
    }
}
stepTwo.propTypes = {
}

let mapStateToProps = state => ({
    phoneTxt:state.stepTwoReducer.phoneTxt
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ comfirmCode,getMssage,getData } , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(stepTwo)
// export default SafeGrade