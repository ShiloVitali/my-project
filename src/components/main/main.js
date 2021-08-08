import React from 'react';
import Filter from '../filter/Filter';

function Main({country, region}) {
  return(
    <div className='row mb-4 gy-3'>
      <Filter country={country} region={region} title='Поиск попутных грузов'/>
    </div>
  );
}

export default Main;