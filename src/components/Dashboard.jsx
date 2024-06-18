import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div>
            <div className="container">
                
                <br></br>
                <br></br>
                <br></br>
                <div className="row">
                    <h1><b><center>YOU HAVE SUCCESSFULLY LOGGED IN !!!!!!!!!</center></b></h1>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="row">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <div class="card" >
                                <img src="https://cdn.aarp.net/content/aarpe/en/home/home-family/personal-technology/info-2023/print-from-smartphone/_jcr_content/root/container_main/container_body_main/container_body1/container_body_cf/container_image/articlecontentfragment/cfimage.coreimg.50.932.png/content/dam/aarp/home-and-family/personal-technology/2023/06/1140-print-from-phone.png" class="card-img-top" alt="..." height='250px'></img>
                                    <div class="card-body">
                                        <h5 class="card-title">PRINT</h5>
                                        <p class="card-text">CLICK HERE FOR PRINT OPTION</p>
                                        <Link to="/printing" class="btn btn-primary">PRINT FORM</Link>
                                    </div>
                            </div>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <div class="card" >
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3KWpLMfxYv5JaPVZIiBT1SMtjMMHK_ognTA&s" class="card-img-top" alt="..." height='250px'></img>
                                    <div class="card-body">
                                        <h5 class="card-title">BIND</h5>
                                        <p class="card-text">CLICK HERE FOR BIND OPTION</p>
                                        <Link to="/binding" class="btn btn-primary">BIND FORM</Link>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Dashboard