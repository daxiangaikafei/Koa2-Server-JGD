/**
 * created by zhao at 2017/3/27
 */

import React, { PropTypes } from 'react'

import MyFooterRecordItem from '../myFooterRecordItem'


import './index.scss'


class MyFooterDateItem extends React.Component {

    render(){
        let { data, onClickHandler, key } = this.props
        let recordItems = data.map((obj, index)=><MyFooterRecordItem key={index} data={obj} onClickHandler={()=>onClickHandler(obj)} />)

        return(
            <div className="my-footer-date-list">
                <div className="date-list-title-div">
                    <div className="title-icon"></div><span className="title-txt">{data.length>0 ? data[0].title : ""}</span>
                </div>
                <div className="my-footer-item-list">{recordItems}</div>
            </div>
        )
    }
}

MyFooterDateItem.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
    onClickHandler: PropTypes.func.isRequired
}

export default MyFooterDateItem