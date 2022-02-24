import {
    SEARCH_WAREHOUSE,
    GET_WAREHOUSE,
    WAREHOUSE_ERROR,
    SET_LOADING,
    FILTER_CITY,
    FILTER_CLUSTER,
    FILTER_SPACE,
    GET_WAREHOUSES,
} from '../actions/types';

const initialState = {
    wareHouse: [],
    wareData: [],
    loading: false,
    error:null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_WAREHOUSE : 
            return {
                ...state,
                wareData: action.payload,
                loading: false
            }

        case GET_WAREHOUSES : 
            return {
                ...state,
                wareHouse: action.payload,
                loading: false
            }

        case SEARCH_WAREHOUSE: 
            return {
                ...state,
                wareHouse: action.payload,
                loading: false
            }

        case FILTER_CITY:
            return {
                ...state,
                wareHouse: action.payload,
                loading: false
            }
        
        case FILTER_CLUSTER:
            return {
                ...state,
                wareHouse: action.payload,
                loading: false
            }
        
        case FILTER_SPACE:
            return {
                ...state,
                wareHouse: action.payload,
                loading: false
            }

        case SET_LOADING : 
            return {
                ...state,
                loading: true
            };

        case WAREHOUSE_ERROR: 
            console.error(action.payload);
            return {
                ...state,
                error: action.payload
            }

        default: 
            return state;
    }
}