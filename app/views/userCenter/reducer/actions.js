/**
 * created by zhao at 2017-3-31
 */
import * as ActionTypes from '../../main/reducer/ActionTypes'
import * as helpAction from '../../../redux/common/helpAction'

const receiveData = data => {
    let nextPackage = data.next.length ? data.next[0] : null
    let selectPkg = nextPackage ? data.pkgs.find((obj)=>obj.pkgId == nextPackage.pkgId) : null

    return {
        type: ActionTypes.INIT_USER_CENTER,
        data: {
            ...data,
            nextPackage: nextPackage,
            selectPkgId: selectPkg ? selectPkg.pkgId : 0
        }
    }
}

/**获取当前套餐数据 */
export const getMyPackage = () => dispatch => {
    let url = "my/pkgs"
    dispatch(helpAction.fetchPosts(url, url, {})).then((data)=>dispatch(receiveData(data)))
}


export const setSelectPkgId = (pkgId) => dispatch => {
    dispatch({
        type : ActionTypes.CHANGE_PACKAGE_ID,
        data: pkgId
    })
}

export const sendChangePackage = (opt)=>{
    let url = 'my/chPkg'
    return (dispatch, getState) => {
        console.log(getState("userCenterReducer"))
        return dispatch(helpAction.fetchPosts(url, url, opt))
    }
}