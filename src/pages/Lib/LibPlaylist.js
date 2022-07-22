import React from 'react'
import {Link} from 'react-router-dom'
import {Play} from '../../components/icons/play/index'

export default function Lib_playlist() {
  return (
    <div className="mt-5">
    <div className="grid grid-cols-6 gap-5">
        <div className="col-start-1 col-end-3">
        <Link to='/library/favsongs'>
        <div className="group bg-gradient-to-br from-[#6c47ff] to-[#996969] h-full relative rounded-[5px] cursor-pointer flex items-end p-4">
          <div>
            <h2 className="font-bold text-[30px]">
              Bài hát đã thích
            </h2>
            <span>
              0 bài hát đã thích
            </span>
          </div>
          <div className="absolute bottom-2 right-4 opacity-0 group-hover:opacity-100 group-hover:animate-move duration-300">
                <button className="bg-white p-3 rounded-full shadow-[0_2px_20px_5px_rgba(0,0,0,0.3)]"><Play/></button>
              </div>
          </div> 
          </Link> 
        </div>
          <div className="col-start-3 col-end-4">
          <Link to='/playlist'>
        <div  className="bg-[#181818] hover:bg-[#2e2e2e] p-4 rounded-[5px] duration-500 group cursor-pointer">
            <div className="mb-3">
              <div className="pt-[100%] bg-black relative rounded-[5px]">
             <div> <img alt='Playlist' src={require('../../assets/images/lofi-ava.jpg')} loading='lazy' 
              className="h-full w-full absolute top-0 left-0 rounded-[5px] object-cover"/></div>
              <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 group-hover:animate-move duration-300">
                <button className="bg-white p-3 rounded-full shadow-[0_2px_20px_5px_rgba(0,0,0,0.3)]"><Play/></button>
              </div>
              </div>
            </div>
            <div className="pb-3">
              <h3 className="text-[16px] font-bold overflow-hidden whitespace-nowrap text-ellipsis">Va Music Playlist</h3>
                <span className="py-1 block text-[14px] text-text1">Của bạn</span>
              </div>
          </div> </Link>
          </div>
    </div>
    </div>
  )
}


