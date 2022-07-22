import React from 'react'

export default function Search() {
  return (
    <div className="ml-[250px] bg-[#121212] text-white h-screen sm:ml-0">
      <div className="px-8 py-6">
      <h1 className="font-bold text-[25px]">
      Tìm kiếm bài hát yêu thích
      </h1>
    <div className="mt-5 relative">
      <input type="text" placeholder="Tìm kiếm bài hát" className="text-black py-3 pl-[50px] pr-[20px] w-[360px] rounded-full outline-none" autoFocus maxLength={100}/>
      <div className="absolute top-[10%] left-3">
        <span className="text-black text-[25px]">
        <i class="fa-solid fa-magnifying-glass"></i>
        </span>
      </div>
    </div>
    </div>
    </div>
  )
}
