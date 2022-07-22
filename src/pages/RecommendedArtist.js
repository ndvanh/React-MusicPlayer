import React from 'react'
import {useContext} from 'react' 
import { Songs } from '../MusicContext'
import {Play} from '../components/icons/play/index'
import {Link} from 'react-router-dom'

export default function RecommendedArtist() {
    const {value1} =  useContext(Songs)
  return (
    <div className="pt-6 pb-10 px-8 ml-[250px] bg-[#121212] text-white">
    <h2 className="font-bold text-[25px]">Nghệ sĩ được đề xuất</h2>
          <div className="grid grid-cols-6 gap-5 mt-5">
          {value1.filter(song=>song.hot === true).map((fsong,index)=>(
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
  )
}
