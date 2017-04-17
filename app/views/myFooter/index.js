/**
 * created by zhao at 2017/3/27
 */

import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Page from '../../components/page'
import TabItemArrow from '../../components/ui/tabItemArrow'
import MyFooterDateItem from './MyFooterDateItem'
import BottomCloseAlert from '../../components/ui/bottomCloseAlert'
import { getMyFooterData, onSaveItemData } from './reducer/actions'
import * as MyFooterConst from './reducer/const'
import {RouterConst} from '../../static/const'

import navigate from '../../router/navigate'

import './index.scss'

class MyFooter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isShowAlert: false
        }
    }

    componentDidMount(){
        this.props.getMyFooterData()
        this.setState({isShowAlert: false})
    }

    onItemHandler(obj){
        this.props.onSaveItemData(obj)
        navigate.push(RouterConst.ROUTER_MYFOOTER_DETAIL)
    }

    onHelpHandler(){
        this.setState({isShowAlert: true})
    }

    onSafeHeadHandler(){
        navigate.push(RouterConst.ROUTER_SAFETY_HEAD)
    }

    onAlertCloseHandler(){
        this.setState({isShowAlert: false})
    }

    render(){
        let {isShowAlert} = this.state
        let { listData } = this.props
        let items = listData.map((obj, index)=><MyFooterDateItem key={index} data={obj} onClickHandler={(val)=>this.onItemHandler(val)} />)

        return(
            <Page id="my-footer-view" title="我的足迹">
                <div className="my-footer-container">
                    <TabItemArrow title='安全画像' onClickHandler={()=>this.onSafeHeadHandler()} />

                    <div className="my-footer-title"><span>最近登录</span><div className="btn-help-blue" onTouchTap={()=>this.onHelpHandler()}></div></div>
                    <div className="my-footer-list">{items}</div>
                </div>
                {isShowAlert ? <BottomCloseAlert title={MyFooterConst.FOOT_VIEW_HELP_TITLE} msg={MyFooterConst.FOOT_VIEW_HELP} onCloseHandler={()=>this.onAlertCloseHandler()}/> : ""}
            </Page>
        )
    }
}

MyFooter.propTypes = {
    listData: PropTypes.array.isRequired,

    getMyFooterData: PropTypes.func.isRequired,
    onSaveItemData: PropTypes.func.isRequired
}

let mapStateToProps = state => ({
    listData: state.myFooterReducer.myFooterList
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getMyFooterData, onSaveItemData } , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MyFooter)