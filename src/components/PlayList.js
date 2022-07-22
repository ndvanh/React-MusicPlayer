import React from 'react'
import { useContext,useState,useEffect}  from 'react' 
import { Songs } from '../MusicContext'

export default function PlayList() {
    const {value1,value2,value3} =  useContext(Songs)
 const [sticky , setSticky] = useState("")

useEffect(()=>{
  const handleSticky = () => {
    const scrollTop  = document.documentElement.scrollTop
    const stickyClass = scrollTop >= 320 ? "bg-[#1f1f1f]" : ""
    setSticky(stickyClass)
   }
   document.addEventListener('scroll',handleSticky)
  return () => {
    document.removeEventListener('scroll',handleSticky)
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
    <div className="ml-[250px] sm:ml-[0px]">
   <div className="px-8 bg-gradient-to-b from-[#6c47ff] to-[#996969]">
      <div className="flex pt-9 pb-6">
        <div className="">
          <img alt="Ảnh thông tin" src={require('../assets/images/lofi-ava.jpg')} className=" object-cover h-[232px] w-[232px] shadow-[0_2px_20px_10px_rgba(0,0,0,0.3)]
           lg:h-[150px] lg:w-[150px] md:h-[150px] md:w-[210px] sm:w-[150px] "/>
        </div>
        <div className="ml-6 flex flex-col justify-between">
          <h2 className="uppercase text-white font-bold text-[12px] md:text-[10px] ">Playlist</h2>
          <h1 className="capitalize text-white font-bold text-[96px] 
          2xl:text-[80px] xl:text-[60px] lg:text-[50px] md:text-[25px] sm:text-[30px]">This Is VA Music</h1>
          <h2 className="text-text1 text-[15px] md:text-[10px] ">Best songs that are copyright free and safe music for gaming, live streaming, studying</h2>
        </div>
      </div>
    </div>
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
    </div>
  )
}
