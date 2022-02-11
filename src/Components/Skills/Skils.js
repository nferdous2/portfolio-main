import React from 'react';
import './Skills.css'
const Skils = () => {
    return (

        <div className="col-md-6 mt-5 mt-md-0 skill-sec" data-aos="fade-up"
            data-aos-duration="3000">
            <h2 className="text-center heading"> Skills</h2>
            <div className="skill-item mb-4">
                <h4 className="fs-6">HTML</h4>
                <div className="progress">
                    <div
                        className="progress-barO"
                        role="progressbar"
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                    ></div>
                </div>
            </div>
            <div className="skill-item mb-4">
                <h4 className="fs-6">React</h4>
                <div className="progress">
                    <div
                        className="progress-barS"
                        role="progressbar"
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                    ></div>
                </div>
            </div>

            <div className="skill-item mb-4">
                <h4 className="fs-6">Mongo</h4>
                <div className="progress">
                    <div
                        className="progress-barT"
                        role="progressbar"
                        aria-valuenow="90"
                        defaultValue="30"
                        aria-valuemin="0"
                        aria-valuemax="100"
                    ></div>
                </div>
            </div>
            <div className="skill-item mb-4">
                <h4 className="fs-6">Node</h4>
                <div className="progress">
                    <div
                        className="progress-barF"
                        role="progressbar"
                        aria-valuenow="65"
                        aria-valuemin="0"
                        aria-valuemax="100"
                    ></div>
                </div>
            </div>
            <div className="skill-item mb-4">
                <h4 className="fs-6">JS</h4>
                <div className="progress">
                    <div
                        className="progress-barFT"
                        role="progressbar"
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                    ></div>
                </div>
            </div>
        </div>


    );
};

export default Skils;