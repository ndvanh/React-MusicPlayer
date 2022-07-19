import React from 'react'
import { useContext,useState,useEffect}  from 'react' 
import { Songs } from '../MusicContext'

export default function ListSongs({data}) {
 const {value1,value2,value3} =  useContext(Songs)
 const [sticky , setSticky] = useState("")

useEffect(()=>{
  const musicRef = data.current
  const handleSticky = () => {
    const scrollTop  = musicRef.scrollTop
    const stickyClass = scrollTop >= 320 ? "bg-[#1f1f1f]" : ""
    setSticky(stickyClass)
   }
   musicRef.addEventListener('scroll',handleSticky)
  return () => {
    musicRef.removeEventListener('scroll',handleSticky)
  }
 },[])

 const tbHeader = `shadow-[0_1px_#4d4c4c] sticky top-[64px] duration-200 ${sticky}`
 const [pickid,setPickID] = useState()
 const handlePlay = (songid) => {
  setPickID(songid)
  value3(songid)
 }
useEffect(() => {
  setPickID(value2.id)
},[value2])

  return (
    <div className="bg-[#121212] py-[10px]">
        <div className="text-text1">
          <table className="table-auto w-full text-left border-collapse border-spacing-[70px] ">
            <thead className={tbHeader}>
              <tr>
                <th className="w-[5%] px-[30px] py-[15px]">#</th>
                <th className="uppercase">Tiêu đề</th>
                <th className="w-[30%] uppercase">Nghệ sĩ</th>
                <th className="w-[10%]"><i className="fa-solid fa-heart-circle-plus"></i></th>
              </tr>
            </thead>
            <tbody>
            {value1.map((song) =>(
                  <tr 
                  className='hover:bg-[#2a2a2a] hover:rounded-[5px] hover:text-white h-14 cursor-pointer duration-100' 
                  key={song.id}
                  style = {pickid === song.id ? {color :'white',backgroundColor:'#2a2a2a'} : {}}
                  onClick={() =>handlePlay(song.id) }
                  >
                  <td className='px-[30px] rounded-l-[5px]'>{song.id + 1}</td>
                  <td className='flex items-center my-[10px]'> <img alt={`${song.name}`} src={song.links.images[1].url} className="h-[50px] w-[50px]" loading='lazy'/>
                   <span className='pl-[15px]'>{song.name}</span></td>
                  <td>{song.author}</td>
                  <td className="rounded-r-[5px]"><i className="fa-solid fa-heart text-white" title='Thêm vào thư viện'></i></td>
                </tr>
                ))}
            </tbody>
          </table>
        </div>
    </div>
  )
}
