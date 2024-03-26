import React from 'react'
import { Metadata } from 'next'

import SignInForm from './sign-in-form'

export const metadata: Metadata = {
  title: {
    default: 'Signin',
    template: '%s | Qwiva',
  },
}

const Signin = async () => {
  return (
    <section className="flex w-full items-center justify-center">
      <SignInForm />
    </section>
  )
}

export default Signin
