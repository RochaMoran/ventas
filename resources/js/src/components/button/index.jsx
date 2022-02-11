import React from 'react';

export default function Button({text, cls, ...rest}) {
  return <button className={'btn ' + cls} {...rest}>{text}</button>;
}
