/**
 * created by zhao at 2017/3/27
 */

import React, { PropTypes } from 'react'

import './index.scss'

class ShieldIndemnify extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="shield-indemnify-div">
                <div className="item-content">
                    <p className="indemnify-title f-t">第一步：申请赔付</p>
                    <p className="indemnify-desc f-c">拨打客服电话400-155-8899向钱宝提出补偿申请，并按客服要求准备相关材料</p>
                    <p className="indemnify-title f-t">第二步：材料审核</p>
                    <p className="indemnify-desc f-c">在客服的协助下准备材料，并且提交审核</p>
                    <p className="indemnify-title f-t">第三步：赔付完成</p>
                    <p className="indemnify-desc f-c">审核通过后，3-5个工作日完成赔付</p>
                    <p className="indemnify-tip f-c">注：具体的赔付材料请参见官网金戈盾公告，或直接拨打客服电话咨询</p>
                </div>
            </div>
        )
    }
}

ShieldIndemnify.propTypes = {
}

export default ShieldIndemnify