import React from 'react';

export default function Button({text, ...rest}) {
  return <button className='btn' {...rest}>{text}</button>;
}
