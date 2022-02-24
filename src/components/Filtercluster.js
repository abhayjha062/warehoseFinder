import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { getWarehouses } from '../actions/wareAction';

const Filtercluster = ({ware:{wareHouse,loading},getWarehouses}) => {
  useEffect(() => {
    getWarehouses();
    // eslint-disable-next-line
  },[]);

  return (
    wareHouse.map(w => (
      <option value={w.cluster} key = {w.id} >
          {w.cluster}
      </option>
  ))

  )
}


const mapStateToProps = (state) => ({
  ware: state.ware
});

export default connect(mapStateToProps, {getWarehouses})(Filtercluster);

