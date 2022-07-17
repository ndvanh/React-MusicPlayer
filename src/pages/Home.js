import React from 'react'
import {useState,useEffect}  from 'react' 
import {Play} from '../components/icons/play/index'
import {Link} from 'react-router-dom'

export default function Home() {
  const [time,setTime] = useState('Chào buổi sáng')
  const hours = new Date().getHours()
  useEffect(() => {
    if(hours >= 0 && hours < 12 ){
      setTime('Chào buổi sáng 🌅')
    } else if(hours >= 12 && hours < 18) {
      setTime('Chào buổi chiều ⛅')
    } else {
      setTime('Chào buổi tối 🌃')
    }
   
  },[hours])
  return (
    <div className="ml-[250px] bg-[#121212] text-white h-full">
      <div className="px-8 py-6">
        <h1 className="font-bold text-[30px]">{time}</h1>
        <div className="py-5">
        <h2 className="font-bold text-[20px]">Playlist #</h2>
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
        <div className="py-5">
          <h2 className="font-bold text-[20px]">Nghệ sĩ nổi bật</h2>
        </div>
      </div>
    </div>
  )
}
