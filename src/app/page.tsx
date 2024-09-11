import React from 'react';

import { buildClientComponent, TestClientComponent } from '@/builders/ClientComponent';
import { clientFunction, clientFunctionResult } from '@/builders/ClientFunction';
import { buildServerComponent } from '@/builders/ServerComponent';

const ServerComponent = buildServerComponent(); // works

const ClientComponent = buildClientComponent(); // Error: Attempted to call buildClientComponent() from the server but buildClientComponent is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        {/** Works, server components */}
        <ServerComponent />
        {/** Error: Attempted to call clientFunction() from the server but clientFunction is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component. */}
        {clientFunction()}
        {/** Works, function already executed on client file */}
        {clientFunctionResult}
        {/** Does not work, buildClientComponent function throws error. */}
        <ClientComponent />
        {/** Works, build function already executed on client file */}
        <TestClientComponent />
      </main>
    </div>
  );
}
