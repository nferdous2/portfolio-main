import React from 'react';
import { Link } from 'react-router-dom';
import pc1 from '../../image/pc1.png';
import pc2 from '../../image/pc2.png';
import pc3 from '../../image/pc3.png';
import pc4 from '../../image/pc4.png';
import pc5 from '../../image/pc5.png';

const Project3 = () => {
    return (
        <div class="row m-auto">
            <h4> <span className="card-title  ">Project name: </span> Plan Your Tour</h4>

            <div class="col-lg-4 col-md-12 mb-4 p-4 mb-lg-0" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000">
                <img
                    src={pc1}
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Boat on Calm Water"
                />
            </div>

            <div class="col-lg-4 mb-4 p-4 mb-lg-0" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">

                <img
                    src={pc2}
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Wintry Mountain Landscape"
                />
                <img
                    src={pc3}
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Mountains in the Clouds"
                />



            </div>

            <div class="col-lg-4 mb-4 mb-lg-0 p-3" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="2000">
                <img
                    src={pc4}
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Boat on Calm Water"
                />
                <img
                    src={pc5}
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Waves at Sea"
                />

            </div>
            <div className="card-body">
                <h5> <span className="card-title">Project name: </span> Plan Your Tour</h5>
                <p className="card-text">
                    <h2 className="colorname">About Project</h2>
                    <ul>
                        <li>Here You can see diffrent options of services..</li>
                        <li>User can book any service ,after giving some information.We will provide you after you have come.</li>
                        <li>User can see his/her bookings in my bookings option.</li>
                        <li>Google log in System</li>
                    </ul>
                </p>
                <Link to="/">
                    <a target="blank" type="button" class="btn btn-outline-danger p-2">Back</a>
                </Link>

                <a href="https://github.com/nferdous2/Tour-web-client" target="blank" type="button" class="btn btn-outline-danger p-2 m-2">Client Link</a>
                <a href="https://github.com/nferdous2/Tour-web-server-site" target="blank" type="button" class="btn btn-outline-danger p-2 m-2">Server Link</a>
                <a href="https://tour-f355b.firebaseapp.com/" target="blank" type="button" class="btn btn-outline-danger p-2 m-2">Live Site</a>
            </div>
        </div>

    );
};

export default Project3;