import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { getWarehouses } from '../actions/wareAction';

const Filterspace = ({ware:{wareHouse,loading},getWarehouses}) => {
  
  useEffect(() => {
    getWarehouses();
    // eslint-disable-next-line
  },[]);

  return (
    wareHouse.map(w => (
      <option value={w.space_available} key = {w.id} >
          {w.space_available}
      </option>
  ))

  )
}


const mapStateToProps = (state) => ({
  ware: state.ware
});

export default connect(mapStateToProps, {getWarehouses})(Filterspace);
