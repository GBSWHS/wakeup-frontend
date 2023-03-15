import { useState } from 'react'
import schoolLogo from './assets/logo.png'
import VoteCard from './components/VoteCard'
import SearchModal from './components/SearchModal'
import useSwr from 'swr'
import Loading from './components/Loading'

const fetcher = (url: RequestInfo | URL) => fetch(url).then(r => r.json())
function App() {
  const [modalIsOpen, setModalOpen] = useState<boolean>(false)
  const { data: userData, error: userError } = useSwr('/api/auth/me', fetcher)
  const { data: rankData, error: rankError } = useSwr('/api/vote', fetcher)
  if (!userData || !rankData) return <Loading />
  if (userError || rankError) return <div>오류가 발생하였습니다<br/>3-1. 임태현에게 문의</div>
  if (!userData.success) location.href = '/api/auth/login'
  if (!rankData.success) return <div>오류가 발생하였습니다<br/>3-1. 임태현에게 문의</div>

  return (
    <div className="flex h-screen">
      <div className="m-auto xl:w-3/12 lg:w-4/12 md:w-5/12 sm:w-6/12 w-9/12">
        <img src={schoolLogo} className='w-14' />
        <h1 className='text-2xl font-bold'>기상송</h1>
        <small>{userData.body.nickname}으로 로그인 됨</small>
        <button onClick={() => setModalOpen(!modalIsOpen)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">노래 추가</button>
        <h2 className='text-xl mt-4'>현재 순위</h2>
        <div className='flex flex-col gap-1'>
          { rankData.body.map((v: any) => <VoteCard musicData={v} key={v.music_id} />) }
        </div>
      </div>
      <SearchModal modalStatus={modalIsOpen} setModalStatus={setModalOpen} />
    </div>
  )
}

export default App
