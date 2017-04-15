/**
 * created by zhao at 2017/3/27
 */

import React, { PropTypes } from 'react'

import './index.scss'
import '../../../static/scss/common.scss'

import broadcastIcon1 from '../../../static/images/common/safe-icon.png'
import broadcastIcon2 from '../../../static/images/common/broadcast-icon.png'


class NewestBroadCast extends React.Component {

    componentDidMount(){
    }

    onCloseHandler(){
        let { onClickHandler } = this.props
        onClickHandler && onClickHandler()
    }

    onReadHandler(id){
        let { onClickHandler } = this.props
        onClickHandler && onClickHandler(id)
    }

    render(){
        let { data } = this.props
        let url = data.imgUrl ? data.imgUrl : data.type == 2 ? broadcastIcon2 : broadcastIcon1
        return(
            <div className="alert-safe-class-skin">
                <div className={"alert-safe-class-container " + (data.type == 2 ? "notice" : "")}>
                    <div className="content-div">
                        <div className="left-icon"><img className="icon" src={url} /></div>
                        <div className="right-div">
                            <p className="title-txt">{data.title}</p>
                            <p className="date-txt">{data.format_date}</p>
                        </div>
                        <div className="clear"></div>
                    </div>
                    <div className="button-div">
                        <button className="btn-close" onTouchTap={()=>this.onCloseHandler()}>关闭</button>
                        <button className="btn-read"onTouchTap={()=>this.onReadHandler(data.id)}>阅读全文</button>
                        <div className="clear"></div>
                    </div>
                </div>
            </div>
        )
    }
}

NewestBroadCast.propTypes = {
    data: PropTypes.shape({
        type: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        format_date: PropTypes.string.isRequired,
        imgUrl: PropTypes.string.isRequired
    }),
    onClickHandler: PropTypes.func.isRequired,
}


export default NewestBroadCast