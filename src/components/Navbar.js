import React, { memo } from 'react'
import { useState } from 'react'
import {MenuItems} from '../items/NavItems'
function Navbar() {
  const [pick,setPick] = useState()
  return (
    <nav className=" bg-black h-screen w-[250px] fixed">
     <div className="text-white pt-[20px] pl-[20px]">
     <div className="flex hover:cursor-pointer items-center">
       <i className="fa-solid fa-headphones-simple text-[40px]"></i>
        <span className="pl-1.5 text-[25px] font-bold">Va Music</span>
      </div>
      <div className="mt-7 ml-1 relative after:absolute after:bg-[#717171] after:h-[1px] after:top-[120%] after:w-[195px] ">
          <ul>
          {MenuItems.map((item,index)=> (
            <li key={index}
            className="font-bold text-[16px] pt-4 text-text1 hover:text-white duration-500 ">
            <a href={item.url}
            className="block w-full" 
            style={pick === item.title ? {color: 'white'} : {}}
            onClick={()=> setPick(item.title)}>
              <i className={`${item.icon} mr-3 text-[20px] `}></i>{item.title}</a>
            </li>
          ))}
          </ul>
      </div>
      <div className="mt-[30px]">
      <ul>
            <li className="text-[15px] pt-4 text-text1 hover:text-white duration-500 ">Va Music Playlist</li>
      </ul>
      </div>
     </div>
    </nav>
  )
}
export default memo(Navbar)
