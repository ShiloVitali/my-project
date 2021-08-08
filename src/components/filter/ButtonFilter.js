import React from 'react';

function ButtonFilter({btnName}) {
  return(
    <div className='d-grid gap-2'>
      <button type='button' className='btn btn-block btn-secondary'>{btnName}</button>
    </div>
  );
}

export default ButtonFilter;