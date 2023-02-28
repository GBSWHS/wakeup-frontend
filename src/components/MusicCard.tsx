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

function MusicCard ({ musicData }: { musicData: Music }) {
  return (
    <div className="flex justify-between shadow-xl rounded-md p-3 w-64 bg-gray-50">
      <img src={musicData.thumbnail} alt='음악 로고' className='h-14 rounded-lg' />
      <div className='ml-10'>
        <h1 className='text-1xl font-bold text-right'>{musicData.title}</h1>
        <p className='text-right'>{musicData.author.name}</p>
      </div>
    </div>
  )
}

export default MusicCard
