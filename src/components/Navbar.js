import React, { memo } from 'react'
import {MenuItems} from '../items/NavItems'
import {NavLink,Link} from 'react-router-dom'

function Navbar() {
  const linkActive = ({isActive}) => ({
    color : isActive ? 'white' : ''
  })
  return (
    <nav className=" bg-black h-screen w-[250px] fixed sm:hidden pt-[20px] pl-[20px]">
     <div className="text-white">
     <Link to='/'>
     <div className="flex hover:cursor-pointer items-center">
       <i className="fa-solid fa-headphones-simple text-[40px]"></i>
        <span className="pl-1.5 text-[25px] font-bold">Va Music</span>
      </div></Link>
      <div className="mt-7 ml-1 relative">
          <ul>
          {MenuItems.map((item,index)=> (
            <li key={index}
            className="font-bold text-[16px] pt-4 text-text1 hover:text-white duration-500 ">
            <NavLink to={item.url}
            className="block w-full" 
            style={linkActive}
            >
              <i className={`${item.icon} mr-4 text-[20px] h-[20px] w-[20px] `}></i>{item.title}</NavLink>
            </li>
          ))}
          </ul>
      </div>
     </div>
     <div className="mt-[30px] relative">
      <div className="">
      <ul>
      <li className="text-[15px] pt-4 text-text1 hover:text-white duration-500">  
      <NavLink to='/newplaylist' className="font-bold text-[16px] text-text1 hover:text-white duration-500 block w-full" style={linkActive}>
        <i className="fa-solid fa-square-plus mr-4 text-[20px] h-[20px] w-[20px]">
      </i>Tạo playlist</NavLink></li>
      <li className="text-[15px] pt-4 text-text1 hover:text-white duration-500">
        <NavLink to='/baihatyeuthich'  className="font-bold text-[16px] text-text1 hover:text-white duration-500 block w-full" style={linkActive}>
          <i className="fa-solid fa-heart-circle-plus mr-4 text-[20px] h-[20px] w-[20px]">
        </i>Bài hát yêu thích</NavLink></li>
      </ul>
      </div>
      <div className="pr-[20px]  pt-4">
        <div className="bg-[#383838] h-[1px] w-full"></div>
      </div>
     <div>
     <ul>
      <li className="text-[15px] pt-4 text-text1 hover:text-white duration-500 ">
        <NavLink to='/playlist'  className="font-bold text-[16px] text-text1 hover:text-white duration-500 block w-full" style={linkActive}>
          Va Music Playlist</NavLink></li>
      </ul>
     </div>
      </div>
      <div className="absolute bottom-[100px] text-text1 hover:text-white duration-500 text-[16px] font-bold">
        <a href="https://github.com/ndvanh/React-MusicPlayer" target="_blank" rel="noopener noreferrer"> <i className="fa-regular fa-circle-down"></i> Cài đặt ứng dụng</a>
      </div>
    </nav>
  )
}
export default memo(Navbar)
