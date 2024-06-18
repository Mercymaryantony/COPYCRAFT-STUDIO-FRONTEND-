import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const[data,setdata]=useState({
        "name":"",
        "password":""
    })
    const inputhandler = (event)=>{
            setdata({...data,[event.target.name]:event.target.value})
    }
    const  readValue = ()=>{
        axios.post("",data).then(
            (response)=>{
                if(response.data.status =="success")
                    alert("LOGGED IN")
                else
                    console.log("ATTEMPT FAILED")
                
            }
        ).catch(
            (error)=>{
                console.log(error.message)
                alert(error.message)
            }
        ).finally()
    } 
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label"><b>USERNAME</b></label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputhandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label"><b>PASSWORD</b></label>
                            <input type="password" name="password" value={data.password} onChange={inputhandler} id="" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 placeholder-wave">
                            <button className="btn btn-primary" onClick={readValue}>LOGIN</button>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 placeholder-wave">
                            <p>CLICK HERE TO CREATE A NEW ACCOUNT &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to='/signup'><button className="btn btn-success">SIGNUP</button></Link> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login