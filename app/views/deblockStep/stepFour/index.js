/**
 * created by zhao at 2017/3/15
 */

import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Page from '../../../components/page'
import './index.scss'
import '../common.scss'
import { getUserData,moneyVerification,securityVerification } from './reducer/actions'
class stepFour extends React.Component {
    constructor(props) {
        super(props)
        
        this.state={
            select1: 1,
            select2: 1,
            value1:"",
            value2:"",
            mibao:""
        }
    };
    componentDidMount(){
        this.props.getUserData();
    }

    
    getMsg(){
        this.props.getUserData();
    }
    handleChange(index, id){
        let opt = {}
        opt["select"+index] = id
        this.setState(opt)
    }
    handlerChangeV1(e){
        this.setState({value1:e.target.value})
    }
    
    handlerChangeV2(e){
        this.setState({value2:e.target.value})
    }
    
    handlerMibao(e){
        this.setState({mibao:e.target.value})
    }

    goFive(){
        let {securityQuestionStr,securityListDisplay,nextDisabled,securitySelectDisplay} =this.props;
        console.log(securitySelectDisplay,111111111111)
        if(this.props.securitySelectDisplay=="none"){
            let ops={}
            if(this.state.select1==2){
                this.setState({value1:""},()=>{ops.prepaidMoney=0})
            }else{
                ops.prepaidMoney=this.state.value1;
            }
            if(this.state.select2==2){
                this.setState({value2:""},()=>{ops.withdrawalsMoney=0})
            }else{
                ops.withdrawalsMoney=this.state.value2;
            }
            this.props.moneyVerification(ops);
            console.log(ops)
        }
        else{
            this.state.mibao&&this.props.securityVerification(this.state.mibao);
        }
    }

    render() {
        let {select1, select2,value1,value2,mibao}=this.state
        let {securityQuestionStr,securityListDisplay,nextDisabled,securitySelectDisplay} =this.props;
        return (
            <Page id="safety-grade-view" title="自主解封-Step4">
                <div className="step4-container step-container">
                   <div className="step-region">
                           <div className="step-container stepfour-bg"></div>
                    </div>
                     <div className="step4-main step-main">
                        <div className="security-div" style={{display:securitySelectDisplay }} >
                            <span className="questionSpan">{securityQuestionStr}</span>
                            <input className="questionInput" type="text" value={mibao} onChange={(e)=>this.handlerMibao(e)}/>

                            <button className="btnGetQuestion" onTouchTap={()=>this.getMsg()}>重新获取密保问题</button>
                        </div>
                        
                        <div className="security-list"  style={{display:securityListDisplay}}>
                            <div className="security-item prepaid">
                                <div className="security-question f-c">1、您最近一次充值金额为：</div>
                                <div className={'security-answer f-c ' + (select1 == 1 ? "selected" : "" )} onClick={this.handleChange.bind(this, 1, 1)}>
                                    <div className="icon" ></div>
                                    <input type="text" value={value1} onChange={(e)=>this.handlerChangeV1(e)} />
                                </div>
                                <div className={"security-answer f-c " + (select1 == 2 ? "selected" : "" )} onClick={this.handleChange.bind(this,1, 2)}>
                                    <div className="icon"></div>
                                    <span>无</span>
                                </div>
                            </div>
                            <div className="security-item withdrawals">
                                <div className="security-question f-c ">2、您最近一次提现金额为：</div>
                                <div className={"security-answer f-c " + (select2 == 1 ? "selected" : "" )}   onClick={this.handleChange.bind(this,2,1)}>
                                    <div className="icon" ></div>
                                    <input type="text" value={value2} onChange={(e)=>this.handlerChangeV2(e)}/>
                                </div>
                                <div className={"security-answer f-c " + (select2 == 2 ? "selected" : "" )}  onClick={this.handleChange.bind(this,2,2)}>
                                    <div className="icon" ></div>
                                    <span>无</span>
                                </div>
                            </div>
                        </div>
                        <button className="deblocking-btnNext" disabled={nextDisabled} onTouchTap={()=>this.goFive()}>下一步</button>
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
    return bindActionCreators({ getUserData ,securityVerification,moneyVerification} , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(stepFour)
// export default SafeGrade