import React from 'react';
import { Metadata } from 'next';
import ConnectWalletForm from './connect-wallet-form';

export const metadata: Metadata = {
  title: {
    default: 'Connect Wallet',
    template: '%s | Qwiva',
  },
};

const ConnectWalletPage = async () => {
  return (
    <section className="flex w-full items-center justify-center">
      <ConnectWalletForm />
    </section>
  );
};

export default ConnectWalletPage;
