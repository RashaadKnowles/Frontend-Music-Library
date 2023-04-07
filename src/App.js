import React, {useState, useEffect} from "react";
import axios from "axios";
import MusicTable from "./Components/MusicTable";
import CreateSong from "./Components/SearchBar"

function App() {
  const [songs, setSongs] = useState([]);


  useEffect(() => {
    getAllSongs();
},[])

async function getAllSongs(){
  let response = await axios.get('http://127.0.0.1:5000/api/songs');
  setSongs(response.data);
  console.log("Songs From DATABASE", response.data)
}
  return(
    <div>
      <CreateSong/>
      < MusicTable songs = {songs} />
    </div>
  )
}


export default App;
