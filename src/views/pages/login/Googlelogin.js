import React,  {useState , useEffect}from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react';
import firebase from "firebase";
import fire from "../database/firebase";
import { checkPropTypes } from 'prop-types';
function Googlelogin (props){
    
const SignIn =()=> {
    const [user, setUser] = useState("");
    const userState=() => {
        const userdata = localStorage.getItem("user");
        const userobject = userdata !== null ? JSON.parse(userdata) : null;
        setUser(userobject);
    }
   useEffect(() => {
       userState();
   },[]);
   
    const provider = new firebase.auth.GoogleAuthProvider();
    fire.auth().signInWithPopup(provider).then((result)  => {
       const token = result.credential.accessToken;
       const user= result.user;
       const data= {
           email : user.email,
           username :user.displayName,
       }
       localStorage.setItem("user", JSON.stringify(data));
       props.signin(data);
    }).catch((error) =>{
        const email= error.email;
    });
}

    
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
    <CContainer>
      <CRow className="justify-content-center">
        <CCol md="8">
<CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                {/* <p>{user.username}  {user.email}</p> */}
                  <CForm >
                  
                    <p className="text-muted">Login with Google</p>
                  
                    <CRow>
                      <CCol xs="6">
                        <CButton type="submit" onClick={SignIn} color="primary" className="px-4">Login</CButton>
                      </CCol>
                      {/* <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">Forgot password?</CButton>
                      </CCol> */}
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              </CCardGroup>
              </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}
export default Googlelogin