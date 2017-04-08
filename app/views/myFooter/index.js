/**
 * created by zhao at 2017/3/27
 */

import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Page from '../../components/page'
import Header from '../../components/page'
import TabItemArrow from '../../components/ui/tabItemArrow'
import MyFooterDateItem from './MyFooterDateItem'

import './index.scss'

class MyFooter extends React.Component {

    componentDidMount(){
        this.props.getMyFooterData()
    }

    onItemHandler(id){

    }

    onHelpHandler(){

    }

    onSafeHeadHandler(){

    }


    render(){
        let { listData } = this.props
        let items = listData.map((obj, index)=><MyFooterDateItem key={index} data={obj} onClickHandler={(val)=>this.onItemHandler(val)} />)

        return(
            <Page id="my-footer-view">
                <Header title="我的足迹" />
                <div className="my-footer-container">
                    <TabItemArrow title='安全画像' onClickHandler={()=>this.onSafeHeadHandler()} />

                    <div className="my-footer-title"><span>最近登录</span><div className="btn-help-blue" onTouchTap={()=>this.onHelpHandler()}></div></div>
                    <div className="my-footer-list">{items}</div>
                </div>
            </Page>
        )
    }
}

MyFooter.propTypes = {
    listData: PropTypes.array.isRequired,

    getMyFooterData: PropTypes.func.isRequired
}

let mapStateToProps = state => ({
    listData: state.myFooterReducer.myFooterList
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getMyFooterData } , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MyFooter)