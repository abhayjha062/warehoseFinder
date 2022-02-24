import {
    SEARCH_WAREHOUSE,
    GET_WAREHOUSES,
    GET_WAREHOUSE,
    SET_LOADING,
    FILTER_CITY,
    FILTER_CLUSTER,
    FILTER_SPACE,
    WAREHOUSE_ERROR
} from './types';

//Get warehose detals from server
export const getWarehouses = () => async dispatch => {
    try {
        setLoading();
        const res = await fetch('/warehouse');
        const data = await res.json();
        
        dispatch({
            type: GET_WAREHOUSES,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: WAREHOUSE_ERROR,
            payload: err.response
        });
    }
}

//Get warehose detals from server
export const getWarehouse = (id) => async dispatch => {
    try {
        setLoading();
        const res = await fetch(`/warehouse/${id}`);
        const data = await res.json();

        dispatch({
            type: GET_WAREHOUSE,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: WAREHOUSE_ERROR,
            payload: err.response
        });
    }
}

//Search warehouse from server
export const searchWarehouse = (text) => async dispatch => {
    try {
        setLoading();
        const res = await fetch(`/warehouse?q=${text}`); 
        const data = await res.json();

        dispatch ({
            type: SEARCH_WAREHOUSE,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: WAREHOUSE_ERROR,
            payload: error.response
        })
    }   
}

//Filter warehose city from server
export const filterCity = (city) => async dispatch => {
    try {
        setLoading();
        const res = await fetch(`/warehouse?city=${city}`);
        const data = await res.json();
        
        dispatch({
            type: FILTER_CITY,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: WAREHOUSE_ERROR,
            payload: err.response
        });
    }
}

//Filter warehose cluster from server
export const filterCluster = (cluster) => async dispatch => {
    try {
        setLoading();
        const res = await fetch(`/warehouse?cluster=${cluster}`);
        const data = await res.json();
        
        dispatch({
            type: FILTER_CLUSTER,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: WAREHOUSE_ERROR,
            payload: err.response
        });
    }
}

//Filter warehose cluster from server
export const filterSpace = (space_available) => async dispatch => {
    try {
        setLoading();
        const res = await fetch(`/warehouse?space_available=${space_available}`);
        const data = await res.json();
        
        dispatch({
            type: FILTER_SPACE,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: WAREHOUSE_ERROR,
            payload: err.response
        });
    }
}


//Set loading
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}
