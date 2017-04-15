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


import { getBroadcastList } from './reducer/actions'
import ItemsComponent from './itemsComponent'
import classNames from 'classnames'
import './index.scss'

class BroadcastList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pagenum:1
        }
    }

    componentDidMount(){
        this.props.getBroadcastList(this.state.pagenum)
    }
    

    render() {
        return (
            <Page id="open-tip-view">
                <div id="broadcast-list-view">
                   <div className="broadcast-list-container" >
                     
                         <ItemsComponent announceData={this.props.announceData}/>
                    </div>
                </div>
            </Page>
        )
    }
}

BroadcastList.propTypes = {
}

let mapStateToProps = state => ({
    lastPage: state.broadcastList.lastPage,
    pageNum: state.broadcastList.pageNum,
    announceData: state.broadcastList.announceData
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getBroadcastList} , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BroadcastList)