'use client'

import React, { useEffect, useState } from 'react'
import { parseBlob } from 'music-metadata-browser'

const UserProfile = () => {
  const [musicFile, setMusicFile] = useState<any>()

  useEffect(() => {
    console.log(musicFile)

    const getMusicInfo = async () => {
      console.log('Happening here')

      try {
        const metadata = await parseBlob(musicFile)
        console.log(metadata, { showHidden: false, depth: null })
      } catch (error) {
        console.error(error)
      }
    }

    getMusicInfo()
  }, [musicFile])

  return (
    <div>
      <input type="file" onChange={e => setMusicFile(e.target.files?.[0])} />
    </div>
  )
}

export { UserProfile }
