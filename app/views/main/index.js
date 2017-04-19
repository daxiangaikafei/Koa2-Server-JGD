/**
 * created by zhao
 * 2017/3/14
 */

import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import './animate.scss'
import './index.scss'

class App extends React.Component {
    componentWillMount(){
    }

    componentWillUpdate(){
    }
    
    render(){
        return (
            <div>
                <ReactCSSTransitionGroup component='div'
                transitionName={{
                    enter: 'default-enter',
                    enterActive: this.props.location.action == 'PUSH'?'fadeInRight':'enterIn',
                    leave: 'default-leave',
                    leaveActive: this.props.location.action == 'PUSH'?'':'fadeOutRight'
                }}
                style={{overflowY: 'scroll', height: '100%', position: 'absolute',top: 0,width:'100%' }}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
                >
                    { React.cloneElement(this.props.children, { key: this.props.location.pathname }) }
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}

export default App


export * as ActionTpyes from './reducer/ActionTypes'