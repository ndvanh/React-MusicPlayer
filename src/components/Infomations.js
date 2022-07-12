import React, {memo} from 'react'

function Infomations() {
  return (
    <div className="px-8 bg-gradient-to-b from-[#6c47ff] to-[#996969]">
      <div className="flex pt-9 pb-6">
        <div className="">
          <img alt="Ảnh thông tin" src={require('../items/img/lofi-ava.jpg')} className=" object-cover h-[232px] w-[232px] rounded-full shadow-[0_2px_20px_10px_rgba(0,0,0,0.3)]"/>
        </div>
        <div className="ml-6 flex flex-col justify-between">
          <h2 className="uppercase text-white font-bold text-[12px] ">Playlist</h2>
          <h1 className="capitalize text-white font-bold text-[96px] ">This Is VA Music <i className="fa-solid fa-headphones"></i></h1>
          <h2 className="text-text1 text-[15px] ">Best songs that are copyright free and safe music for gaming, live streaming, studying</h2>
        </div>
      </div>
    </div>
  )
}
export default memo(Infomations)