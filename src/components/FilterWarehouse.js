import React,{ useState, useEffect } from 'react';
import Filtercity from './Filtercity';
import Filtercluster from './Filtercluster';
import Filterspace from './Filterspace';
import { filterCity, filterCluster, filterSpace } from '../actions/wareAction';
import {connect} from 'react-redux';

const FilterWarehouse = ({filterCity, filterCluster, filterSpace, ware}) => {
  const [city,setCity] = useState('');
  const [cluster,setCluster] = useState('');
  const [space_available,setAvailable] = useState(0);

  useEffect(() => {
    filterCity(city);
    filterCluster(cluster);
    filterSpace(space_available);
    console.log('hi');
    // eslint-disable-next-line
  },[city,cluster,space_available]);

  return (
    <div className='filter-warehouse'>
        <div className='filter-item'>
        <form>
            <label htmlFor="cars">Warehouse City:</label>
            <select 
                name='city' 
                value={city} 
                onChange={e => setCity(e.target.value)}
            >
                <option value='' disabled>
                    Select City
                </option>
                <Filtercity />
            </select>
        </form>
        </div>

        <div className='filter-item'>
        <form>
            <label htmlFor="cars">Warehouse Cluster:</label>
            <select 
                name='cluster' 
                value={cluster} 
                onChange={e => setCluster(e.target.value)}
            >
                <option value='' disabled>
                    Select Cluster
                </option>
                <Filtercluster />
            </select>
        </form>
        </div>

        <div className='filter-item'>
        <form>
            <label htmlFor="cars">Warehouse space Abv:</label>
            <select 
                name='space_available' 
                value={space_available} 
                onChange={e => setAvailable(e.target.value)}
            >
                <option value='' disabled>
                    Select space
                </option>
                <Filterspace />
            </select>
        </form>
        </div>
    </div>
    
  )
}

const mapStateToProps = (state) => ({
    ware: state.ware
});

export default connect(mapStateToProps, {filterCity,filterCluster,filterSpace}) (FilterWarehouse);
