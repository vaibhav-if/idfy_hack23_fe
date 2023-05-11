import axios from "axios";
import React from "react";

const UPLOAD_VIDEO_URL = "http://127.0.0.1:5000/process_video";

export default function VideoInput(props) {
  const { width, height } = props;

  const inputRef = React.useRef();

  const [source, setSource] = React.useState();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    let data = new FormData()
    data.append("video",file)
    console.log("file",file)
    let options = {
        url: UPLOAD_VIDEO_URL,
        method: "POST",
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        data
    }
    axios.request(options).then((data)=>{
        console.log(data)
    }).catch((err)=>{
        console.log(err)
    })
    const url = URL.createObjectURL(file);
    setSource(url);
    console.log(url)
  };

  return (
    <div  className="align-center mt10 mt50">
        <div>
            <h3>Upload Video</h3>
        </div>
      <div className="VideoInput">
        <input
          ref={inputRef}
          className="VideoInput_input"
          multiple={false}
          type="file"
          onChange={handleFileChange}
          accept=".mov,.mp4,.webm"
        />
      </div>
    </div>
  );
}
