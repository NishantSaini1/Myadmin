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
    const storageRef= fire.storage().ref("images")
    const fileRef = storageRef.child(file.name)
    fileRef.put(file).then(() => {
      console.log("uploaded file")
    })

 }  
 const onSubmit = (e) => {
   e.preventDefault()
 }
 
const Downloadfile = (e) => {
  const storage= firebase.storage().ref('images/Screenshot (24).png');
 storage.getDownloadURL().then(function(url) {
  
  const data =  window.open(url,'_blank').focus();
  });
 
  // var gsReference = storage.refFromURL('https://react-login-2003a.appspot.com/Screenshot (29).png');
  
   //const  httpsReference = storage.refFromURL('https://firebasestorage.googleapis.com/v0/b/react-login-2003a.appspot.com/o/Screenshot (29).png');
  //  const httpsReference = storage.refFromURL('url_ul').getDownloadURL().then(function(url) {
  //   const test = url;
  //   alert(url);
  //   document.querySelector('img').src = test;
  // }).catch(function(error) {});
// console.log(pathReference);
} 
  
  return (
    <div style={{ width: 256 }}>
     
     <form onSubmit={onSubmit}>
<input type="file" onChange={onfileChange}/>
<button >Submit</button>
<button onClick={Downloadfile} >download</button>
     </form>

    </div>
  );
}
export default Storagefile
