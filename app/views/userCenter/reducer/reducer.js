/**
 * created by zhao at 2017-3-20
 */
import * as ActionTypes from '../../main/reducer/ActionTypes'


const initialState = {
    myPackage: {
        amount: "",
        endDate: "",
        feeStartDate: "",
        pkgType: 0,
        pkgId: 0,
        name: "",
        desc: ""
    },
    nextPackage: null,
    pkgs: [],
    selectPkgId: 0
}

export default function update (state = initialState, action){
    switch(action.type){
        case ActionTypes.INIT_USER_CENTER:
            return { 
                ...state,
                myPackage: action.data.current[0],
                nextPackage: action.data.nextPackage,
                pkgs: action.data.pkgs,
                selectPkgId: action.data.selectPkgId
            }
        case ActionTypes.CHANGE_PACKAGE_ID:
            console.log(action.data)
            return {
                ...state,
                selectPkgId: action.data
            }
        default:
            return state
    }
}