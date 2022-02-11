import React from 'react';
import blog from '../../image/blog.png'
import './Blog.css'
const Blog = () => {
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
                            <p className="blog-text"> <a href="https://docs.google.com/document/d/1sgpAyohzr82vj06W3t4hKLxjMjC_rbJ4brxZBmM2YnQ/edit?usp=sharing">Click here to read blog</a></p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">

                        <div className="blog-img" data-aos="fade-up-left"

                            data-aos-duration="500">
                            <img src={blog} className="card-img-top w-50" alt="..." />

                        </div>                        <div className="card-body">
                            <h5 className="card-title"><span className="title">Blogs</span></h5>
                            <p className="blog-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque at voluptates ipsa ipsum beatae recusandae iste! Quod, omnis unde nemo, beatae dolorum, aperiam aliquid recusandae illo adipisci maxime quae voluptate!</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="blog-img" data-aos="fade-up-left"

                            data-aos-duration="500">
                            <img src={blog} className="card-img-top w-50" alt="..." />

                        </div>
                        <div className="card-body">
                            <h5 className="card-title"><span className="title">Blogs</span></h5>
                            <p className="blog-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ad sapiente nostrum qui provident perspiciatis eum laborum! Commodi officia esse consequatur, fuga quibusdam nisi dolorem nihil, non suscipit, rerum neque.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;