import React from 'react';
import './Contact.css'
const Contact = () => {

    return (
        <div id="contact" className="p-4">
            <div class="mb-4 mt-3 contact-sec" data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <h2 class="h1-responsive font-weight-bold text-center my-4 colorname mt-2 heading">Contact Me</h2>
                <div class="row p-2">
                    <div class="col-md-9 mb-md-0 mb-5">
                        <form id="contact-form" target="_blank" action="https://formsubmit.co/noorjahanferdous029@gmail.com" method="POST">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <input type="text" name="name" class="form-control" placeholder="Full Name" required />
                                        <label for="name" class="">Your name</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <input type="email" name="email" class="form-control" placeholder="Your Email" required />
                                        <label for="email" class="">Enter email</label>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12">
                                    <div class="md-form">
                                        <textarea placeholder="Your Message" class="form-control" name="message" rows="10" required></textarea>
                                        <label for="message">Your message</label>
                                    </div>
                                </div>
                            </div>
                            <div class="text-center text-md-left mt-3">
                                <button type="submit" class="btn btn-outline-danger">Submit Form</button>
                            </div>
                        </form>

                    </div>

                    <div class="col-md-3 text-center ">
                        <ul class="list-unstyled mb-0">
                            <li><img class="icon" src="https://img.icons8.com/bubbles/100/000000/map-marker.png" /><h5>Address</h5>
                                <p>Tb Gate,Sylhet, Bangladesh</p>
                            </li>

                            <li >
                                <img class="icon" src="https://img.icons8.com/bubbles/100/000000/phone.png" /><h5>Phone</h5>
                                <p>01770205344</p>
                            </li>

                            <li><img class="icon" src="https://img.icons8.com/bubbles/100/000000/new-post.png" /><h5>Email</h5>
                                <p>noorjahanferdous029@gmail.com</p>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Contact;