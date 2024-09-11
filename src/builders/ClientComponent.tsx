'use client';

import React, { FC, useState } from 'react';

export interface ClientComponentOptions {
  // noop
}

export interface ClientComponentProps {
  // noop
}

export const buildClientComponent = (
  _options: ClientComponentOptions = {},
): FC<ClientComponentProps> => {
  const ClientComponent: FC<ClientComponentProps> = (_props) => {
    const [counter, setCounter] = useState<number>(0);
    return (
      <div>
        <p>{counter}</p>
        <button onClick={() => setCounter((c) => c + 1)}>Increment counter</button>
      </div>
    );
  };

  return ClientComponent;
};

export const TestClientComponent = buildClientComponent();
