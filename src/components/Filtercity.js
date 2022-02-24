import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { getWarehouses } from '../actions/wareAction';

const Filtercity = ({ ware:{wareHouse,loading},getWarehouses}) => {
  useEffect(() => {
    getWarehouses();
    // eslint-disable-next-line
  },[]);

  return (
    wareHouse.map(w => (
      <option value={w.city} key = {w.id} >
          {w.city}
      </option>
  ))

  )
}


const mapStateToProps = (state) => ({
  ware: state.ware
});


export default connect(mapStateToProps, {getWarehouses})(Filtercity);
