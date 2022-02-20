import React from 'react';
import blog from '../../image/blog.png'
import code from '../../image/codeImg.PNG';
import code1 from '../../image/code.PNG';
import './Blog.css'
const Blog = () => {
    return (
        <div>
            <h3 className="heading mt-5 mb-3"><span className="title">Blogs</span></h3>

            <div className="row row-cols-1 row-cols-md-3 g-4 mt-3 mb-5 p-3">
                <div className="col">
                    <div className="card blog-cards h-50">
                        <div className="blog-img" data-aos="fade-up-left"

                            data-aos-duration="500">
                            <img src={blog} className="card-img-top w-50" alt="..." />

                        </div>
                        <div className="card-body ">
                            <h5 className="card-title"><span className="title">Js Blogs</span></h5>
                            <p className="blog-text">                                                Server site Blog

                                When I started to work with server sites,it was difficult for me to understand how to work with serversite but now I finally understood how to work with Node, Express, and MongoDB.
                                Let’s Start
                                CRUD operations: CRUD is an acronym for Create,Read,Update and Delete.
                                To work with server sites we need some operations POST,PUT,GET,DELETE.
                                Let's know more about those operations :
                                POST - Make something - When we want to post data from client site to server site.we use POST method.
                                GET - Get something -  We use it when we want to get data from the  Server site and show it to the Client  site,we use the GET method.
                                PUT - Change something -PUT method is used to update resource available on the server site.We can use PUT method instead of POST method.
                                DELETE - Remove something -If we want to remove data from both server and client site then we use DELETE method.
                                <img src={code1} className="w-50" alt="" /> <br />

                                2.JWT- Full form of JWT is Json Web Token.It is used at Internet scale.JWTs are used as a secure way to authenticate users and share information.In most of the programming languages JSON parsers are common.JSON parsers map directly to objects.XML doesn't have a natural document-to-object mapping. This makes it easier to work with JWT.JWT is a good way of securely transmitting information between parties.JWT consists of three parts separated by dots (.) which are:Header,Payload,Signature.



                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card blog-cards h-50">

                        <div className="blog-img" data-aos="fade-up-left"

                            data-aos-duration="500">
                            <img src={blog} className="card-img-top w-50" alt="..." />

                        </div>
                        <div className="card-body">
                            <h5 className="card-title"><span className="title">Sever Blogs</span></h5>
                            <p className='blog-text'>                                               Server site Blog

                                When I started to work with server sites,it was difficult for me to understand how to work with serversite but now I finally understood how to work with Node, Express, and MongoDB.
                                Let’s Start
                                CRUD operations: CRUD is an acronym for Create,Read,Update and Delete.
                                To work with server sites we need some operations POST,PUT,GET,DELETE.
                                Let's know more about those operations :
                                POST - Make something - When we want to post data from client site to server site.we use POST method.
                                GET - Get something -  We use it when we want to get data from the  Server site and show it to the Client  site,we use the GET method.
                                PUT - Change something -PUT method is used to update resource available on the server site.We can use PUT method instead of POST method.
                                DELETE - Remove something -If we want to remove data from both server and client site then we use DELETE method.
                                <img src={code} className="w-50" alt="" /> <br />
                                2.JWT- Full form of JWT is Json Web Token.It is used at Internet scale.JWTs are used as a secure way to authenticate users and share information.In most of the programming languages JSON parsers are common.JSON parsers map directly to objects.XML doesn't have a natural document-to-object mapping. This makes it easier to work with JWT.JWT is a good way of securely transmitting information between parties.JWT consists of three parts separated by dots (.) which are:Header,Payload,Signature.



                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card blog-cards h-50">
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