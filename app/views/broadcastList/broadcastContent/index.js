/**
 * created by zhao at 2017/3/15
 */

import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Page from '../../../components/page'

import { getBroadcastInfo } from '../reducer/actions'

import './index.scss'

class BroadcastContent extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        let bid = this.props.params.bid
        if(bid) this.props.getBroadcastInfo();
    }

    render() {
        let { broadcastData } = this.props

        return (
            <Page id="broadcast-content-view">
                <div className="broadcast-content-container">
                    <div className="broadcast-title">{broadcastData.title}</div>
                    <div className="broadcast-date">{broadcastData ? "发布日期："+broadcastData.modifyTime : "" }</div>
                    <div className="broadcast-content" dangerouslySetInnerHTML={{__html:broadcastData.content}}></div>
                </div>
            </Page>
        )
    }
}

BroadcastContent.propTypes = {
    broadcastData: PropTypes.shape({
        title: PropTypes.string,
        content: PropTypes.string,
        date: PropTypes.string,
    }),

    getBroadcastInfo: PropTypes.func.isRequired,
}

let mapStateToProps = state => ({
    broadcastData: state.broadcastList.broadcastData
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getBroadcastInfo } , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BroadcastContent)