import React from 'react';

export default function Input({children, ...rest}) {
  return <div className='container-input'>
      <input className='input' {...rest}/>
      {children}
  </div>;
}
