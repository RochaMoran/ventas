import React from 'react';

export default function Input({children, cls, ...rest}) {
  return <div className={'container-input ' + cls}>
      <input className='input' {...rest}/>
      {children}
  </div>;
}
