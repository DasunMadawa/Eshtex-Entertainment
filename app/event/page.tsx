import Artists from '@/components/event/Artists'
import Descritpion from '@/components/event/Descritpion'
import Cover from '@/components/event/Cover'
import Video from '@/components/event/Video'
import React from 'react'

export default function event() {
  return (
    <div className='bg-white overflow-x-hidden w-full'>
      <Cover/>
      <Video/>
      <Descritpion/>
      <Artists/>
    </div>
  )
}
