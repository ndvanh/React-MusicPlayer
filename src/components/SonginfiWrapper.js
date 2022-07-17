import React from 'react'
import ListSongs from './ListSongs'
import Infomations from './Infomations'

export default function SonginfiWrapper({data}) {
  return (
    <div className="ml-[250px] sm:ml-[0px]">
   <Infomations/>
   <ListSongs data={data}/>
    </div>
  )
}
