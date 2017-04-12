/**
 * created by zhao at 2017/3/15
 */

import React, { PropTypes } from 'react'
import classNames from 'classnames'

import './index.scss'

class ItemsComponent extends React.Component {
    render() {
        let packages = this.props.packages;

        let announceData = packages ? packages.announceData || [] : []
        console.log(announceData, 229393939330303030)
        return (
            <div>
                {
                    //style="background:url({icon}) no-repeat center;background-size:100%"   
                    announceData.map(function (e, index) {
                        return (

                            <div className="broadcast-item" data-bid="100006" key={index}>
                                <div className="left-icon-div" >
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
                }
            </div>

        )
    }
}

module.exports = ItemsComponent; 