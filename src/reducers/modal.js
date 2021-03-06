import {fromJS} from 'immutable';

const initialState = fromJS({
    visibility: false,
    mediaId: null
})
function modal(state= initialState, action){
    switch(action.type){
        case 'OPEN_MODAL':{
            return state.merge({
                'visibility': true,
                mediaId: action.payload.mediaId
            })
        }
        case 'CLOSE':{
            return state.merge({
                visibility: false
            })
        }
        default:
            return state;
    }
}

export default modal;