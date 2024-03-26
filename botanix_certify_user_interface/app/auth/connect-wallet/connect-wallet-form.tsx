'use client';

import React, { Fragment, useState, useEffect } from 'react';

import Logo from '@/app/logo';
import { Button } from '@/ui';
import PlusIcon from '@/public/svgs/plus-icon.svg';
import { useWeb3Modal } from '@web3modal/react';
import { useAccount } from 'wagmi';
import { Dialog, Transition } from '@headlessui/react';
import { useForm } from 'react-hook-form';
import { useSession } from 'next-auth/react';
import { useUpdateEffect } from 'react-use';
import { useRouter } from 'next/navigation';

const ConnectWalletForm = () => {
  const router = useRouter();
  const { update: updateUserSession } = useSession();

  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();

  useEffect(() => {
    const isWalletConnected = isConnected;
    if (isConnected) {
      updateUserSession({ wallet_address: address });
      router.replace('/profile/explore');
    }
  });

  useUpdateEffect(() => {
    const updateUser = async () => {
      await updateUserSession({ wallet_address: address });
      router.replace('/profile/explore');
    };

    updateUser();
  }, [address]);

  return (
    <div className="flex w-full flex-col items-center gap-[4rem] p-4 text-white">
      <Logo />

      <div className="flex w-full flex-col items-center justify-center gap-6 rounded-[0.375rem] bg-[rgba(28,27,27,0.90)] p-3 pt-8 backdrop-blur-[0.375rem] lg:max-w-[504px] lg:p-[4rem]">
        <h4 className="z-10 text-h-4">Connect Wallet</h4>

        <Button label="Add Wallet" onClick={() => open()} rightIcon={<PlusIcon />} />

        <div className="pt-12">
          <p className="text-body">Don’t have a wallet to add?</p>
          <button
            className="mt-1 h-[3.125rem] rounded-lg px-5 text-body-bold text-primary-main hover:bg-black-main/50"
            onClick={() => open()}
          >
            Click here to create
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConnectWalletForm;
