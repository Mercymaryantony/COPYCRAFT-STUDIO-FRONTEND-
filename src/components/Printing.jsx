import axios from 'axios'
import React, { useState } from 'react'

const Printing = () => {
    const [data, setdata] = useState(
        {
         "name":"",
         "class":"",
         "type":"",
         "number":"",
         "category":"",
         "date":"",
         "time":"",
         "image":""
        }
    )
    const inputHandler=(event)=>{
        setdata({ ...data,[event.target.name]: event.target.value})
      }
      const readValue=()=>{
        console.log(data)
        axios.post(" ",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success")
                 {
                    alert("SUCCESSFULLY ADDED")
                } else {
                    alert("ERROR")
                }
            }
        ).catch()
      }
  return (
    <div>
        <center><h1>PRINTING</h1></center>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">NAME</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">CLASS</label>
                            <input type="text" className="form-control" name='class' value={data.class} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">TYPE </label>
                            <select name="type" id="" className="form-control" value={data.type} onChange={inputHandler}>
                                <option value="COLOR PRINT">COLOR PRINT</option>
                                <option value="BLACK AND WHITE">BLACK AND WHITE</option>
                            </select>
                        </div>
                         <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">NUMBER OF COPIES</label>
                            <input type="text" className="form-control" name='number' value={data.number} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">CATEGORY</label>
                            <select name="category" id="" className="form-control" value={data.category} onChange={inputHandler}>
                                <option value="URGENT">URGENT</option>
                                <option value="NOT URGENT">NOT URGENT</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">DATE</label>
                            <input type="date" name="date" id="" className="form-control" value={data.date} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">TIME</label>
                            <input type="text" className="form-control" name='time' value={data.time} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">IMAGE/PDF</label>
                            <input type="file" name="image" id="" className="form-control" value={data.image} onChange={inputHandler} />
                        </div>
                        <center>
                         <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button class="btn btn-success" onClick={readValue}>ADD</button>
                         </div>
                         </center>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Printing