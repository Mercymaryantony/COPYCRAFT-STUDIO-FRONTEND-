import React, { useEffect, useState } from 'react'
import Navabar from './Navabar'
import axios from 'axios'

const AdminBindView = () => {
    const[data,changedata]=useState([])
    const fetchdata=()=>
        {
            axios.post("http://localhost:8080/studentviewbind",data).then(
                (response)=>{
                    changedata(response.data)
                }
            ).catch(
                (error)=>{
                    console.log(error.message)
                    alert(error.message)
                }
            ).finally(
                console.log(data)
            )
        }
        useEffect(()=>{fetchdata()},[])

        const deletebind=(id)=>
            {
                let input={"_id":id}
                axios.post("http://localhost:8080/deleteBind",input).then(
                    (response)=>{
                        if (response.data.status=="deleted") {
                            alert("Deleted Successfully")
                            
                        } else {
                            alert("Error")
                        }
                    }
                )
            }
    return (
        <div>
            <Navabar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <h1>
                            <u>
                                <center>Binding Details</center>
                            </u>
                        </h1>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Class</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Binding</th>
                                    <th scope="col">Front Color</th>
                                    <th scope="col">Number</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Time</th>
                                    <th scope="col">Image</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(
                                    (value,i)=>{
                                        return <tr>
                                        <td>{value.name}</td>
                                        <td>{value.class}</td>
                                        <td>{value.type}</td>
                                        <td>{value.binding}</td>
                                        <td>{value.frontcolor}</td>
                                        <td>{value.number}</td>
                                        <td>{value.category}</td>
                                        <td>{value.date}</td>
                                        <td>{value.time}</td>
                                        <td>{value.image}</td>
                                        <td><button className="btn btn-danger" onClick={()=>{deletebind(value._id)}}></button></td>
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

export default AdminBindView