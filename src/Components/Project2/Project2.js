import React from 'react';
import { Link } from 'react-router-dom';
import p2a from '../../image/p2a.PNG'
import p2b from '../../image/p2b.PNG'
import p2c from '../../image/p2c.PNG'
import p2d from '../../image/p2d.PNG'
import './Projects2.css'
const Project2 = () => {
    return (
        <div>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card card-images" data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <img src={p2a} class="card-img-top" alt="..." />

                    </div>
                </div>
                <div class="col">
                    <div class="card card-images" data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <img src={p2b} class="card-img-top" alt="..." />

                    </div>
                </div>
                <div class="col">
                    <div class="card card-images" data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <img src={p2c} class="card-img-top" alt="..." />

                    </div>
                </div>
                <div class="col">
                    <div class="card card-images" data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <img src={p2d} class="card-img-top" alt="..." />

                    </div>
                </div>
            </div>
            <div className="card-body">
                <h5 className="card-title">Project Name : Plan Your Tour</h5>
                <p className="card-text">
                    <h2 className="colorname">About Project</h2>
                    <ul>
                        <li>Here You can see diffrent places for tour.</li>
                        <li>You can book any service ,after giving some information.We will provide you after you have come.</li>
                        <li>you can see your bookings in my bookings option.
                            Without log in You can't book any service</li>
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

export default Project2;