/**
 * created by zhao at 2017/3/27
 */

import React, { PropTypes } from 'react'

import Page from '../../components/page'
import ShieldHeader from './shieldHeaderComponent'
import ShieldRenew from './shieldRenewComponent'
import ShieldQuestion from './shieldQuestionComponent'
import ShieldIndemnify from './shieldIndemnifyComponent'
import ShieldFeedback from './feedbackComponent'
import UserClause from '../../components/ui/userClause'

import * as MyShieldConst from './reducer/const'
import './index.scss'

class MyShield extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            selectTab: "",
            useClasuseIsShow: false,
        }
    }

    componentDidMount() {
        this.setState({
            selectTab: MyShieldConst.TAB_RENEW
        })
    }
    
    onBtnViewClasuseHander(){
        this.setState({useClasuseIsShow: true})
    }

    onHideUserClause(){
        this.setState({useClasuseIsShow: false})
    }

    onTabHandler(type){
        this.setState({ selectTab: type })
    }

    getTabComponent(type){
        switch(type){
            case MyShieldConst.TAB_RENEW:
                return <ShieldRenew />
            case MyShieldConst.TAB_INDEMNIFY:
                return <ShieldIndemnify />
            case MyShieldConst.TAB_QUESTION:
                return <ShieldQuestion />
            case MyShieldConst.TAB_FEEDBACK:
                return <ShieldFeedback />
            default : return ""
        }
    }

    render() {
        let { selectTab, useClasuseIsShow } = this.state

        return (
            <Page id="my-shield-view" title="我的金戈盾">
                <ShieldHeader onBtnViewClasuseHander={()=>this.onBtnViewClasuseHander()} />
                <div className="shield-tab-div">
                    <div className={"shield-tab-item " + (selectTab == MyShieldConst.TAB_RENEW ? "selected" : "")} onTouchTap={()=>this.onTabHandler(MyShieldConst.TAB_RENEW)}><span>续签服务</span></div>
                    <div className={"shield-tab-item " + (selectTab == MyShieldConst.TAB_INDEMNIFY ? "selected" : "")} onTouchTap={()=>this.onTabHandler(MyShieldConst.TAB_INDEMNIFY)}><span>理赔流程</span></div>
                    <div className={"shield-tab-item " + (selectTab == MyShieldConst.TAB_QUESTION ? "selected" : "")} onTouchTap={()=>this.onTabHandler(MyShieldConst.TAB_QUESTION)}><span>常见问题</span></div>
                    <div className={"shield-tab-item " + (selectTab == MyShieldConst.TAB_FEEDBACK ? "selected" : "")} onTouchTap={()=>this.onTabHandler(MyShieldConst.TAB_FEEDBACK)}><span>意见反馈</span></div>
                </div>
                {this.getTabComponent(selectTab)}
                {useClasuseIsShow ? <UserClause onCloseHandler={()=>this.onHideUserClause()} /> : ""}
            </Page>
        )
    }
}

export default MyShield