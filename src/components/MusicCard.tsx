
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
  async function SumitMusic () {
    if (!confirm('정말 ' + musicData.title + '노래를 추가하시겠습니까?')) return
    const req = await fetch('/api/music', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ musicId: musicData.videoId })
    }).then((res) => res.json())

    console.log(req)
    if (!req.success) return alert(req.reason)
    alert(req.body.title + '노래를 추가했습니다!')
  }

  return (
    <div className="flex justify-between shadow-lg rounded-md p-3 w-74 bg-gray-50 mb-1">
    <div>
      <img src={musicData.thumbnail} alt='음악 로고' className='w-24 h-12 rounded-lg' />
      <button onClick={SumitMusic} className="w-24 bg-green-400 text-white rounded-lg mt-1 py-1 shadow-md hover:shadow-lg">추가</button>
    </div>
      <div>
        <a href={musicData.url} target='_blank'><h1 className='text-1xl font-bold text-right'>{musicData.title}</h1></a>
        <p className='text-right'>{musicData.author.name}</p>
      </div>
    </div>
  )
}

export default MusicCard
