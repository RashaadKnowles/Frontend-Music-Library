import React, {useState, useEffect} from "react";
import {Chart} from 'react-google-charts'

const MusicTable = (props) => {
        return(
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Genre</th>
                        <th>Release_Date</th>
                    </tr>
                </thead>
                <tbody>
                    {props.songs.map((song, index) =>{
                        return(
                            <tr>
                                <td>{index + 1}</td>
                                <td>{song.title}</td>
                                <td>{song.artist}</td>
                                <td>{song.album}</td>
                                <td>{song.genre}</td>
                                <td>{song.release_date}</td>
                            </tr>
                        )
                    }
                    )}
                </tbody>
            </table>
        )
  
  
   
  }
export default MusicTable;