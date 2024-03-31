'use client';

import { Tab } from '@headlessui/react';
import { useParams, useSelectedLayoutSegment, useSelectedLayoutSegments } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { useMemo, useState } from 'react';
import clsx from 'clsx';
import { useAccount, useConnect } from 'wagmi';
import { loadUserSubmissions, addSubmission } from '@/app/api/calls';

//TODO list the user submissions in the blockchain

const ExploreTabs = () => {
  const segment = useSelectedLayoutSegment();
  const segments = useSelectedLayoutSegments();
  const params = useParams();
  const router = useRouter();
  const {address, connector, isConnected } = useAccount();


  const loadBlockchainData = () => {
    // loadUserSubmissions(connectors[1]);
    // console.log(connector)
    // TODO work on this
    if (isConnected) {
      // addSubmission(metaMask, 'Dummy Person', '12-09-18', '12-09-18',time);
      loadUserSubmissions(connector, address)
    }
  };

  // Users Layou tab items
  const TAB_ITEMS = useMemo(
    () => [
      { title: 'Pending', description: 'Manage your staff' },
      { title: 'Certified', description: 'Change user roles' },
    ],
    []
  );

  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div>
      <Tab.Group defaultIndex={selectedTab} onChange={(tabIdx) => setSelectedTab(tabIdx)}>
        <Tab.List className="mb-9 max-w-[278px] border-b border-[#3C3A3A] bg-transparent">
          {TAB_ITEMS.map((tab) => {
            return (
              <Tab
                id={tab.title}
                className={({ selected }) =>
                  clsx(
                    'rounded-t-2xl px-[1.375rem] py-3 font-medium focus:outline-none',
                    selected && 'bg-[#25282B]'
                  )
                }
                key={tab.title}
              >
                {({ selected }) => {
                  return <span className={clsx()}>{tab.title}</span>;
                }}
              </Tab>
            );
          })}
        </Tab.List>

        <Tab.Panels>
          <div className="flex min-h-[300px] w-full items-center justify-center">
            <p>No data available...</p>
            <button onClick={() => loadBlockchainData()}> Try</button>
          </div>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export { ExploreTabs };
