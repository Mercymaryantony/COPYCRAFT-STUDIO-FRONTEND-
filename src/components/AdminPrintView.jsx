import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navabar from './Navabar'
import NavbarAdmin from './NavbarAdmin'

const AdminPrintView = () => {
    const [data, changedata] = useState([])
    const fetchdata = () => {
        axios.post("http://localhost:8080/studentviewpirnt", data).then(
            (response) => {
                changedata(response.data)
            }
        ).catch(
            (error) => {
                console.log(error.message)
                alert(error.message)
            }
        ).finally()
        console.log(data)
    }
    useEffect(() => { fetchdata() }, [])

    const deleteprint = (id)=>{
        let input ={"_id":id}
        axios.post("http://localhost:8080/deletePrint",input).then(
            (response)=>{
                if(response.data.status == "deleted"){
                    alert("DELETED SUCCESSFULLY")
                }
                else{
                    alert("ERROR")
                }
            }
        ).catch().finally()    }

    return (
        <div>
            <NavbarAdmin/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12">
                        <center><h1><b>PRINTING DETAILS</b></h1></center><br/>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">STUDENT NAME</th>
                                    <th scope="col">CLASS</th>
                                    <th scope="col">TYPE</th>
                                    <th scope="col">NUMBER</th>
                                    <th scope="col">CATEGORY</th>
                                    <th scope="col">DATE</th>
                                    <th scope="col">TIME</th>
                                    <th scope="col">FILE UPLOADED</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(
                                    (value, i) => {
                                        return <tr>
                                            <th scope="row">{value.name}</th>
                                            <td>{value.class}</td>
                                            <td>{value.type}</td>
                                            <td>{value.number}</td>
                                            <td>{value.category}</td>
                                            <td>{value.date}</td>
                                            <td>{value.time}</td>
                                            <td>{value.image}</td>
                                            <td><button className="btn btn-danger" onClick={()=>{deleteprint(value._id)}}>DELETE</button></td>
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

export default AdminPrintView