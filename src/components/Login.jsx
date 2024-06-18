import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {
    const [data,setdata]=useState({
        "name": ""
    })
    const inputHandler = (event)=>{
        setdata({...data,[event.target.name]:event.target.value})
    }
    const readValue = ()=>{
        axios.post("http://localhost:8080/login",data).then(
            (response)=>{
                if(response.data.status=="success")
                    alert("logged in")
                else
                alert("Failed")
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
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 placeholder-wave">
                            <button className="btn btn-primary" onClick={readValue}>LOGIN</button>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 placeholder-wave">
                            <p>CLICK HERE TO CREATE A NEW ACCOUNT &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className="btn btn-success">SIGNUP</button></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login