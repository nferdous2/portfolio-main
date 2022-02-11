import React from 'react';
import { Link } from 'react-router-dom';
import p3a from '../../image/p3a.PNG'
import p3b from '../../image/p3b.PNG'
import p3c from '../../image/p3c.PNG'
import p3d from '../../image/p3d.PNG'
import './Project1.css'
const Project1 = () => {
    return (
        <div>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card card-images" data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <img src={p3a} class="card-img-top" alt="..." />

                    </div>
                </div>
                <div class="col">
                    <div class="card card-images" data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <img src={p3b} class="card-img-top" alt="..." />

                    </div>
                </div>
                <div class="col">
                    <div class="card card-images" data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <img src={p3c} class="card-img-top" alt="..." />

                    </div>
                </div>
                <div class="col">
                    <div class="card card-images" data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <img src={p3d} class="card-img-top" alt="..." />

                    </div>
                </div>
            </div>

            <div className="card-body">
                <h5 className="card-title">Project name: H&Care Hospital</h5>
                <p className="card-text">
                    <h2 className="colorname">About project</h2>
                    <ul>
                        <li>We use bootstrap and plain css for making this porject responsive</li>
                        <li>We use Firebase for log in authentication of users</li>
                        <li>And people can take the services acording to their need.All dr information and details of services are given here</li>
                    </ul>
                </p>
                <Link to="/">
                    <a target="blank" type="button" class="btn btn-outline-danger p-2">Back</a>
                </Link>


                <a href="https://github.com/nferdous2/health-care-web" target="blank" type="button" class="btn btn-outline-danger p-2 m-2">Code Link</a>
                <a href="https://health-web-b0254.firebaseapp.com/" target="blank" type="button" class="btn btn-outline-danger p-2 m-2">Live Site</a>
            </div>
        </div>
    );
};

export default Project1;