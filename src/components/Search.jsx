import axios from 'axios'

import React, { useState } from 'react'

const Search = () => {
    const [data, setData] = useState(
        {
            "name": ""
        }
    )
    const [result, setResult] = useState([])
    const inputhandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })


    }
    const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8080/studentPrintSearch",data).then(
            (response) =>{
                console.log(response.data)
                setResult(response.data)
            }        ).catch().finally()
    }
  return (
    
       
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3"> 
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control"name='name' value={data.name} onChange={inputhandler}/>
                        </div>
                        <center>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button class="btn btn-success" onClick={ readValue }>SEARCH</button>
                        </div></center>
                    </div>
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Class</th>
                                            <th scope="col">Type</th>
                                            <th scope="col">Number</th>
                                            <th scope="col">Category</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Time</th>
                                            <th scope="col">Image</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {result.map(
                                            (value,index)=>{
                                                return <tr>
                                                <th scope="row">{value.name}</th>
                                                <td>{value.class}</td>
                                                <td>{value.type}</td>
                                                <td>{value.number}</td>
                                                <td>{value.category}</td>
                                                <td>{value.date}</td>
                                                <td>{value.time}</td>
                                                <td>{value.image}</td>
                                                
                                            </tr>
                                            }
                                        )}

                                    </tbody>
                                </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search