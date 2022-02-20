import React from 'react';
import { Link } from 'react-router-dom';
import pb1 from '../../image/pb1.png';
import pb2 from '../../image/pb2.png';
import pb3 from '../../image/pb3.png';
import pb4 from '../../image/pb4.png';
import pb5 from '../../image/pb5.png';
import pb6 from '../../image/pb6.png';

const Project2 = () => {
    return (
        <div class="row m-auto">
            <h5><span className="card-title">Project name: </span> Decore'n Craft</h5>

            <div class="col-lg-4 col-md-12 mb-4 mb-lg-0" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000">
                <img
                    src={pb1}
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Boat on Calm Water"
                />

                <img
                    src={pb2}
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Wintry Mountain Landscape"
                />
            </div>

            <div class="col-lg-3 mb-4 mb-lg-0" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">
                <img
                    src={pb3}
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Mountains in the Clouds"
                />

                <img
                    src={pb4}
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Boat on Calm Water"
                />

            </div>
            <div class="col-lg-4 mb-4 mb-lg-0" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="2000">
                <img
                    src={pb5}
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Waves at Sea"
                />

                <img
                    src={pb6}
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Yosemite National Park"
                />
            </div>
            <div className="card-body">
                <h5><span className="card-title">Project name: </span> Decore'n Craft</h5>
                <p className="card-text">
                    <h2 className="colorname">Project Feature</h2>
                    <ul>
                        <li>Customer can create account Using Email& Pass</li>
                        <li>In explore section user can see all the products.</li>
                        <li>In Dashboard user can show his/her order and  also able to delete
                        </li>
                        <li>User can also add product,and can give his/her review.</li>
                    </ul>

                </p>
                <Link to="/">
                    <a target="blank" type="button" class="btn btn-outline-danger p-2">Back</a>
                </Link>


                <a href="https://github.com/nferdous2/Handicrafts-web-server" target="blank" type="button" class="btn btn-outline-danger p-2 m-2">Server Site Link</a>
                <a href="https://github.com/nferdous2/Handicrafts-web-client" target="blank" type="button" class="btn btn-outline-danger p-2 m-2">Client Site  Link</a>
                <a href="https://handicrafts-a749a.web.app/" target="blank" type="button" class="btn btn-outline-danger p-2 m-2">Live Site</a>

            </div>
        </div>
    );
};

export default Project2;