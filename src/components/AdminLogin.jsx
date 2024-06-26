import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {

    const [data, setData] = useState(
        {
            "email": "",
            "password": ""
        }

    )

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })

    }

    const readValue = () => {

        axios.post("http://localhost:8080/adminlogin", data).then(
            (response) => {
                if (response.data.status == "success") {
                    sessionStorage.setItem("token", response.data.token)
                    sessionStorage.setItem("userid", response.data.userid)

                    navigate("/adminprintview")
                }
                else {
                    alert(response.data.status)
                }

            }
        ).catch(
            (error) => {
                console.log(error.message)
                alert(error.message)
            }
        ).finally()
    }


let navigate = useNavigate()



return (
    <div>



        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <label htmlFor="" className="form-label">email</label>
                            <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler} />

                        </div>

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <label htmlFor="" className="form-label">Password</label>
                            <input type="password" className="form-control" name='password' value={data.password} onChange={inputHandler} />

                        </div>


                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValue}>login</button>

                        </div>


                    </div>
                </div>




            </div>


        </div>



    </div >
)
}

export default AdminLogin