import React from 'react'

const Login = () => {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label"><b>USERNAME</b></label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 placeholder-wave">
                            <button className="btn btn-primary">LOGIN</button>
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