import React from 'react';
import './Project.css'
import project1 from '../../image/p2.PNG'
import project2 from '../../image/p1.PNG'
import project3 from '../../image/Tour.PNG'
import { Link } from 'react-router-dom';
const Projects = () => {
    return (
        <div id="projects">
            <h1 className="text-white mb-5 mt-5">Port<span className="heading">folio</span></h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 p-3 mb-5">
                <div className="col p-3">
                    <div className="card h-100" >
                        <div data-aos="zoom-in" data-aos-duration="1500"> <img src={project1} className="card-img-top" alt="..." /></div>

                        <div className="card-body">
                            <h5 className="card-title"><span className="title">Project name: </span> <span className="titletwo">NF Jewellery</span></h5>
                            <p className="card-text">
                                <Link to="/project1">
                                    <a target="blank" type="button" class="btn btn-outline-danger p-2">More</a>

                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col p-3">
                    <div className="card h-100">
                        <div data-aos="zoom-in" data-aos-duration="1500">
                            <img src={project2} className="card-img-top" alt="..." />
                        </div>

                        <div className="card-body">
                            <h5 className="card-title"><span className="title">Project Name:</span> <span className="titletwo"> Decore'n Craft</span></h5>
                            <p className="card-text">
                                <Link to="/project2">
                                    <a target="blank" type="button" class="btn btn-outline-danger p-2">More</a>

                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col p-3">
                    <div className="card h-100 ">
                        <div data-aos="zoom-in" data-aos-duration="1500">
                            <img src={project3} className="card-img-top" alt="..." />
                        </div>

                        <div className="card-body">
                            <h5 className="card-title"><span className="title">Project Name:</span> <span className="titletwo"> Plan Your TOur</span></h5>

                            <p className="card-text">
                                <Link to="/project3">
                                    <a target="blank" type="button" class="btn btn-outline-danger p-2">More</a>

                                </Link>                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;