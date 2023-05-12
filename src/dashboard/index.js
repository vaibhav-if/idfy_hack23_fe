import React, { useEffect, useState } from "react";
import axios from "axios";

const VIDEO_STATS_URL = "http://127.0.0.1:5000/video_stats";
const Dashboard = () => {

  const [statsData, setStatsData] = useState({})
  const getStats = () => {
    let options = {
      url: VIDEO_STATS_URL,
      method: "GET",
      // headers: {
      //   'Content-Type': 'application/json'
      // },
    };
    axios
      .request(options)
      .then((data) => {
        console.log(data.data);
        setStatsData(data.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getStats();
  }, []);

  const card = (props) => {
    return (
      <div className="card flex-column" title={props.title || props.name}>
        <span className="font-bold">{props.name}</span>
        <span>{statsData[props.key] ? Number(statsData?.[props.key]).toFixed(2) : "N/A"}{ statsData[props.key] && props.extention}</span>
      </div>
    );
  };

  let stats = [
    { title: "", value: 0, name: "P90 Blurriness",extention: '', key: 'blurriness' },
    { title: "", value: 0, name: "P90 Blockiness" ,extention: '', key: 'blockiness'},
    { title: "", value: 0, name: "P90 Flatiness",extention: '', key: 'flatness' },
    { title: "", value: 0, name: "P90 PSNR",extention: '', key: 'psnr' },
    { title: "", value: 0, name: "Multiple face Detection",extention: '%', key: 'multiple_faces_percentage' },
    { title: "", value: 0, name: "Average Resolution",extention: 'p', key: 'average_resolution' },
    { title: "", value: 0, name: "Average Bit Rate",extention: 'Mbps', key: 'average_bit_rate' },
    { title: "", value: 0, name: "Average Frame Rate",extention: 'fps', key: 'average_frame_rate' },
  ];
  return (
    <div className="m1 mt2 flex-clmn">
      <div className="flex-row">
        {card({ title: "", value: 0, name: "Total Completed Calls", key: 'total_completed_calls' })}
        <div className="flex-clmn font-size">
          <span className="font-bold">Quality Score</span>
          <span></span>
        </div>
      </div>
      <div className="grid-container">
        {stats.map((item) => {
          return (
            <div className="grid-item" key={item.name}>
              {card(item)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
