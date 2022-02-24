import React,{ useRef } from 'react';
import { connect } from 'react-redux';
import { searchWarehouse } from '../actions/wareAction';
import ShowWarehouse from './ShowWarehouse';
import FilterWarehouse from './FilterWarehouse';

const Searchware = ({ware:{wareHouse,loading},searchWarehouse}) => {
  const text = useRef('');
  const onSubmit = (e) => {
      e.preventDefault();
      //Calling getware actions
      searchWarehouse(text.current.value);
  }

  return (
      <div>
          <form className='searchForm' onSubmit = {onSubmit}>
            <input type="text" placeholder="Search Warehouse.." name="search" ref={text}/>
            <button type="submit"><i className="fa fa-search"></i></button>
          </form>
          <FilterWarehouse />
          <div className="grid-container">
            {
              wareHouse.map(we => (
                  <ShowWarehouse key = {we.id} we ={we} />
              ))
            }
          </div>
          
      </div>
  )
}

const mapStateToProps = (state) => ({
    ware: state.ware
});

export default connect(mapStateToProps, {searchWarehouse})(Searchware);
