/**
 * Created by zhao 
 * 2017/3/14.
 */
import React, { PropTypes } from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import { RouterConst } from '../static/const'

const App = cb => require.ensure([], require => { cb(null, require('../views/main').default)}, "App")

const StepOne = cb => require.ensure([], require => { cb(null, require('../views/deblockStep/stepOne').default)}, "stepOne")
const StepTwo = cb => require.ensure([], require => { cb(null, require('../views/deblockStep/stepTwo').default)}, "stepTwo")
const StepThree = cb => require.ensure([], require => { cb(null, require('../views/deblockStep/stepThree').default)}, "stepThree")
const StepFour = cb => require.ensure([], require => { cb(null, require('../views/deblockStep/stepFour').default)}, "stepFour")
const StepFive= cb => require.ensure([], require => { cb(null, require('../views/deblockStep/stepFive').default)}, "stepFive")
const StepSix= cb => require.ensure([], require => { cb(null, require('../views/deblockStep/stepSix').default)}, "stepSix")


const Routers = {
	path: RouterConst.ROUTER_STEP_ONE,
	getComponent(nextState, cb){ App(cb) },
	indexRoute: {
		getComponent(nextState, cb){ StepOne(cb) }
	},
	childRoutes: [
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