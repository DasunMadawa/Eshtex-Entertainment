import Artists from '@/components/event/Artists'
import Descritpion from '@/components/event/Descritpion'
import Cover from '@/components/event/Cover'
import Video from '@/components/event/Video'
import React from 'react'
import ContactSection from '@/components/ContactSection'

export default function event() {
  return (
    <section id='event' className='bg-white overflow-x-hidden w-full flex flex-col items-center'>
      <Cover />
      <Video />
      <Descritpion />
      <Artists />
      <ContactSection />
    </section>
  )
}
