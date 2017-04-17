/**
 * created by zhao at 2017/3/15
 */

import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Page from '../../../components/page'
import './index.scss'
import '../common.scss'
import { checkInfo,comfirmCode } from './reducer/actions'
import Modal from '../../../components/modal'
import MessageCode  from '../../../components/ui/messageCode/index'
let newState=[];
class stepThree extends React.Component {
    constructor(props) {
        super(props)
        
        this.state={
            name:"",
            identity:"",
            cardNo:"",
            mobile:"",
            isShow:""
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
                newState.identity = newState.identity&&newState.identity.replace(reg, regStrs[i][1]);
            }
        newState.cardNo=newState.cardNo&&newState.cardNo.replace(/\D/g, "")
        this.setState(newState)
    }
    componentDidMount(){
    }

    goStepFour(){
        let Msg="";
        let phonereg=/^1\d{10}$/;
            
        if(!this.state.name){
            Msg="姓名不能为空"
        }else if(!this.state.identity){
            Msg="身份证号码不能为空"
        }else if(!this.state.cardNo){
            Msg="银行卡号码不能为空"
        }else if(!this.state.mobile){
            Msg="银行卡预留手机号码不能为空"
        }else if(!phonereg.test(this.state.mobile)){
            Msg="手机号码必须是11位数字"
        }else{
            this.props.checkInfo(newState)
            this.setState({isShow:"1"})
        }
        Msg&&Modal.alert({message: Msg})
    }
    handlerClick(data){
        if(data.type==true){
            this.props.comfirmCode(data.code)
        }
        else{
            this.setState({
                isShow:""
            })
        }
        
    }
    render() {
        let {mobile,type} = this.props;
        return (
            <Page id="safety-grade-view" title="自主解封-Step3">
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
                            <input className="code identity" type="text" value={this.state.identity} onChange={this.handleChange.bind(this,'identity')}/>
                        </div>
                        <div className="blank-div">
                            <span  className="title f-c">银行卡号码：</span>
                            <input className=" bankcode cardNo" type="text" value={this.state.cardNo} onChange={this.handleChange.bind(this,'cardNo')}/>
                        </div>
                        <div className="blank-phone-div">
                            <span  className="title f-c">银行卡预留手机号码：</span>
                            <input className="iphone mobile" type="text"   value={this.state.mobile} onChange={this.handleChange.bind(this,'mobile')}/>
                        </div>
                        <button className="deblocking-btnNext" onTouchTap={()=>this.goStepFour()}  >下一步</button>
                    </div>
                </div>
                {this.state.isShow? <MessageCode  mobile={mobile} codeType={type} onClickHandler={(data)=>this.handlerClick(data)}  />:""}
               
            </Page>
        )
    }
}
stepThree.propTypes = {
    mobile:PropTypes.string,
    type : PropTypes.string
}

let mapStateToProps = state => ({
    mobile: state.stepThreeReducer.mobile,
    type:state.stepThreeReducer.type
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ checkInfo ,comfirmCode} , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(stepThree)
// export default SafeGrade