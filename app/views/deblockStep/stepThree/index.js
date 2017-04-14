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
import Modal from '../../../components/modal'
let newState=[];
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
    handleChange(item,e){
        newState[item]=e.target.value;
        var regStrs = [
                ['^0(\\d+)$', '$1'], //禁止录入整数部分两位以上，但首位为0
                ['[^\\d\\xX]+$', ''], //禁止录入任何非数字和点
            ];
        for(var i=0; i<regStrs.length; i++){
                var reg = new RegExp(regStrs[i][0]);
                newState.code = newState.code&&newState.code.replace(reg, regStrs[i][1]);
            }
        newState.bankcode=newState.bankcode&&newState.bankcode.replace(/\D/g, "")

        this.setState(newState)
        
        
        // this.setState({
        //     bankcode:this.state.bankcode.replace(/\D/g, "")
        //    // code:values
        // })
    }
    componentDidMount(){
    }

    goStepFour(){
        let Msg="";
        let phonereg=/^1\d{10}$/;
            
        if(!this.state.name){
            Msg="姓名不能为空"
        }else if(!this.state.code){
            Msg="身份证号码不能为空"
        }else if(!this.state.bankcode){
            Msg="银行卡号码不能为空"
        }else if(!this.state.iphone){
            Msg="银行卡预留手机号码不能为空"
        }else if(!phonereg.test(this.state.iphone)){
            Msg="手机号码必须是11位数字"
        }else{
            this.props.checkInfo(newState)
            console.log(newState)
        }
        Msg&&Modal.alert({message: Msg})
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