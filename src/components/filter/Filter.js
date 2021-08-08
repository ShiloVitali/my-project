import React from 'react';
import ButtonFilter from './ButtonFilter';
import MainFilter from './MainFilter';

function Filter({title, country, region}) {
  return(
      <div className='col-12'>
        <div className='border border-secondary rounded'>
          <div className='filter-header alert bg-secondary text-light text-center'>
            <span>{title}</span>
          </div>
          <MainFilter country={country} region={region}  route='Откуда'/>
          <MainFilter country={country} region={region}  route='Куда'/>
          <ButtonFilter btnName='Найти'/>
        </div>
      </div>
  );
}

export default Filter;