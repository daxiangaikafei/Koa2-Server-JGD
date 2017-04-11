/**
 * Created by zhao 
 * 2017/3/14.
 */
import React, { PropTypes } from 'react'
import { Router, Route, IndexRoute } from 'react-router'

const App = cb => require.ensure([], require => { cb(null, require('../views/main').default)}, "App")
const Home = cb => require.ensure([], require => { cb(null, require('../views/home').default)}, "Home")
const MyFooter = cb => require.ensure([], require => { cb(null, require('../views/myFooter').default)}, "myFooter")
const MyFooterDetail = cb => require.ensure([], require => { cb(null, require('../views/myFooterDetail').default)}, "myFooterDetail")
const OpenTip = cb => require.ensure([], require => { cb(null, require('../views/openTip').default)}, "openTip")
const RiskCenter = cb => require.ensure([], require => { cb(null, require('../views/riskCenter').default)}, "riskCenter")
const SafetyGrade = cb => require.ensure([], require => { cb(null, require('../views/safetyGrade').default)}, "safetyGrade")
const SafeHead = cb => require.ensure([], require => { cb(null, require('../views/safeHead').default)}, "safeHead")

const StepOne = cb => require.ensure([], require => { cb(null, require('../views/deblockStep/stepOne').default)}, "stepOne")
const StepTwo = cb => require.ensure([], require => { cb(null, require('../views/deblockStep/stepTwo').default)}, "stepTwo")
const StepThree = cb => require.ensure([], require => { cb(null, require('../views/deblockStep/stepThree').default)}, "stepThree")
const StepFour = cb => require.ensure([], require => { cb(null, require('../views/deblockStep/stepFour').default)}, "stepFour")
const StepFive= cb => require.ensure([], require => { cb(null, require('../views/deblockStep/stepFive').default)}, "stepFive")
const StepSix= cb => require.ensure([], require => { cb(null, require('../views/deblockStep/stepSix').default)}, "stepSix")

const Routers = {
	path: '/',
	getComponent(nextState, cb){ App(cb) },
	indexRoute: {
		getComponent(nextState, cb){ Home(cb) }
	},
	childRoutes: [
		{
			path: 'myFooter',
			getComponent(nextState, cb){ MyFooter(cb) }
		},
		{
			path: 'myFooterDetail',
			getComponent(nextState, cb){ MyFooterDetail(cb) }
		},
		{
			path: 'safeHead',
			getComponent(nextState, cb){ SafeHead(cb) }
		},
		{
			path: 'openTip',
			getComponent(nextState, cb){ OpenTip(cb) }
		},
		{
			path: 'riskCenter',
			getComponent(nextState, cb){ RiskCenter(cb) }
		},
		{
			path: 'safetyGrade',
			getComponent(nextState, cb){ SafetyGrade(cb) }
		},
		{
			path: 'stepOne',
			getComponent(nextState, cb){ StepOne(cb) }
		},
		{
			path: 'stepTwo',
			getComponent(nextState, cb){ StepTwo(cb) }
		},
		{
			path: 'stepThree',
			getComponent(nextState, cb){ StepThree(cb) }
		},
		{
			path: 'stepFour',
			getComponent(nextState, cb){ StepFour(cb) }
		},
		{
			path: 'stepFive',
			getComponent(nextState, cb){ StepFive(cb) }
		},
		
		{
			path: 'stepSix',
			getComponent(nextState, cb){ StepSix(cb) }
		},
	]
}

export default Routers;