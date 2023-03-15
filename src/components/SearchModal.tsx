import { useEffect, useState } from 'react'
import Modal from 'react-modal'
import useDebouncedEffect from '../hooks/useDebouncedEffect'
import MusicCard from './MusicCard'
import closeIcon from '../assets/xmark-solid.svg'

interface MusicBody {
  videoId: string
  title: string,
  url: string
  thumbnail: string
  author: {
    name: string
  }
}

function SearchModal ({ modalStatus, setModalStatus }: { modalStatus: boolean, setModalStatus: Function}) {
  const [query, setQuery] = useState<string>('')
  const [result, setResult] = useState<MusicBody[]>([])
  
  function closeModal() {
    setModalStatus(false);
  }

  useDebouncedEffect(async () => {
    if (!query) return 
    const results = await fetch('/api/music/search?q=' + query).then((res) => res.json())
    if (!results.success) return <div>에러가 발생했습니다. 알아서 고치세요</div>
    setResult(results.body)
  }, 500, [query])
  return (
    <Modal
      isOpen={modalStatus}
      onRequestClose={closeModal}
      className={'flex h-screen'}
      contentLabel='search modal'
    >
      <div className='m-auto xl:w-4/12 lg:w-4/12 md:w-5/12 sm:w-6/12 w-9/12 bg-white shadow-lg rounded-lg p-5 '>
        <div className='w-full flex justify-between'>
          <h1 className='text-2xl font-bold'>노래 검색</h1>
          <button className='hover:animate-spin' onClick={() => setModalStatus(false)}><img src={closeIcon} className='w-3'/></button>
        </div>
        <small>
          <strong>노래 추가 정책</strong>
          <li>상대방이 불쾌할수 있는 표현이 포함되거나 성적인 표현이 들어가있는 음악 등록 금지</li>
          <li>6분 이상의 재생 길이를 가진 음악 등록 제한</li>
          <li>음악이 아닌 유형(일반 영상) 등록 금지</li>
        </small>
        <input onChange={(e) => setQuery(e.target.value)} className='w-full bg-gray-200 p-2 mt-3 rounded-md' placeholder='노래 제목 입력'/>
        { result.length > 0 && <div className='mt-3 max-h-96 overflow-y-auto'>
          { result.map((v) => <MusicCard musicData={v} key={v.videoId}/>) }
        </div> }
      </div>
    </Modal>
  )
}

export default SearchModal
