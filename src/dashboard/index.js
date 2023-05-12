import React, { useEffect, useState } from "react";
import axios from "axios";
import { PieChart, Pie, Cell , Tooltip} from "recharts";

const VIDEO_STATS_URL = "http://127.0.0.1:5000/video_stats";
const Dashboard = () => {
  const [statsData, setStatsData] = useState({});
  const chartData = [
    { name: "1", value: 300, color: "red", code: "#e50c3b" },
    { name: "2", value: 50, color: "blue", code: "#36A2EB" },
    { name: "3", value: 100, color: "green", code: "#41db62" },
    { name: "4", value: 100, color: "pink",code: "#df2ab8" },
    { name: "5", value: 100, color: "yellow",code: "#FFCE56" },
  ];
  const chartDataRes = [
    { name: "240", value: 100, color: "green", code: "#41db62" },
    { name: "360", value: 300, color: "red", code: "#e50c3b" },
    { name: "480", value: 100, color: "pink",code: "#df2ab8" },
    { name: "720", value: 100, color: "yellow",code: "#FFCE56" },
    { name: "1080", value: 50, color: "blue", code: "#36A2EB" },
    
  ];
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
        setStatsData(data.data);
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
        <span>
          {statsData[props.key]
            ? Number(statsData?.[props.key]).toFixed(2)
            : "N/A"}
          {statsData[props.key] && props.extention}
        </span>
      </div>
    );
  };

  const  colors = ["redish","blue","yellow"]

  let stats = [
    {
      title: "",
      value: 0,
      name: "Total Completed Calls",
      key: "total_completed_calls",
    },
    {
      title: "",
      value: 0,
      name: "P90 Blurriness",
      extention: "",
      key: "blurriness",
    },
    {
      title: "",
      value: 0,
      name: "P90 Blockiness",
      extention: "",
      key: "blockiness",
    },
    {
      title: "",
      value: 0,
      name: "P90 Flatiness",
      extention: "",
      key: "flatness",
    },
    { title: "", value: 0, name: "P90 PSNR", extention: "", key: "psnr" },
    {
      title: "",
      value: 0,
      name: "Multiple face Detection",
      extention: "%",
      key: "multiple_faces_percentage",
    },
    {
      title: "",
      value: 0,
      name: "Average Bit Rate",
      extention: "Mbps",
      key: "average_bit_rate",
    },
    {
      title: "",
      value: 0,
      name: "Average Frame Rate",
      extention: "fps",
      key: "average_frame_rate",
    },
  ];
  return (
    <div className="m1 mt2 container">

      <div className="grid-container">
        {stats.map((item) => {
          return (
            <div className="grid-item" key={item.name}>
              {card(item)}
            </div>
          );
        })}
      </div>

      <div className="mt2">
        <div className="flex-row-center font-size">
          <div>
            <span className="font-bold">Video Quality Score</span>
            <span>
              <PieChart width={300} height={300}>
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  className="cursor-pointer"
                >
                  {chartData.map((item, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={item.code}
                    />
                  ))}
                </Pie>
                <Tooltip/>
              </PieChart>
            </span>
          </div>
          <div className="gap10">
            <span>Score</span>
            {chartData.map((item,idx)=>{
              return(
                <div key={idx} className="flex-row-center mt10">
                  <span className={`rectangle-${item.color}`}></span>
                  <span>{item.name}</span>
                </div>
              )
            })}
          </div>
        </div>
        <div className="flex-row-center font-size">
          <div>
            <span className="font-bold">Overall Call Resolutions</span>
            <span>
              <PieChart width={300} height={300}>
                <Pie
                  data={chartDataRes}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  className="cursor-pointer"
                >
                  {chartDataRes.map((item, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={item.code}
                    />
                  ))}
                </Pie>
                <Tooltip/>
              </PieChart>
            </span>
          </div>
          <div className="gap10">
            <span>Resolutions</span>
            {chartDataRes.map((item,idx)=>{
              return(
                <div key={idx} className="flex-row-center mt10">
                  <span className={`rectangle-${item.color}`}></span>
                  <span>{item.name}p</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
