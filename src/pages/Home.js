import React from 'react'
import {useState,useEffect,useContext} from 'react' 
import {Play} from '../components/icons/play/index'
import {Link} from 'react-router-dom'
import { Songs } from '../MusicContext'

export default function Home() {
  const [time,setTime] = useState('Chào buổi sáng')
  const hours = new Date().getHours()
  useEffect(() => {
    if(hours >= 4 && hours < 12 ){
      setTime('Chào buổi sáng 🌅')
    } else if(hours >= 12 && hours < 18) {
      setTime('Chào buổi chiều ⛅')
    } else {
      setTime('Chào buổi tối 🌃')
    }
   
  },[hours])

  const {value1} =  useContext(Songs)

  return (
    <div className="ml-[250px] bg-[#121212] text-white sm:ml-0">
      <div className="px-8 py-6">
        <h1 className="font-bold text-[30px]">{time}</h1>
        <div className="py-5">
        <h2 className="font-bold text-[25px]">Playlist #</h2>
        <Link to='/playlist'>
        <div className="flex bg-[#242424] rounded-[5px]  mt-5 cursor-pointer hover:bg-[#2c2e31] duration-300">
          <div className="p-5">
          <img alt="Ảnh playlist" src={require('../assets/images/lofi-ava.jpg')} className="h-[250px] lg:h-[150px] lg:w-[150px] md:h-[150px] md:w-[210px] sm:w-[150px] "/>
          </div>
          <div className="mt-5 ml-10 "> 
          <h3 className="text-[60px]">Va Music Playlist</h3>
          <button className="bg-white rounded-full p-5 mt-10"><Play/></button>
          </div>
        </div>
        </Link>
        </div>
        {/* Nghệ sĩ đc đề xuất (6) */}
        <div className="py-5">
         <div className="flex items-center justify-between">
         <h2 className="font-bold text-[25px]">Nghệ sĩ được đề xuất</h2>
         <Link to='/artists'><span className="text-text1 uppercase font-bold text-[14px] cursor-pointer hover:underline">Xem tất cả</span></Link>
         </div>
          <div className="grid grid-cols-6 gap-5 mt-5">
          {value1.filter(song=>song.hot === true).slice(0,6).map((fsong,index)=>(
            <div  className="bg-[#181818] hover:bg-[#2e2e2e] p-4 rounded-[5px] duration-500 group cursor-pointer" key={index}>
            <div className="mb-3">
              <div className="pt-[100%] bg-black relative rounded-[5px]">
             <div> <img alt={`Ảnh ${fsong.author}`} src={fsong.links.images[0].url} loading='lazy' 
              className="h-full w-full absolute top-0 left-0 rounded-[5px] object-cover"/></div>
              <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 group-hover:animate-move duration-300">
                <button className="bg-white p-3 rounded-full shadow-[0_2px_20px_5px_rgba(0,0,0,0.3)]"><Play/></button>
              </div>
              </div>
            </div>
            <div className="pb-3">
              <h3 className="text-[16px] font-bold overflow-hidden whitespace-nowrap text-ellipsis">{fsong.author}</h3>
                <span className="py-1 block text-[14px] text-text1">Nghệ sĩ</span>
              </div>
          </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  )
}
