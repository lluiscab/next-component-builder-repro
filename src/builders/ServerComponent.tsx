import React, { FC } from 'react';

export interface ServerComponentOptions {
  // noop
}

export interface ServerComponentProps {
  // noop
}

export const buildServerComponent = (
  _options: ServerComponentOptions = {},
): FC<ServerComponentProps> => {
  const ServerComponent: FC<ServerComponentProps> = (_props) => <p>Hello from Server component!</p>;

  return ServerComponent;
};
