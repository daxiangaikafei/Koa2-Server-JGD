/**
 * created by zhao at 2017/3/24
 */

import React, { PropTypes } from 'react'

import './index.scss'

/**安全画像 */
class PassComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
    }

    render(){

        return(
            <div class="safety-pass-container">
                <div class="pass-title">最近5条记录</div>

                <div class="title-div"><span class="title">修改密保问题详情：</span><span class="quert-tip tip">共0次</span></div>
                <div class="quest-list list">
                    {/*<!--<div class="list-item">2016年1月12日</div>
                    <div class="list-item">2016年1月12日</div>-->*/}
                </div>

                <div class="title-div"><span class="title">修改登录密码详情：</span><span class="login-tip tip">共0次</span></div>
                <div class="login-list list">
                </div>

                <div class="title-div"><span class="title">修改交易密码详情：</span><span class="trade-tip tip">共0次</span></div>
                <div class="trade-list list">
                </div>
            </div>
        )
    }
}

PassComponent.propTypes = {
}


export default PassComponent