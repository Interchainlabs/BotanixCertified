import React from 'react'

export default async function AuthLayout({ children }: { children: React.ReactNode }) {
  return <div className="flex m-auto min-h-screen overflow-hidden">{children}</div>
}
