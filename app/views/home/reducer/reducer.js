/**
 * created by zhao at 2017-3-20
 */
import * as ActionTypes from '../../main/reducer/ActionTypes'
import * as HomeConst from './actions'


const initialState = {
    animationGrade : 1,
    lbs : "",
}

let initHomeDate = (state, data) => {
    if(!data) return state
    return {
        ...state,
        lbs : data.currentLbs || "",
        animationGrade : 1,
    }
}

let update_animation = state => {
    return {
        ...state,
        animationGrade : state.animationGrade + 1
    }
}

export default function update (state = initialState, action){
    switch(action.type){
        case ActionTypes.HOME_UPDATE:
            return initHomeDate(state, action.data)
        case ActionTypes.UPDATE_ANIMATION_GRADE:
            return update_animation(state)
        default:
            return state
    }
}