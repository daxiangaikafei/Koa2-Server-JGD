/**
 * created by zhao at 2017/4/11
 */

import React, { PropTypes } from 'react'

import Page from '../../../components/page'

import * as FrozenConst from '../reducer/const'

import navigate from '../../../router/navigate'

import './index.scss'

class FrozenResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            frozenResultCss: "",
            frozenResultStr: "",
            frozenResultTip: "",
            btnName: "",
            fromType: "",
            status: false
        }
    }

    componentDidMount() {
        var opt = this.props.params.opt || "";
        if(opt){
            opt = JSON.parse(decodeURIComponent(decodeURIComponent(opt)));
            let frozenResultCss, frozenResultStr, frozenResultTip, btnName, fromType = opt.fromType || "", status=opt.status
            if(opt.status){
                frozenResultCss = FrozenConst.FrozenResultSuccessCss;
                frozenResultStr = FrozenConst.FrozenResultSuccessStr;
                frozenResultTip = FrozenConst.FrozenResultSuccessTip;
                btnName = FrozenConst.FrozenResultSuccessBtnName;
            }else{
                frozenResultCss = FrozenConst.FrozenResultFailCss;
                frozenResultStr = FrozenConst.FrozenResultFailStr;
                if(opt.errorTimes >= opt.totalTimes){
                    frozenResultTip = opt.message + "，您已连续" + opt.errorTimes + "次冻结失败。<div>请致电24小时客服热线：<a href='tel:4001558899'>400-155-8899</a>，或1小时后重试。</div>";
                    btnName = FrozenResultFailBtnName2;
                }else{
                    frozenResultTip = opt.message + "，您已连续" + opt.errorTimes + "次冻结失败。<br />超过"+opt.totalTimes+"次一小时内不能继续冻结账号。";
                    btnName = FrozenConst.FrozenResultFailBtnName1;
                }
            }

            this.setState({
                frozenResultCss: frozenResultCss,
                frozenResultStr: frozenResultStr,
                frozenResultTip: frozenResultTip,
                btnName: btnName,
                fromType: fromType,
                status: status
            })
        }
    }

    onBtnBackHandler() {
        let backStep, { fromType, status } = this.state
        if(status){
            if(fromType == "check"){
                backStep = -2;
            }else{
                backStep = -4;
            }
        }else{
            backStep = -2;
        }
        navigate.goBack(backStep);
    }

    render() {
        let { frozenResultCss, frozenResultStr, frozenResultTip, btnName} = this.state

        return (
            <Page id="frozen-account-result-view">
                <div className={"frozen-result-container " + frozenResultCss}>
                    <div className="frozen-result-icon"></div>
                    <div className="frozen-result-div">
                        <span className="icon"></span>
                        <span>{frozenResultStr}</span>
                    </div>

                    <div className="frozen-result-tip" dangerouslySetInnerHTML={{__html:frozenResultTip}}></div>
                    <div className="btn-div"><button className="btn-send" onTouchTap={()=>this.onBtnBackHandler()}>{btnName}</button></div>
                </div>
            </Page>
        )
    }
}

FrozenResult.propTypes = {
}

export default FrozenResult