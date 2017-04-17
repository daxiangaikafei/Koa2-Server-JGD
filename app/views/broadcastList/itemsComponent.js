/**
 * created by zhao at 2017/3/15
 */

import React, { PropTypes } from 'react'

import navigate from '../../router/navigate'
import {RouterConst} from '../../static/const'

import './index.scss'

class ItemsComponent extends React.Component {
    
    onItemClickHandler(id){
        // navigate.push(RouterConst.ROUTER_BROADCAST_INFO+id)
        var href = window.location.href.substring(0, window.location.href.lastIndexOf("/"))
        window.open("newtab:" + href + RouterConst.ROUTER_BROADCAST_INFO + id, "_blank");
    }

    render() {
        let announceData = this.props.announceData;
        return (
            <div>
                <div className="broadcast-list">
                    {
                        //style="background:url({icon}) no-repeat center;background-size:100%"   
                        announceData&&announceData.map((e, index) => {
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
                                            <button className="btn-read" onTouchTap={()=>this.onItemClickHandler(e.id)}>阅读全文</button>
                                        </div>
                                    </div>
                                    <div className={"right-top-icon " + (e.broadcastClass)}></div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        )
    }
}

module.exports = ItemsComponent; 