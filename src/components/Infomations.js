import React, {memo} from 'react'

function Infomations() {
  return (
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
  )
}
export default memo(Infomations)