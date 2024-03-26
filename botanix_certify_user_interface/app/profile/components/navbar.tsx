'use client';

import React from 'react';
import Logo from '@/app/logo';
import SearchIcon from '@/public/svgs/search-icon.svg';
import Image from 'next/image';

import profileImage from '@/public/images/profile-image.png';
import { useSession } from 'next-auth/react';

export const ProfileNavbar = () => {
  const { data } = useSession();
  const userImage = data?.user.image || profileImage;
  const walletAddress = data?.user.wallet_address;

  return (
    <nav className="fixed left-0 top-0 z-10 flex h-[85px] w-full items-center justify-between border-b border-[#313131] bg-black-dark px-[3.75rem] text-white">
      <Logo />

      <label htmlFor="global-search" className="relative">
        <input
          id="global-search"
          className="rounded-[1.5625rem] border border-[#3C3A3A] bg-transparent px-[1.875rem] py-[0.75rem] lg:w-[544px]"
          type="text"
          placeholder="Search for users, title.."
        />

        <SearchIcon className="absolute right-[1.875rem] top-1/2 -translate-y-1/2" />
      </label>

      <div className="relative flex items-center">
        <span className="h-[42px] rounded-[1.5rem] border border-[#3C3A3A] py-2 pl-3 pr-14 text-body-bold ">
          0xb794f5ea...
        </span>

        <Image
          src={userImage}
          alt={String(walletAddress)}
          width={48}
          height={48}
          className="absolute right-0 top-[45%] -translate-y-1/2 rounded-full"
        />
      </div>
    </nav>
  );
};
