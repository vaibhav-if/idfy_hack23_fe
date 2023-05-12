import React, { useEffect } from "react";
import axios from "axios";

const VIDEO_STATS_URL = "http://127.0.0.1:5000/video_stats";
const Dashboard = () => {

  const getStats = () => {
    
    let options = {
        url: VIDEO_STATS_URL,
        method: "GET",
        // headers: {
        //   'Content-Type': 'application/json'
        // },
    }
    axios.request(options).then((data)=>{
        console.log(data.data)
    }).catch((err)=>{
        console.log(err)
    })
    
  };

  useEffect(()=>{
    getStats()
  },[])
  return(
    <div className="mt10">
      <div className="card">
          <p>Total calls compaleted</p>
      </div>
    </div>
  )
};

export default Dashboard;
