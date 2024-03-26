'use client';

import React, { Fragment, useMemo } from 'react';
import { useSelectedLayoutSegment } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';
import { useSession } from 'next-auth/react';

import AvatarIcon from '@/public/svgs/avatar-icon.svg';
import ExploreIcon from '@/public/svgs/explore-icon.svg';
import DisputesIcon from '@/public/svgs/disputes-icon.svg';
import ProfileIcon from '@/public/svgs/profile-icon.svg';

export const ProfileSidebar = () => {
  const segment = useSelectedLayoutSegment();
  const { data } = useSession();
  const userName = data?.user.name;

  // Sidebar links
  const sideBarLinks = useMemo(
    () => [
      { title: 'Explore', href: 'explore', Icon: ExploreIcon },
      { title: 'Disputes', href: 'disputes', Icon: DisputesIcon },
      { title: 'Profile', href: 'account', Icon: ProfileIcon },
    ],
    []
  );
  return (
    <section className="fixed left-0 top-[85px] flex h-full min-w-[235px] flex-col items-center border-r-[0.5px] border-[#373737] pt-[2.75rem] text-white">
      <div className="mb-[3.75rem] flex flex-col items-center gap-[0.375rem]">
        <AvatarIcon />
        <h6 className="text-[18px]/[normal]">{userName}</h6>

        <p className="text-[0.625rem] text-white/75">25 submissions</p>
      </div>

      <aside className="flex w-full flex-col gap-2 px-2 py-6">
        {sideBarLinks.map((item) => {
          const Icon = item.Icon;
          const selected = item.href === '' && segment === null ? true : item.href === segment;

          return (
            <Fragment key={item.title}>
              <Link
                href={`/profile/${item.href}`}
                className={clsx(
                  'flex min-h-[44px] cursor-pointer items-center gap-[0.625rem] rounded-lg p-[10px] px-[2.75rem] py-[0.8125rem] font-medium transition-all',
                  selected ? 'bg-[#1C1B1B] text-white' : 'text-cool-gray-600 hover:bg-cool-gray-100'
                )}
              >
                <Icon
                  className={clsx(
                    'h-5 min-w-[20px] transition-all [&>path]:stroke-[1px]',
                    selected
                      ? ' [&>path]:fill-primary-main [&>path]:stroke-primary-main'
                      : '[&>path]:fill-white [&>path]:stroke-white'
                  )}
                />
                <span className={clsx(selected && 'text-primary-main')}>{item.title}</span>
              </Link>
            </Fragment>
          );
        })}
      </aside>
    </section>
  );
};
