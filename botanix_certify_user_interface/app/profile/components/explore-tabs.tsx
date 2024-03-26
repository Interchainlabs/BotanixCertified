'use client'

import { Tab } from '@headlessui/react'
import { useParams, useSelectedLayoutSegment, useSelectedLayoutSegments } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React, { useMemo, useState } from 'react'
import clsx from 'clsx'
import {useAccount} from 'wagmi';
import { loadUserSubmissions, addSubmission} from '@/app/api/calls'

//TODO list the user submissions in the blockchain

const ExploreTabs = () => {
  const segment = useSelectedLayoutSegment()
  const segments = useSelectedLayoutSegments()
  const params = useParams()
  const router = useRouter()
  const {connector, isConnected} = useAccount();
  //
  const loadBlockchainData = () =>{
    if (isConnected) {
      addSubmission(connector, 'Dummy Person', '12-09-18', '12-09-18')
    }
  }

  // Users Layou tab items
  const TAB_ITEMS = useMemo(
    () => [
      { title: 'Pending', description: 'Manage your staff' },
      { title: 'Certified', description: 'Change user roles' },
    ],
    [],
  )

  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <div>
      <Tab.Group defaultIndex={selectedTab} onChange={tabIdx => setSelectedTab(tabIdx)}>
        <Tab.List className="border-b border-[#3C3A3A] max-w-[278px] bg-transparent mb-9">
          {TAB_ITEMS.map(tab => {
            return (
              <Tab
                id={tab.title}
                className={({ selected }) =>
                  clsx('px-[1.375rem] py-3 font-medium focus:outline-none rounded-t-2xl', selected && 'bg-[#25282B]')
                }
                key={tab.title}
              >
                {({ selected }) => {
                  return <span className={clsx()}>{tab.title}</span>
                }}
              </Tab>
            )
          })}
        </Tab.List>

        <Tab.Panels>
          <div className="flex items-center justify-center w-full min-h-[300px]">
            <p>No data available...</p>
            <button
            onClick={() => loadBlockchainData()}
            > Try
          </button>
          </div>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export { ExploreTabs }
