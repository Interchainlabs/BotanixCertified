import React from 'react'

import { Metadata } from 'next'
import { Button } from '@/ui'
import { ExploreTabs } from '../components'

export const metadata: Metadata = {
  title: {
    default: 'User | Profile',
    template: '%s | Qwiva',
  },
}

const UserProfilePage = async () => {
  return (
    <section className="flex flex-col w-full text-white">
      <h4 className="text-h-4 mb-14">Explore</h4>

      <section className="flex gap-6 mb-[3.25rem]">
        <div className="flex flex-col gap-6 p-4 border border-[#3C3A3A] w-fit rounded-lg">
          <h5 className="text-h-5">Registry Application</h5>
          <p className="text-body-small max-w-[25.5rem]">
            Submit digital content to the registry to verify the ownership of the song.
          </p>

          <Button label="Create Now" customClassName="!w-fit" />
        </div>

        <div className="flex flex-col gap-6 p-4 border border-[#3C3A3A] w-fit rounded-lg">
          <h5 className="text-h-5">Dispute</h5>
          <p className="text-body-small max-w-[25.5rem]">
            File claims on items that breach your copyright agreement or IP.
          </p>

          <Button label="Submit Dispute" customClassName="!w-fit" />
        </div>
      </section>

      <h4 className="text-h-4 mb-9 ">My Submissions</h4>

      <ExploreTabs />
    </section>
  )
}

export default UserProfilePage
