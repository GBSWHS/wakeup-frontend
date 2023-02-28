import { useState } from 'react'

export interface Music {
  videoId: string
  url: string
  title: string
  thumbnail: string
  author: {
    name: string
  }
}

function VoteCard ({ musicData }: { musicData: Music }) {
  return (
    <div className="shadow-xl rounded-md p-3 w-full bg-gray-50">
      <div className='flex justify-between'>
        <img src={musicData.thumbnail} alt='음악 로고' className='h-14 rounded-lg' />
        <div className='ml-10'>
          <h1 className='text-1xl font-bold text-right'>{musicData.title}</h1>
          <p className='text-right'>{musicData.author.name}</p>
        </div>
      </div>
      <button className='mt-3 shadow-sm hover:shadow-lg bg-red-400 p-1 text-white w-full rounded-lg'>투표</button>
    </div>
  )
}

export default VoteCard
