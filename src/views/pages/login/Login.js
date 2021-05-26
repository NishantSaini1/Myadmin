import React,  {useState}from 'react'
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
import firebase from "firebase";
import CIcon from '@coreui/icons-react'
import fire from "../database/firebase";
function Login (){
  // const fieldvalue={
  //   email: "",
  //   password: "",

  // }
  // const [values,setValues] = useState(fieldvalue);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) =>{
    setEmail(e.target.value);
    setPassword(e.target.value);
  };
  const Mylogin = (e) =>{

    const result = fire.database().ref("user");
    const data = {
      email,
      password,
    };
    result.push(data);
  };
  
    // e.preventDefault()


   
    // fire.database().ref().child('contact').push(values.email,values.password,err =>{
    //   if (err)
    //   console.log(err)
  
    // })
   
  
 
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={handleChange}>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder="Username" autoComplete="off" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder="Password" autoComplete="off" />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton type="submit" onClick={Mylogin} color="primary" className="px-4">Login</CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">Forgot password?</CButton>
                      </CCol>
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

export default Login