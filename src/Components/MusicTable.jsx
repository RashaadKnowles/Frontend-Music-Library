import React, {useState, useEffect} from "react";
import {Chart} from 'react-google-charts'

const MusicTable = (props) => {

    const [chartData, setChartData] = useState([])
  
    useEffect(() => {
      let tempChartData = props.parentEntries.map(entry => {
        return [entry.title, entry.artist, entry.album, entry.genre, entry.release_date] 
    });
      setChartData(tempChartData);
    },[props.parentEntries])
  
  
      return ( 
          <Chart
    chartType="TableChart"
    data={[["title", "artist", "album", "genre", "release_date"],...chartData]}
    width="100%"
    height="400px"
    legendToggle
  />
       );
  }
export default MusicTable;