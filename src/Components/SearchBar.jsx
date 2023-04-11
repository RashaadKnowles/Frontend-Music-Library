import React, {useState} from "react";
import axios from "axios"
const CreateSong = () => {
    
    async function createSong(song) {
        try {
            let response = await axios.post("http://127.0.0.1:5000/api/songs",song)
            console.log("song sent")
        } catch (error) {
            console.log(error)
        }

    }
    const [title, setTtle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [genre, setGenre] = useState('');
    const [release_date, setReleaseDate] = useState('');





    function handleSubmit (e){
        let newSong = {
        title: title,
        album: album,
        artist: artist,
        genre: genre,
        release_date: release_date,
    }
        e.preventDefault()
        createSong(newSong)
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>title</label>
            <input type="text" value={title}  onChange={(event) => setTtle(event.target.value)}></input>
            <lablel>album</lablel>
            <input type="text" value={album}  onChange={(event) => setAlbum(event.target.value)}></input>
            <label>artist</label>
            <input type="text" value={artist}  onChange={(event) => setArtist(event.target.value)}></input>
            <label>genre</label>
            <input type="text" value={genre}  onChange={(event) => setGenre(event.target.value)}></input>
            <label>release_date</label>
            <input type="date" value={release_date}  onChange={(event) => setReleaseDate(event.target.value)}></input>
            <button type="submit">Submit</button>
        </form>
            
        
    );
}

export default CreateSong;


