import React from 'react'
import { Link } from 'react-router-dom';

const ShowWarehouse = ({we}) => {
  return (
    <div className='card text-center'>
        <h3>{we.name}</h3>
        <div>
        <Link to={`/showWarehouses/${we.id}`}>
            More
        </Link>
        </div>
    </div>
  )
}

export default ShowWarehouse
