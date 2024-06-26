import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Signup = () => {
    const [data,setdata]=useState(
        {
            "name":"",
            "course":"",
            "batch":"",
            "year":"",
            "email":"",
            "phone":"",
            "password":"",
            "cpassword":""
        }
    )
    const inputhandler=(event)=>{
        setdata({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
        if (data.password==data.cpassword) {
            axios.post("http://localhost:8080/signup",data).then(
                (response)=>{
                    console.log(response.data)
                    if (response.data.status=="success") {
                        alert("Account created successfully")
                        
                    } else {
                        alert("Failed")
                    }
                }
            )
        } else {
            alert("Incorrect Password")
        }

        
    }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <center><h1><b>Enter Your Details</b></h1></center><br/>
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" placeholder='Enter your name' name='name' value={data.name} onChange={inputhandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Course</label>
                            <select name='course' id="" className="form-control" value={data.course} onChange={inputhandler}>
                                <option value="CS">CS</option>
                                <option value="Civil">Civil</option>
                                <option value="EC">EC</option>
                                <option value="Mech">Mech</option>
                                <option value="Mech">M.Tech</option>
                                <option value="MCA">MCA</option>
                                <option value="MBA">MBA</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Batch</label>
                            <select name="batch" id="" className="form-control" value={data.batch} onChange={inputhandler}>
                                <option value="A">A</option>
                                <option value="B">B</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Year</label>
                            <select name="year" id="" className="form-control" value={data.year} onChange={inputhandler}>
                                <option value="1st">1st</option>
                                <option value="2nd">2nd</option>
                                <option value="3rd">3rd</option>
                                <option value="4th">4th</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">E-mail Id</label>
                            <input type="text" className="form-control" placeholder='Enter your E-mail Id' name='email' value={data.email} onChange={inputhandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Phone Number</label>
                            <input type="text" className="form-control" placeholder='Enter your phone number' name='phone' value={data.phone} onChange={inputhandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="password" name="password" id="" className="form-control" value={data.password} onChange={inputhandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Confrim Password</label>
                            <input type="password" name="cpassword" id="" className="form-control" value={data.cpassword} onChange={inputhandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>Register</button>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label"><b>Back to <Link to='/login'>Login</Link></b></label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup