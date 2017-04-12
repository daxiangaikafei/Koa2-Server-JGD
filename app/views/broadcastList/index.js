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
                     <div className="broadcast-list">
                         <ItemsComponent packages={this.props.packages}/>
                    {/*{
                        announceData.map(function(e,index){
                            return (
                                    
                                            <div className="broadcast-item" data-bid="100006" key={index}>
                                                <div className="left-icon-div" style="background:url({icon}) no-repeat center;background-size:100%">
                                                    <div >
                                                    </div>
                                                </div>
                                                <div className="right-div">
                                                    <div className="title red">{e.title}</div>
                                                    <div className="bottom-div">
                                                        <span className="date-txt">{e.createTime}</span>
                                                        <button className="btn-read">阅读全文</button>
                                                    </div>
                                                </div>
                                                <div className="right-top-icon safe"></div>
                                            </div>
                                    )
                            })
                    }*/}
                     </div>
                    </div>
                </div>
            </Page>
        )
    }
}

BroadcastList.propTypes = {
}

let mapStateToProps = state => ({
    packages: state.broadcastList.packages
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getBroadcastList} , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BroadcastList)