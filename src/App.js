import './App.css'
import {useState}  from 'react' 
import {Header,Navbar,PlayBar,PlayList} from './components/index'
import {Home,Search,NotFound,RecommendedArtist} from './pages/index'
import {Lib,LibArtists,LibPlaylist} from './pages/Lib/index'
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
  <div className="mb-[80px]">
  <Navbar/>
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/search' element={<Search/>} />
    <Route path='/library' element={<Lib/>}>
      <Route  index element={<LibPlaylist/>}/>
      <Route path='lib_playlist' element={<LibPlaylist/>}/>
      <Route path='lib_artists' element={<LibArtists/>}/>
    </Route>
    <Route path='/playlist' element={<PlayList/>}/>
    <Route path='/artists' element={<RecommendedArtist/>}/>
    <Route path='*' element={<NotFound/>} />
  </Routes>
  </div>
   <PlayBar/>
  </Songs.Provider>
    </div>
  );
}

export default App;
