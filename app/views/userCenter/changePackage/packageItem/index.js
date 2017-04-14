/**
 * created by zhao at 2017/4/11
 */

import React, { PropTypes } from 'react'

import './index.scss'

class PackageItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {data, nextPkg, selected, onItemHandler} = this.props

        return (
            <div className={"package-item " + (selected ? "selected" : "")} onTouchTap={onItemHandler}>
                <div className="package-select-icon"></div>
                <div className="package-content">
                    <div className="package-name">{data.name}</div>
                    {nextPkg ? <div className="tip red">（此为下期套餐，当前套餐到期后生效）</div> : ""}
                    <div className="package-desc">{data.desc}</div>
                </div>
                <div className="clear"></div>
            </div>
        )
    }
}

PackageItem.propTypes = {
    data: PropTypes.shape({
        amount: PropTypes.string.isRequired,
        endDate: PropTypes.string.isRequired,
        feeStartDate: PropTypes.string.isRequired,
        pkgType: PropTypes.number.isRequired,
        pkgId: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
    }).isRequired,

    nextPkg: PropTypes.bool.isRequired,
    selected: PropTypes.bool.isRequired,

    onItemHandler: PropTypes.func
}

export default PackageItem