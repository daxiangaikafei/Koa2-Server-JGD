/**
 * created by zhao at 2017/3/15
 */

import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Page from '../../components/page'
import UserClause from '../../components/ui/userClause'
import ChargePackage from '../../components/ui/chargePackage'

import Modal from '../../components/modal'
import * as ModalConst from '../../components/modal/modalConst'
import navigate from '../../router/navigate'


import { getBroadcastList, resetLastPage } from './reducer/actions'
import ItemsComponent from './itemsComponent'
import classNames from 'classnames'
import './index.scss'

class BroadcastList extends React.Component {

    constructor(props) {
        super(props)
        this.pageIndex = 0
        this.state = {
            showTip: false,
            tipType: 1,
        }

    }

    componentDidMount(){
        this.pageIndex = 0
        this.setState({showTip: false, tipType: 1})
        this.loadDate();
    }

    componentWillUnmount(){
        this.props.resetLastPage()
    }

    componentWillReceiveProps(nextProps){
        this.setState({showTip: false})
    }

    componentDidMount

    loadDate(){
        if(this.props.lastPage){
            this.setState({showTip: true, tipType: 2})
        }else{
            if(!this.state.showTip){
                this.setState({showTip: true, tipType: 1})
                this.pageIndex += 1
                this.props.getBroadcastList(this.pageIndex)
            }
        }
    }

    onScrollHandler(e){
        var scrollTop = e.target.scrollTop || 0;
        if(scrollTop + e.target.offsetHeight > e.target.scrollHeight - 50){
            this.loadDate();
        }
    }

    render() {
        return (
            <Page id="broadcast-list-view" title="安全播报">
                <div className="broadcast-list-container" onScroll={(e)=>this.onScrollHandler(e)}>
                    <ItemsComponent announceData={this.props.announceData}/>

                    { this.state.showTip ? <div className="loading-tip-more">{this.state.tipType==1 ? "加载更多..." : "没有更多..."}</div> : ""}
                </div>
            </Page>
        )
    }
}

BroadcastList.propTypes = {
}

let mapStateToProps = state => ({
    lastPage: state.broadcastList.lastPage,
    announceData: state.broadcastList.announceData
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getBroadcastList, resetLastPage } , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BroadcastList)