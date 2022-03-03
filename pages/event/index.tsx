import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import Head from 'next/head'

const Event:NextPage = () => {
  const [event, setEvent] = useState(
    {}
  )

  useEffect(()=> {
    setEvent(JSON.parse(localStorage.getItem('event')))
  })

  
  return(
    <div className='flex items-center min-h-screen flex-col text-envitedPurple antialiased relative lg:text-center'>
      <Head>
        <title>{event.name}</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet" />
      </Head>
      <img className='w-full md:max-h-72' src="/images/event/cover_photo.png" alt="cover photo" />
      <div className='w-full mt-8 lg:mx-auto'>
        <div className='flex ml-10 lg:mx-auto w-3/5'>
          <p className='text-4xl'>🎉</p>
          <div className='ml-4'>
            <h1 className='text-4xl font-bold'>{event.name}</h1>
            <p className='mt-1 text-xl opacity-40 font-semibold'>Hosted by <span className='font-bold'>{event.host}</span></p>
          </div>
        </div>
      </div>

      <div className='flex justify-around mt-4 lg:mt-8'>
        <img className=' w-32 md:w-48 cursor-pointer' src="/images/event/going.png" alt="going" />
        <img className=' w-32 md:w-48 cursor-pointer' src="/images/event/maybe_going.png" alt="maybe going" />
        <img className=' w-32 md:w-48 cursor-pointer' src="/images/event/not_going.png" alt="not going" />
      </div>

      <div className='flex'>
        <button className='font-bold bg-gray-100 py-1 px-16 rounded-lg mr-4'><span className='mr-2'>✉️</span> Invite a friend</button>
        <img className=' cursor-pointer h-10' src="/images/event/settings.png" alt="setting" />
      </div>

      <div className='w-full mt-8'>
        <div className='flex ml-10 lg:mx-auto w-3/5'>
          <p className='text-lg'>🗓</p>
          <div className='ml-4'>
            <p className='text-lg font-bold'>{event.dateFrom}</p>
            <p className='text-lg mt-1 font-bold'>to {event.dateTo}</p>
            <p className=' text-base opacity-40 font-semibold'>Add to calendar</p>
          </div>
        </div>
      </div>

      <div className='w-full mt-4'>
        <div className='flex ml-10 lg:mx-auto w-3/5'>
          <p className='text-lg'>📍</p>
          <div className='ml-4'>
            <p className='text-lg font-bold'>{event.location}</p>
            <p className=' text-base opacity-40 font-semibold'>Open in maps</p>
          </div>
        </div>
      </div>

      <div className='mt-5'>
        <button className='mr-4 py-2 px-14 rounded-full bg-violet-300 border border-transparent hover:border-violet-300 hover:bg-white'>Details</button>
        <button className='ml-4 py-2 px-14 rounded-full bg-white border border-violet-300 hover:border-transparent hover:bg-violet-300'>Posts</button>
      </div>
      <div className='w-full'>
        <p className=' text-gray-500 ml-10 mt-6 w-4/5 '>{event.details}</p>
      </div>

      
    </div>
    
  )
}

export default Event