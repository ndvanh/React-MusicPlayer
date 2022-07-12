import './App.css'
import { useRef,useState}  from 'react' 
import Navbar from './components/Navbar'
import Header from './components/Header'
import ListSongs from './components/ListSongs'
import PlayBar from './components/PlayBar'
import Infomations from './components/Infomations'
import { Songs } from './MusicContext'
import Music from './data/songs.json'

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
  const song =  Music.find(song => song.id === songid)
   if (!song){
    setSong(Music[0])
   }
   else {
    setSong(song)
   }
  }
  return (
    <div className="App">
  <Songs.Provider value={{value1 :Music, value2 :song, value3: handlePlay}}>
  <div className="h-[calc(100vh_-_90px)] overflow-y-scroll" ref={musicRef} >
  <Navbar/>
   <div className="ml-[250px]">
  <Header/>
   <Infomations/>
   <ListSongs data={musicRef}/>
   </div>
  </div>
   <PlayBar/>
  </Songs.Provider>
    </div>
  );
}

export default App;
