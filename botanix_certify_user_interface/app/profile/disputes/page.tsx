import React from 'react'
import { Metadata } from 'next'
import { UserProfile } from '../user-profile'

export const metadata: Metadata = {
  title: {
    default: 'User | Profile',
    template: '%s | Qwiva',
  },
}

const UserProfilePage = async () => {
  return (
    <section className="flex w-full items-center justify-center">
      <UserProfile />
    </section>
  )
}

export default UserProfilePage
