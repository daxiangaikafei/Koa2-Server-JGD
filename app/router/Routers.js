/**
 * Created by zhao 
 * 2017/3/14.
 */
import React, { PropTypes } from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import { RouterConst } from '../static/const'

const App = cb => require.ensure([], require => { cb(null, require('../views/main').default)}, "App")
const Home = cb => require.ensure([], require => { cb(null, require('../views/home').default)}, "Home")
const MyFooter = cb => require.ensure([], require => { cb(null, require('../views/myFooter').default)}, "myFooter")
const MyFooterDetail = cb => require.ensure([], require => { cb(null, require('../views/myFooterDetail').default)}, "myFooterDetail")
const OpenTip = cb => require.ensure([], require => { cb(null, require('../views/openTip').default)}, "openTip")
const RiskCenter = cb => require.ensure([], require => { cb(null, require('../views/riskCenter').default)}, "riskCenter")
const SafetyGrade = cb => require.ensure([], require => { cb(null, require('../views/safetyGrade').default)}, "safetyGrade")
const SafeHead = cb => require.ensure([], require => { cb(null, require('../views/safeHead').default)}, "safeHead")
const TrustedDevice = cb => require.ensure([], require => { cb(null, require('../views/trustedDevice').default)}, "trustedDevice")
const AddTrustedDevice = cb => require.ensure([], require => { cb(null, require('../views/addTrustedDevice').default)}, "addTrustedDevice")
const TrustedDeciveInfo = cb => require.ensure([], require => { cb(null, require('../views/trustedDeciveInfo').default)}, "trustedDeciveInfo")

const UserCenter = cb => require.ensure([], require => { cb(null, require('../views/userCenter').default)}, "userCenter")
const MyShield = cb => require.ensure([], require => { cb(null, require('../views/myShield').default)}, "myShield")
const ChangePackage = cb => require.ensure([], require => { cb(null, require('../views/userCenter/changePackage').default)}, "changePackage")

const BroadCast= cb => require.ensure([], require => { cb(null, require('../views/broadcastList').default)}, "broadcast")
/**安全播报详情 */
const BroadCastInfo = cb => require.ensure([], require => { cb(null, require('../views/broadcastList/broadcastContent').default)}, "broadcastContent")

const TradeRights = cb => require.ensure([], require => { cb(null, require('../views/tradeRights').default)}, "tradeRights")
const FrozenAccount = cb => require.ensure([], require => { cb(null, require('../views/frozen').default)}, "frozenAccount")
const FrozenWayChoice = cb => require.ensure([], require => { cb(null, require('../views/frozen/frozenWayChoice').default)}, "frozenWayChoice")
const FrozenAccountType = cb => require.ensure([], require => { cb(null, require('../views/frozen/frozenAccountType').default)}, "frozenAccountType")
const FrozenResult = cb => require.ensure([], require => { cb(null, require('../views/frozen/frozenResult').default)}, "frozenResult")
const PayFine = cb => require.ensure([], require => { cb(null, require('../views/PayFine').default)}, "payFine")

const StepOne = cb => require.ensure([], require => { cb(null, require('../views/deblockStep/stepOne').default)}, "stepOne")
const StepTwo = cb => require.ensure([], require => { cb(null, require('../views/deblockStep/stepTwo').default)}, "stepTwo")
const StepThree = cb => require.ensure([], require => { cb(null, require('../views/deblockStep/stepThree').default)}, "stepThree")
const StepFour = cb => require.ensure([], require => { cb(null, require('../views/deblockStep/stepFour').default)}, "stepFour")
const StepFive= cb => require.ensure([], require => { cb(null, require('../views/deblockStep/stepFive').default)}, "stepFive")
const StepSix= cb => require.ensure([], require => { cb(null, require('../views/deblockStep/stepSix').default)}, "stepSix")



const Routers = {
	path: RouterConst.ROUTER_HOME,
	getComponent(nextState, cb){ App(cb) },
	indexRoute: {
		getComponent(nextState, cb){ Home(cb) }
	},
	childRoutes: [
		{
			path: RouterConst.ROUTER_HOME_HTML,
			getComponent(nextState, cb){ Home(cb) }
		},
		{	
			path: RouterConst.ROUTER_MYFOOTER,
			getComponent(nextState, cb){ MyFooter(cb) }
		},
		{
			path: RouterConst.ROUTER_MYFOOTER_DETAIL,
			getComponent(nextState, cb){ MyFooterDetail(cb) }
		},
		{
			path: RouterConst.ROUTER_SAFETY_HEAD,
			getComponent(nextState, cb){ SafeHead(cb) }
		},
		{
			path: RouterConst.ROUTER_OPEN_TIP,
			getComponent(nextState, cb){ OpenTip(cb) }
		},
		{
			path: RouterConst.ROUTER_RISK_CENTER,
			getComponent(nextState, cb){ RiskCenter(cb) }
		},
		{
			path: RouterConst.ROUTER_SAFETY_GRADE,
			getComponent(nextState, cb){ SafetyGrade(cb) }
		},
		{
			path: RouterConst.ROUTER_TRUSTED_DEVICE,
			getComponent(nextState, cb){ TrustedDevice(cb) }
		},
		{
			path: RouterConst.ROUTER_ADD_TRUSTED_DEVICE,
			getComponent(nextState, cb){ AddTrustedDevice(cb) }
		},
		{
			path: RouterConst.ROUTER_TRUSTED_DEVICE_INFO +':devId',
			getComponent(nextState, cb){ TrustedDeciveInfo(cb) }
		},
		{
			path: RouterConst.ROUTER_USER_CENTER,
			getComponent(nextState, cb){ UserCenter(cb) }
		},
		{
			path: RouterConst.ROUTER_CHANGE_PACKAGE,
			getComponent(nextState, cb){ ChangePackage(cb) }
		},
		{
			path: RouterConst.ROUTER_MY_SHIELD,
			getComponent(nextState, cb){ MyShield(cb) }
		},
		{
			path: RouterConst.ROUTER_BROADCAST,
			getComponent(nextState, cb){ BroadCast(cb) }
		},
		{
			path: RouterConst.ROUTER_BROADCAST_INFO + ':bid',
			getComponent(nextState, cb){ BroadCastInfo(cb) }
		},
		{
			path: RouterConst.ROUTER_TRADE_RIGHTS,
			getComponent(nextState, cb){ TradeRights(cb) }
		},
		{
			path: RouterConst.ROUTER_FROZEN_ACCOUNT,
			getComponent(nextState, cb){ FrozenAccount(cb) }
		},
		{
			path: RouterConst.ROUTER_FROZEN_CHOICE_WAY,
			getComponent(nextState, cb){ FrozenWayChoice(cb) }
		},
		{
			path: RouterConst.ROUTER_FROZEN_ACCOUNT_TYPE + ':type',
			getComponent(nextState, cb){ FrozenAccountType(cb) }
		},
		{
			path: RouterConst.ROUTER_FROZEN_ACCOUNT_RESULT+ ':opt',
			getComponent(nextState, cb){ FrozenResult(cb) }
		},
		{
			path: RouterConst.ROUTER_PAY_FINE,
			getComponent(nextState, cb){ PayFine(cb) }
		},

		//自助解封
		{
			path: RouterConst.ROUTER_STEP_ONE,
			getComponent(nextState, cb){ StepOne(cb) }
		},
		{
			path: RouterConst.ROUTER_STEP_TWO,
			getComponent(nextState, cb){ StepTwo(cb) }
		},
		{
			path: RouterConst.ROUTER_STEP_THREE,
			getComponent(nextState, cb){ StepThree(cb) }
		},
		{
			path: RouterConst.ROUTER_STEP_FOUR,
			getComponent(nextState, cb){ StepFour(cb) }
		},
		{
			path: RouterConst.ROUTER_STEP_FIVE,
			getComponent(nextState, cb){ StepFive(cb) }
		},
		{
			path: RouterConst.ROUTER_STEP_SIX,
			getComponent(nextState, cb){ StepSix(cb) }
		},
	]
}

export default Routers