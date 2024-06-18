import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    const [data, setData] = useState(
        {
            "name": "",
            "course": "",
            "batch": "",
            "year": "",
            "email": "",
            "phnno": "",
            "password": "",
            "cpassword": "",
        }
    )
    const inputhandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(data)
        axios.post("", data).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("Account created successfully")
                } else {
                    alert("Failed")
                }
            }
        )
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <center><h1><b>Enter Your Details</b></h1></center><br />
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Course</label>
                                <select name="" id="" className="form-control">
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
                                <select name="" id="" className="form-control">
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                </select>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Year</label>
                                <select name="" id="" className="form-control">
                                    <option value="">1st</option>
                                    <option value="">2nd</option>
                                    <option value="">3rd</option>
                                    <option value="">4th</option>
                                </select>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">E-mail Id</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Phone Number</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Password</label>
                                <input type="password" name="" id="" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Confrim Password</label>
                                <input type="password" name="" id="" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-success">Register</button>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Back to<Link to='/login'>Login</Link></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup