/**
 * created by zhao at 2017/3/27
 */

import React, { PropTypes } from 'react'

import './index.scss'

class ShieldRenew extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="shield-renew-div">
                <div className="renew-title">
                    <div className="name">到期续签服务</div>
                    <div className="status">已开启</div>
                </div>
                <div className="item-content">
                    <div className="renew-desc">系统默认一直开启，当前订购套餐到期，金戈盾将自动为您续费。<br />
                        如需改变订购套餐或关闭金戈盾，请前往金戈盾首页。</div>
                    <div className="renew-tip"><span>温馨提示</span><br />如您关闭金戈盾后又再次打开，收费将大幅增加。</div>
                </div>
            </div>
        )
    }
}

ShieldRenew.propTypes = {
}

export default ShieldRenew