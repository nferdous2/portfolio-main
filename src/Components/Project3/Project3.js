import React from 'react';
import { Link } from 'react-router-dom';
import pa from '../../image/pa.PNG';
import pb from '../../image/pb.PNG';
import pc from '../../image/pc.PNG'
const Project3 = () => {
    return (
        <div>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card card-images" data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <img src={pa} class="card-img-top" alt="..." />

                    </div>
                </div>
                <div class="col">
                    <div class="card card-images" data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500" >
                        <img src={pb} class="card-img-top" alt="..." />

                    </div>
                </div>

                <div class="col">
                    <div class="card card-images" data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500" >
                        <img src={pc} class="card-img-top" alt="..." />

                    </div>
                </div>
            </div>
            <div className="card-body">
                <h5 className="card-title">Project Name : Honda CBR</h5>
                <p className="card-text">
                    <h1 className="colorname">About Project</h1>
                    <ul>
                        <li>Only html bootstrap and css used to make this project</li>
                        <li>Here you will some information about bikes ,Frequenty and Q&Ans part,Review etc.
                        </li>
                        <li>You will also see Youtube review of bikes</li>
                    </ul>
                </p>
                <Link to="/">
                    <a target="blank" type="button" class="btn btn-outline-danger p-2">Back</a>
                </Link>
                <a href="https://github.com/nferdous2/Assignment3" target="blank" type="button" class="btn btn-outline-danger p-2 m-2">Code Link</a>

            </div>
        </div>
    );
};

export default Project3;