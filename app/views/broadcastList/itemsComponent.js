/**
 * created by zhao at 2017/3/15
 */

import React, { PropTypes } from 'react'
import classNames from 'classnames'

import './index.scss'

class ItemsComponent extends React.Component {
    
    render() {
        let announceData = this.props.announceData;
        return (
            <div>
                <div className="broadcast-list">
                    {
                        //style="background:url({icon}) no-repeat center;background-size:100%"   
                        announceData&&announceData.map(function (e, index) {
                            return (

                                <div className="broadcast-item" data-bid="100006" key={index}>
                                    <div className="left-icon-div" >
                                        <div className="left-icon" style={{backgroundImage:'url(' + e.url + ')' }}>
                                        </div>
                                    </div>
                                    <div className="right-div">
                                        <div className={"title " + (e.isTop) }>{e.title}</div>
                                        <div className="bottom-div">
                                            <span className="date-txt">{e.date}</span>
                                            <button className="btn-read">阅读全文</button>
                                        </div>
                                    </div>
                                    <div className={"right-top-icon " + (e.broadcastClass)}></div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="loading-tip-more">加载更多...</div>
            </div>

        )
    }
}

module.exports = ItemsComponent; 