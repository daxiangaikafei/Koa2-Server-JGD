/**
 * created by zhao at 2017/3/27
 */

import React, { PropTypes } from 'react'

import './index.scss'


class MyFooterRecordItem extends React.Component {

    render(){
        let { data } = this.props

        return(
            <div className="my-footer-item" onTouchTap={onClickHandler}>
                <div className="item-title">{data.os + " " + data.location}</div>
                <div className="item-date-txt">{data.time}</div>
            </div>
        )
    }
}

MyFooterRecordItem.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        os: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
    }).isRequired,

    onClickHandler: PropTypes.func
}

export default MyFooterRecordItem