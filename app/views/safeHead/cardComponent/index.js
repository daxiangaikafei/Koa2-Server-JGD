/**
 * created by zhao at 2017/3/24
 */

import React, { PropTypes } from 'react'

import Page from '../../components/page'
import Header from '../../components/header'

import './index.scss'

/**安全画像 */
class CardComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
    }

    render(){

        return(
            <div class="safety-card-container">
                <div class="card-title">账户使用至今</div>

                <div class="title-div"><span class="title">银行卡详情：</span><span class="bank-tip tip"></span></div>
                <div class="bank-list list"></div>

                <div class="title-div"><span class="title">换绑手机号码详情：</span><span class="phone-tip tip">共1次</span></div>
                <div class="phone-list list">
                </div>

                {/*<!--<div class="title-div"><span class="title">换绑邮箱详情：</span><span class="email-tip tip">共1次</span></div>-->
                <!--<div class="email-list list">-->
                    <!--<div class="list-item">-->
                        <!--<span class="date-txt">2016年1月12日</span>-->
                        <!--<span class="info-txt">新增工商银行</span>-->
                    <!--</div>-->
                    <!--<div class="list-item">-->
                        <!--<span class="date-txt">2016年1月12日</span>-->
                        <!--<span class="info-txt">新增工商银行</span>-->
                    <!--</div>-->
                <!--</div>-->*/}
            </div>
        )
    }
}

CardComponent.propTypes = {
}


export default CardComponent