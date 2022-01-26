import React from 'react';
import Input from '../input/index'

export default function ControlInput({cls, children, ...rest}) {
  return (
    <div className={"control-input " + cls}>
        <Input type="text" placeholder="Busca lo que deseas" {...rest}>
            {children}
        </Input>
    </div>
  );
}
