import React, {useState, useEffect} from "react";
import axios from "axios";
import MusicTable from "./Components/MusicTable";

function App() {
  const [songs, setSongs] = useState([]);


  useEffect(() => {
    getAllSongs();
  },[])
}
async function getAllSongs(){
  let response = await axios.get('http://127.0.0.1:5000/api/songs');
  setSongs(response.data);
  console.log(response.data)
  return(
    <div>
      < MusicTable parentEntries = {entries} />
    </div>
  )
}


export default App;
