import React from 'react'
import { ProfileNavbar, ProfileSidebar } from './components'

export default async function ProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex m-auto min-h-screen overflow-hidden">
      <ProfileNavbar />
      <ProfileSidebar />

      <div className="pl-[16.25rem] pt-[7.5rem] flex w-full">{children}</div>
    </div>
  )
}
