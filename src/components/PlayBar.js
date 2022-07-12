import React from 'react'
import { useContext,useRef,useState,useEffect } from 'react'
import { Songs } from '../MusicContext'
import Unmute from '../icons/speaker/Unmute'
import {Loop,Loop1,Next,Prev,Play,Pause} from '../icons/play/index'

export default function PlayBar() {
  const {value2,value3} = useContext(Songs)
  const animationRef = useRef()
  const speakerRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const togglePlaying = () => {
    if(!isPlaying){
      speakerRef.current.play()
      // run process bar
      animationRef.current = requestAnimationFrame(whilePlaying)
    }
    else{
      speakerRef.current.pause()
      cancelAnimationFrame(animationRef.current)
    }
    setIsPlaying(!isPlaying)
  }
// run process bar
  const whilePlaying = () => {
    probarRef.current.value = speakerRef.current.currentTime 
    setCurtime(probarRef.current.value)
    animationRef.current = requestAnimationFrame(whilePlaying)
  }

  const probarRef = useRef()
  const [duration,setDuration] = useState(0)
  const [curtime,setCurtime] = useState(0)
  const calcTime = (secs) =>{
    const minutes = Math.floor(secs/60)
   // const returnMinutes = minutes<10 ? `0${minutes}` : `${minutes}`
    const seconds = Math.floor(secs%60)
    const returnSeconds = seconds<10 ? `0${seconds}` : `${seconds}`
    return `${minutes}:${returnSeconds}`
  }
 
  const onLoadedMetadata = () => {
    const sec = Math.floor(speakerRef.current.duration)
    setDuration(sec)
    probarRef.current.max = sec
    if(isPlaying){
      speakerRef.current.play()
    }
  }

  const changeRange = () => {
    speakerRef.current.currentTime = probarRef.current.value
    setCurtime(probarRef.current.value)
  }

  const handleNext = () => {
    value3(value2.id +1)
  } 

  const handlePrev= () => {
    value3(value2.id -1)
  }

  const isEnded = () => {
    handleNext()
  }

  const handleVolumeChange = (e) => {
    speakerRef.current.volume = e.target.value/100
  }
useEffect(() => {
  if(isPlaying) {
    document.title = `${value2.name} - ${value2.author}`
  }
  else {
    document.title = 'Va Music'
  }
})

const [loop,setLoop] = useState(false)
const toggleLoop = () => {
  if(!loop) {
    speakerRef.current.loop = true
  }
  else {
    speakerRef.current.loop = false
  }
  setLoop(!loop)
}

  return (
    <div className="bg-[#181818] bottom-0 fixed w-screen h-[90px] border-t-[1px] border-[#454546] text-white">
     <div className="py-2 px-4 flex items-center justify-between">
      <div className="flex items-center basis-3/12">
      <img alt={`${value2.name}`} 
      src={value2.links.images[1].url} 
      className="h-[56px] w-[56px]"
      loading='lazy'
      />
      <div className="ml-3">
        <div><span className="capitalize font-bold cursor-pointer text-[15px]" draggable="true">{value2.name}</span></div>
        <div><span className="text-text1 cursor-pointer text-[12px]" draggable="true">{value2.author}</span></div>
      </div>
      </div>
      <div className="basis-6/12 text-center">
        <div className="mb-2 mt-1">
        <audio  
        src={value2.url} 
        ref={speakerRef} 
        onLoadedMetadata={onLoadedMetadata} 
        onEnded={isEnded}
        />
        <button className="relative top-1 right-[50px]" onClick={handlePrev}><Prev/></button>
        <button className="bg-white rounded-full p-2"
        onClick={togglePlaying}
        >
          {isPlaying ? <Pause/> : <Play/>}</button>
        <button className="relative top-1 left-[50px] " onClick={handleNext}><Next/></button>
        </div>
          <div className="flex items-center">
            <span className="relative bottom-[3px] right-2">{calcTime(curtime)}</span>
          <input 
        min="0" max="100" defaultValue="0" step="1"
        type="range" 
        className="w-full cursor-pointer" 
        ref={probarRef}
        onChange={changeRange}
       />
       <span className="relative bottom-[3px] left-2">{(duration && !isNaN(duration)) && calcTime(duration)}</span>
          </div>    
      </div>
      <div className="flex items-center basis-3/12 justify-end">
      <button className="mr-3" onClick={toggleLoop}>
        {loop ? <Loop1/> : <Loop/> }
      </button>
        <button className="mr-3"><Unmute/></button>
        <input 
        min="0" max="100" defaultValue="100" step="1"
        type="range" 
        className="cursor-pointer" 
        onChange={handleVolumeChange}/>
      </div>
     </div>
    </div>
  )
}
