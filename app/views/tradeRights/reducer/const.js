import {RouterConst} from '../../../static/const'

export const TradeRightsItemList = [
    { title: "冻结账号", icon: "icon_4", subTitle:"怀疑账号被盗，紧急冻结", link:RouterConst.ROUTER_FROZEN_ACCOUNT, status: true},
    { title: "违规罚金", icon: "icon_3", subTitle:"无法支付，一键解封", link:RouterConst.ROUTER_PAY_FINE, status: true},
    { title: "我的受理单", icon: "icon_1", subTitle:"快速查询受理单进度", link:RouterConst.ROUTER_MY_ACCEPTANCE, status: false},
    { title: "举报", icon: "icon_2", subTitle:"举报不法信息，打击魔后黑手", link: RouterConst.ROUTER_TIPOFF, status: false}
]