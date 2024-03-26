'use client'

import Link from 'next/link'
import LogoImage from '@/public/svgs/logo.svg'

const Logo = () => {
  return (
    <Link href="/">
      <LogoImage />
    </Link>
  )
}

export default Logo
