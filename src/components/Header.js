import React, { memo } from 'react'

function Header() {
  return (
    <header className=" text-white py-4 px-8 flex justify-between sticky top-0 bg-[#6c47ff] ml-[250px] sm:ml-0 z-[1]">
      <div className="">
        <button className="bg-[#2c261e] h-[32px] w-[32px] rounded-[50%]">
          <i className="fa-solid fa-angle-left text-[22px] leading-[32px] text-text1"></i></button>
        <button className="bg-[#2c261e] h-[32px] w-[32px] ml-[18px] rounded-[50%]">
          <i className="fa-solid fa-angle-right text-[22px] leading-[32px] text-text1"></i></button>
      </div>
      <div className="">
      <button title="Nâng cấp lên premium" className="bg-black font-bold text-[14px] py-[5px] px-[15px] rounded-3xl border-[1px] border-solid border-white ">Nâng cấp</button>
        <button className="bg-black font-bold text-[14px] py-[5px] px-[15px] ml-[30px] rounded-3xl">Đăng nhập</button>
      </div>
    </header>
  )
}
export default memo(Header)