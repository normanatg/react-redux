import schemas from '../schemas/index';
import {fromJS} from 'immutable';

const initialState = fromJS({
    entities: schemas.entities,
    categories: schemas.result.categories,
    search: '',
})

function data(state=initialState, action){
    switch(action.type){
        case 'SEARCH_VIDEO':{
            return state.set('search', action.payload.query)
        }
        default:
            return state
    }
}

export default data;