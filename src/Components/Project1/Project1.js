import React from 'react';
import { Link } from 'react-router-dom';
import pa1 from '../../image/pa1.png';
import pa2 from '../../image/pa2.png';
import pa3 from '../../image/pa3.png';
import pa4 from '../../image/pa4.png';
import pa5 from '../../image/pa5.png';
import pa6 from '../../image/pa6.png';
import pa7 from '../../image/pa7.png';
import pa8 from '../../image/pa8.png';
import pa9 from '../../image/pa9.png';
import pa10 from '../../image/pa10.png';
import './Project1.css'
const Project1 = () => {
    return (
        <div class="row m-auto">
            <h5><span className="card-title">Project name: </span> NF jewellery</h5>

            <div class="col-lg-4 col-md-12 mb-4 p-4 mb-lg-0" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000">
                <img
                    src={pa1}
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Boat on Calm Water"
                />

                <img
                    src={pa2}
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Wintry Mountain Landscape"
                />
            </div>

            <div class="col-lg-4 mb-4 p-4 mb-lg-0" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">
                <img
                    src={pa3}
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Mountains in the Clouds"
                />

                <img
                    src={pa4}
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Boat on Calm Water"
                />
                <img
                    src={pa5}
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Boat on Calm Water"
                />
                <img
                    src={pa6}
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Boat on Calm Water"
                />
            </div>

            <div class="col-lg-3 mb-4 mb-lg-0 p-2" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="2000">
                <img
                    src={pa7}
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Waves at Sea"
                />

                <img
                    src={pa8}
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Yosemite National Park"
                />   <img
                    src={pa9}
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Waves at Sea"
                />

                <img
                    src={pa10}
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Yosemite National Park"
                />
            </div>
            <div className="card-body">
                <h5><span className="card-title">Project name: </span> NF jewellery</h5>
                <p className="card-text">
                    <h2 className="colorname">Project Feature</h2>
                    <ul>
                        <li>Customer can create account Using Email& Pass</li>
                        <li>In all product section user can see all product of divided into different categories</li>
                        <li>In Dashboard user can show his/her order and also able to track orders
                        </li>
                        <li>User also able to delete an order if he/she want</li>
                        <li>User can also add product,and can give his/her review.</li>
                    </ul>

                </p>
                <Link to="/">
                    <a target="blank" type="button" class="btn btn-outline-danger p-2">Back</a>
                </Link>


                <a href="https://github.com/nferdous2/jewellery-server" target="blank" type="button" class="btn btn-outline-danger p-2 m-2">Server Site Link</a>
                <a href="https://github.com/nferdous2/Jewellery" target="blank" type="button" class="btn btn-outline-danger p-2 m-2">Client Site  Link</a>
                <a href="https://jewellery1-5636e.web.app/" target="blank" type="button" class="btn btn-outline-danger p-2 m-2">Live Site</a>

            </div>
        </div>

    );
};

export default Project1;