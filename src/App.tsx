import { useState } from 'react'
import schoolLogo from './assets/logo.png'
import MusicCard from './components/MusicCard'
import VoteCard from './components/VoteCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex h-screen">
      <div className="m-auto w-6/12">
        <img src={schoolLogo} className='w-14' />
        <h1 className='text-2xl font-bold'>기상송</h1>
        <div className='flex w-full gap-3'>
          <div>
            <h2 className='text-xl'>현재 순위</h2>
            <div className='w-auto flex flex-col gap-1'>
              <MusicCard musicData={{title: 'Drive to 1980 love', thumbnail: 'https://avatars.githubusercontent.com/u/44047052?v=4', author: {name: '제인팝'}, url: 'https://google.com', videoId: 'test' }} />
              <MusicCard musicData={{title: 'Drive to 1980 love', thumbnail: 'https://avatars.githubusercontent.com/u/44047052?v=4', author: {name: '제인팝'}, url: 'https://google.com', videoId: 'test' }} />
              <MusicCard musicData={{title: 'Drive to 1980 love', thumbnail: 'https://avatars.githubusercontent.com/u/44047052?v=4', author: {name: '제인팝'}, url: 'https://google.com', videoId: 'test' }} />
            </div>
          </div>
          <div className='w-10/12'>
            <h2 className='text-xl'>검색</h2>
            <div className='flex-col w-auto mb-3'>
              <input className='bg-gray-50 mb-1 w-full p-2 rounded-lg shadow-md' placeholder='노래 이름 검색' />
              <button className='bg-blue-400 text-white w-full p-1 rounded-lg shadow-md'>검색</button>
            </div>
            <hr />
            <div className='w-auto flex flex-col gap-1'>
              <VoteCard musicData={{title: 'Drive to 1980 love', thumbnail: 'https://i.ytimg.com/vi/7HwgS7ZqhMA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCHoGS_6Z_dtBVX4b_75dQBDjBqoA', author: {name: '제인팝'}, url: 'https://google.com', videoId: 'test' }} />
              <VoteCard musicData={{title: 'Drive to 1980 love', thumbnail: 'https://avatars.githubusercontent.com/u/44047052?v=4', author: {name: '제인팝'}, url: 'https://google.com', videoId: 'test' }} />
              <VoteCard musicData={{title: 'Drive to 1980 love', thumbnail: 'https://avatars.githubusercontent.com/u/44047052?v=4', author: {name: '제인팝'}, url: 'https://google.com', videoId: 'test' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
