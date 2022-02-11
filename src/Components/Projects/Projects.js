import React from 'react';
import './Project.css'
import health from '../../image/health.PNG';
import tour from '../../image/Tour.PNG';
import honda from '../../image/honda.PNG'
import { Link } from 'react-router-dom';
const Projects = () => {
    return (
        <div id="projects">
            <h1 className="section-title mb-5 mt-5">Port<span className="heading">folio</span></h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 p-3 mb-5">
                <div className="col">
                    <div className="card h-100 cardstyle" >
                        <div data-aos="zoom-in" data-aos-duration="1500"> <img src={health} className="card-img-top" alt="..." /></div>

                        <div className="card-body">
                            <h5 className="card-title"><span className="title">Project name: </span> <span className="titletwo"> H&Care Hospital</span></h5>
                            <p className="card-text">
                                <Link to="/project1">
                                    <a target="blank" type="button" class="btn btn-outline-danger p-2">More</a>

                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 cardstyle">
                        <div data-aos="zoom-in" data-aos-duration="1500">
                            <img src={tour} className="card-img-top" alt="..." />
                        </div>

                        <div className="card-body">
                            <h5 className="card-title"><span className="title">Project Name:</span> <span className="titletwo"> Plan Your Tour</span></h5>
                            <p className="card-text">
                                <Link to="/project2">
                                    <a target="blank" type="button" class="btn btn-outline-danger p-2">More</a>

                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 cardstyle">
                        <div data-aos="zoom-in" data-aos-duration="1500">
                            <img src={honda} className="card-img-top" alt="..." />
                        </div>

                        <div className="card-body">
                            <h5 className="card-title"><span className="title">Project Name:</span> <span className="titletwo"> Honda CBR</span></h5>

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