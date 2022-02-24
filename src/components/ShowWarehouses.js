import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import { getWarehouse } from '../actions/wareAction';

const ShowWarehouses = ({match,getWarehouse,ware:{wareData,loading}}) => {
    let wareHouse =[];
    wareHouse.push(wareData);
    useEffect(() => {
        getWarehouse(match.params.id);
        // eslint-disable-next-line
    },[]);
  return (
    <div className='card text-center'>
        {wareHouse.map(w => (
                <div>
                <p>{w.name}</p>
                <p>{w.city}</p>
                <p>{w.cluster}</p>
                <p>{w.space_available}</p>
                <p>{w.is_registered}</p>
                </div>
            ))
        }
    </div>
  )
}


const mapStateToProps = (state) => ({
    ware: state.ware
  });
  
export default connect(mapStateToProps, {getWarehouse})(ShowWarehouses);


