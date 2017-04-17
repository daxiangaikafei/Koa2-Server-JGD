/**
 * created by zhao at 2017/3/15
 */

import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Page from '../../../components/page'
import './index.scss'
import '../common.scss'
import { getFiveData ,payMoney} from './reducer/actions'
import  PayMemberPw  from '../../../components/ui/PayMemberPw'
import * as helpAction from '../../../redux/common/helpAction'

class stepFive extends React.Component {
    constructor(){
        super();
        this.state = {
            selectPkgId:0,
            showPW:false
        }
        this.handlerChange = this.handlerChange.bind(this);
    }
    componentDidMount(){
        this.props.getFiveData();
    }
    handlerChange(index){ 
        let {content} = this.props;
        
        this.setState({
            selectPkgId:index,
            showPW: true
        })
    }
    
    passwordChange(e){
        this.setState({
            showPW:false
        })
        if(e.type==true){
            this.props.payMoney(helpAction.encodePassword(e.value));
        }
    }
    render() {
        let {content} = this.props;

        let {selectPkgId,showPW} = this.state;
        return (
            <Page id="safety-grade-view" title="自主解封-Step5">
                <div className="step5-container step-container">
                   <div className="step-region">
                           <div className="step-container stepfive-bg"></div>
                    </div>
                      <div className="step5-main step-main">
                            <div className="blue step5-title">恭喜您通过身份验证！</div>
                            <div className="step5-desc">账号被封是否是由于账号风险较大呢？<br />欢迎订购金戈盾保障账号安全。<br />自助解封是内置于金戈盾的一项服务</div>
                            <div className="list-title">请选择下列订阅套餐：</div>
                            <div className="package-list">
                                {
                                    content&&content.map( (item, index)=> {
                                        return (
                                        <div className={"package-item "+(selectPkgId ===item.pkgId?"selected ":"")}  
                                                key={item.pkgId} onClick={()=>this.handlerChange(item.pkgId)}  >
                                               <div className="icon"></div>
                                                 <div className="txt-div">
                                                    <div className="title">{item.name}</div>
                                                    <div className="desc f-c">{item.desc}</div>
                                                 </div>
                                              </div>
                                        )
                                    })
                                }
                            </div>
                            <button className="deblocking-btnNext">下一步</button>
                        </div>
                    
                </div>
                {showPW ? <PayMemberPw data={content.find((obj)=>obj.pkgId == selectPkgId)} onClickHandler={(e)=>this.passwordChange(e)} /> : ""}
            </Page>
        )
    }
}
stepFive.propTypes = {
}

let mapStateToProps = state => ({
    content:state.stepFiveReducer.content,
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getFiveData ,payMoney} , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(stepFive)
// export default SafeGrade