import React from 'react';
import './About.css'
// import { Card } from 'react-bootstrap';
import about from '../../image/about.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const About = () => {
    return (
        <div id="about">
            <div class="card p-2 mb-5">
                <div class="row card-detils ">
                    <div class="col-md-4" data-aos="fade-up"

                        data-aos-duration="1500" >
                        <img src={about} class="img-fluid about-img" />
                    </div>
                    <div class="col-md-6 col-sm-12" data-aos="fade-up"
                        data-aos-duration="1500">
                        <div className="about-card ">
                            <h4>
                                Noorjahan Ferdous
                            </h4>
                            <p>I'm a Frontend Developer.</p>
                            <p>Phone: 01770205344</p>
                            <p>Email: noorjahanferdous029@gmail.com</p>
                            <p>Address: Raynogor,Mitali,Sylhet,Bangladesh</p>
                            <a href="https://github.com/nferdous2" target="blank" className="icons p-2"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
                            <a href="https://www.linkedin.com/in/noorjahan-ferdous-945391227/" target="blank" className="icons"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                            </a>

                        </div>
                    </div>
                    <div class="col-md-6">
                        <div className="abouts mb-3">
                            <h2 className="heading m-3">
                                ABOUT <span>ME</span>
                            </h2>
                            <p>Hello I'm Noorjahan Ferdous and I'm a frontend Developer.I love Web development and and i have acquired skills and knowledge to make projetcs successfull.</p>
                            <a href="https://drive.google.com/file/d/1a8iKAYbMd0-PA6CWvFyKxGCam3E7tegM/view?usp=sharing" target="blank" type="button" class="btn btn-outline-danger mb-3">Download Resume</a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;