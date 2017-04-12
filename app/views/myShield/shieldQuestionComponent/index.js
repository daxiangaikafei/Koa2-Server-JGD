/**
 * created by zhao at 2017/3/27
 */

import React, { PropTypes } from 'react'

import * as MyShieldConst from '../reducer/const'

import './index.scss'

class ShieldQuestion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            QA_list: []
        }
    }

    componentDidMount() {
        this.setState({
            QA_list: MyShieldConst.myShieldQAList
        })
    }

    render() {
        let { QA_list } = this.state

        return (
            <div className="shield-question-div">
                <div className="item-content">
                    {
                        QA_list.map((obj, index)=>{
                            return (
                                <div key={index}>
                                    <p className="question-txt f-t">{(index+1) + '、' + obj.question}</p>
                                    <p className="answer-txt f-c">{obj.answer}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ShieldQuestion