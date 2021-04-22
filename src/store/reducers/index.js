import { FETCH_BREWERIES_SUCCESS } from '../actions'
    const initialState = {
    breweries: []
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_BREWERIES_SUCCESS:
            return {
                ...state,
                breweries: action.payload
    }
        default: 
        return state;
    }
} 



 