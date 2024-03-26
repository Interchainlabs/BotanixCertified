'use client';

import { SessionProvider } from 'next-auth/react';
import React, { ReactNode } from 'react';
import WagmiProvider from './WagmiProvider';

interface Props {
  children: ReactNode;
}

const Providers = (props: Props) => {
  return (
    <SessionProvider>
      <WagmiProvider>{props.children}</WagmiProvider>
    </SessionProvider>
  );
};

export default Providers;
