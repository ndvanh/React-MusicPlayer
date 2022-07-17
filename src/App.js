import './App.css'
import { useRef,useState}  from 'react' 
import {Home,Header, Lib, Navbar,PlayBar,Search,SonginfiWrapper,NotFound} from './components/index'
import { Songs } from './MusicContext'
import Music from './data/songs.json'
import { Routes,Route } from 'react-router-dom'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtYHprCoVeVknw9YscQtz7wj53munYfw8",
  authDomain: "test-vamusic-17540.firebaseapp.com",
  projectId: "test-vamusic-17540",
  storageBucket: "test-vamusic-17540.appspot.com",
  messagingSenderId: "578743327031",
  appId: "1:578743327031:web:3428d9ac42b3151e71a2b2",
  measurementId: "G-X2XQTDFBE6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  const musicRef = useRef(null)
  // get song
  const [song,setSong] = useState(Music[0])
  const handlePlay = (songid) => {
  const thesong =  Music.find(element => element.id === songid)
   if (!thesong){
    setSong(Music[0])
   }
   else {
    setSong(thesong)
   }
  }
  return (
    <div className="App">
  <Songs.Provider value={{value1 :Music, value2 :song, value3: handlePlay}}>
  <Navbar/>
  <div className="h-[calc(100vh_-_90px)] overflow-y-scroll" ref={musicRef} >
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/timkiem' element={<Search/>} />
    <Route path='/thuvien' element={<Lib/>} />
    <Route path='/playlist' element={<SonginfiWrapper data={musicRef}/>}/>
    <Route path='*' element={<NotFound/>} />
  </Routes>
  </div>
   <PlayBar/>
  </Songs.Provider>
    </div>
  );
}

export default App;
