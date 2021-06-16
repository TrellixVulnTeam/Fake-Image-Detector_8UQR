import React, { useState } from "react";
import FileUpload from "./components/file-upload/file-upload.component";
import Navbar from './components/navigation/navbar/navbar';
import 'antd/dist/antd.css'; 
import { Button, message } from "antd";

function App() {
  const [newUserInfo, setNewUserInfo] = useState([]);

  const updateUploadedFiles = (files) =>
  {
    console.log(files);
    // setNewUserInfo({ ...newUserInfo, profileImages: files });
    setNewUserInfo(prevArray => [...prevArray, files])
    // setTheArray(prevArray => [...prevArray, newValue])

  }
 
  const handleSubmit = (event) => {
    event.preventDefault();
    //logic to create new user...
    console.log(event);
    console.log(newUserInfo);
  };


  const compareImages = ()=>{

    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => {
    
    message.success("Images are a Match")
    console.log(json)
  }
  
  )
    
    console.log(newUserInfo)
  //   setTimeout(function () {
  //     message.success("Files uploaded succesfully")
  // }, 5000);


  }

  return (
    <div>
      <Navbar />
      <div style={{display:'flex', 'margin-top':'5%'}}>
      <div style={{width:'50%', margin: '10px'}}>

      <FileUpload
          accept=".jpg,.png,.jpeg"
          label="Upload First Image"
          multiple
          updateFilesCb={updateUploadedFiles}
        />
      </div>


    <div style={{width:'50%', margin: '10px'}}>
    <FileUpload
          accept=".jpg,.png,.jpeg"
          label="Upload Second Image"
          multiple
          updateFilesCb={updateUploadedFiles}
        />
    </div>

      </div>
      <form onSubmit={handleSubmit}>
      <div style = {{textAlign:"center"}}>

      <Button  type="primary" onClick={compareImages}>
              Upload and compare images
            </Button>
        
      </div>

      </form>
    </div>
  );
}

export default App;
