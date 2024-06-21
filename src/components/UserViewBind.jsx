import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UserViewBind = () => {
    const [data, changedata] = useState([])
    const fetchdata = () => {
        axios.post("http://localhost:8080/studentviewbind", data).then(
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


    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">STUDENT NAME</th>
                                    <th scope="col">CLASS</th>
                                    <th scope="col">TYPE</th>
                                    <th scope="col">BINDING</th>
                                    <th scope="col">FRONT COLOUR</th>
                                    <th scope="col">NUMBER</th>
                                    <th scope="col">CATEGORY</th>
                                    <th scope="col">DATE</th>
                                    <th scope="col">TIME</th>
                                    <th scope="col">FILE UPLOADED</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(
                                    (value, index) => {
                                        return <tr>
                                            <th scope="row">{value.name}</th>
                                            <td>{value.class}</td>
                                            <td>{value.type}</td>
                                            <td>{value.binding}</td>
                                            <td>{value.frontcolor}</td>
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

export default UserViewBind