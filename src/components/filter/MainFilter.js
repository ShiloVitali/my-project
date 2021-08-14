import React from 'react';
import SectionFilter from './SectionFilter';

function MainFilter({route, country, region}) {
  return(
    <div className="row pb-3">
      <div className="col-3 p-4 my-auto text-secondary"><span>{route}</span></div>
      <div className="col-9 pe-3 my-auto">
      <SectionFilter country={country}/>
      </div>
    </div>
  );
}

export default MainFilter;