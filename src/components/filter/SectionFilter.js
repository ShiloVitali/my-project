import React from 'react';

function SectionFilter({country}) {
  

  const item = country.map((item) => {
    return (<option key={item.value} value={item.value}>{item.name}</option>)
    })

  return(
    <>
      <select className="form-select border-secondary text-secondary mb-1" aria-label="Default select example">
        { item  }
      </select>
    </>
  );
}

export default SectionFilter;