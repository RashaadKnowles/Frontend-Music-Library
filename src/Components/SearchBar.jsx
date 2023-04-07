import React from "react";


async function createSong(newSong){
    const newSong={
        
        title: "Vette Motors",
        album: "The Last Slimeto",
        artist: "Nba Youngboy",
        genre: "hip-hop",
        release_date: "2018-10-05",}
    
    let response = await axios.post('http://127.0.0.1:5000/api/songs', newSong);
    if(response.data === 201){
        await getAllSongs();
    }
}
export default createSong;