import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

// import "./index.css";
import firebase from "firebase";
import fire  from "../database/firebase";
// import 'firebase/firestore';
// import 'firebase/auth';
// import 'firebase/analytics';


function Storagefile() {
  const onfileChange = (e) => {
    const file = e.target.files[0]
    const storageRef= fire.storage().ref()
    const fileRef = storageRef.child(file.name)
    fileRef.put(file).then(() => {
      console.log("uploaded file")
    })

 }  
 const onSubmit = (e) => {
   e.preventDefault()
 }
 
// const Downloadfile = (e) => {
//   const storages= fire.storage().ref()
//   const  httpsReference = storages.refFromURL('gs://react-login-2003a.appspot.com/Screenshot (29).png');
// } 
 
  return (
    <div style={{ width: 256 }}>
     
     <form onSubmit={onSubmit}>
<input type="file" onChange={onfileChange}/>
<button >Submit</button>
     </form>

    </div>
  );
}
export default Storagefile
