import React from "react";
import axios from "axios"
const CreateSong = () => {
    const newSong = {
        title: "Vette Motors",
        album: "The Last Slimeto",
        artist: "Nba Youngboy",
        genre: "hip-hop",
        release_date: "2018-10-05",
    }
    async function createSong(song) {
        try {
            let response = await axios.post("http://127.0.0.1:5000/api/songs",song)
            console.log("song sent")
        } catch (error) {
            console.log(error)
        }

    }

    function handleSubmit (e){
        e.preventDefault()
        createSong(newSong)
    }


    return (
        <div>
            <button onClick={handleSubmit} >Send Song</button>
        </div>
    );
}

export default CreateSong;


