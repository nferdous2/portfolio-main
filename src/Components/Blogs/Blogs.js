import React from 'react';
import { Link } from 'react-router-dom';
import blog from '../../image/blog.png'
const Blogs = () => {
    return (
        <div>
            <h3 className="heading mt-5 mb-3"><span className="title">Blogs</span></h3>

            <div className="row row-cols-1 row-cols-md-3 g-4 mt-3 mb-5 p-3">
                <div className="col">
                    <div className="card h-100">
                        <div className="blog-img" data-aos="fade-up-left"

                            data-aos-duration="500">
                            <img src={blog} className="card-img-top w-50" alt="..." />

                        </div>
                        <div className="card-body ">
                            <h5 className="card-title"><span className="title">Js Blogs</span></h5>
                            <Link to="/blogs">
                                <a target="blank" type="button" class="btn btn-outline-danger p-2">Read Blog</a>

                            </Link>                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">

                        <div className="blog-img" data-aos="fade-up-left"

                            data-aos-duration="500">
                            <img src={blog} className="card-img-top w-50" alt="..." />

                        </div>                        <div className="card-body">
                            <h5 className="card-title"><span className="title">Blogs</span></h5>
                            <Link to="/blogs">
                                <a target="blank" type="button" class="btn btn-outline-danger p-2">Read Blog</a>

                            </Link>                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="blog-img" data-aos="fade-up-left"

                            data-aos-duration="500">
                            <img src={blog} className="card-img-top w-50" alt="..." />

                        </div>
                        <div className="card-body">
                            <h5 className="card-title"><span className="title">Server Site Blogs</span></h5>
                            <Link to="/blogs">
                                <a target="blank" type="button" class="btn btn-outline-danger p-2">Read Blog</a>

                            </Link>                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;