/**
 * created by zhao at 2017-3-28
 */

import React, { PropTypes } from 'react'

import './buttonSwitchIOS.scss'

class ButtonSwitchIOS extends React.Component {
    constructor(props) {
        super(props);

        this.startX = 0;
        this.isChange = false;
        this.state = {
            checked: false
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({checked: nextProps.checked})
    }

    onTouchStartHandler(e){
        this.startX = e.touches[0].clientX
        this.isChange = false
    }

    onTouchMoveHandler(e){
        if(e.touches[0].clientX - this.startX  >= 5){
            this.isChange = true
            this.props.onChangeHandler && this.props.onChangeHandler(true)
        }else if(e.touches[0].clientX - this.startX  <= -5){
            this.isChange = true
            this.props.onChangeHandler && this.props.onChangeHandler(false)
        }
    }

    onTouchEndHandler(e){
        if(!this.isChange){
            this.props.onChangeHandler && this.props.onChangeHandler(!this.state.checked)
        }
    }

    render(){
        let { checked } = this.state
        let { onChangeHandler } = this.props
        return(
            <div className="ios-switch button">
                <input type="checkbox" className="bigswitch" checked={ checked }
                onTouchStart={(e)=>this.onTouchStartHandler(e)} 
                onTouchMove={(e)=>this.onTouchMoveHandler(e)}
                onTouchEnd={(e)=>this.onTouchEndHandler(e)} />
                <div><div></div><span className="on">ON</span><span className="off">OFF</span></div>
            </div>
        )
    }
}

ButtonSwitchIOS.PropTypes = {
    checked: PropTypes.bool.isRequired,
    onChangeHandler: PropTypes.func
}

export default ButtonSwitchIOS