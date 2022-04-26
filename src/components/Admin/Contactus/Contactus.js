import React from "react";

const Contactus = () => {
    return (
        <>
            <div className="page-wrapper" style={{ minHeight: '250px' }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="application-detail-heading-area">
                                <h2>Send Enquiry</h2>
                            </div>
                            <div className="contact-detail-main-area">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <form className="contact-form-main-area" action="payment.php" method="POST" id="paymentFrm">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <label>First Name</label>
                                                        <input type="text" className="form-control field" name="holdername" placeholder="Enter First Name" autofocus="" required="" id="name" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <label>Last Name</label>
                                                        <input type="text" className="form-control field" name="holdername" placeholder="Enter Last Name" autofocus="" required="" id="name" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <label>Email ID</label>
                                                        <input type="text" className="form-control field" name="holdername" placeholder="Enter Email ID" autofocus="" required="" id="name" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <label>Contact Number</label>
                                                        <input type="text" className="form-control field" name="holdername" placeholder="Enter Contact Number" autofocus="" required="" id="name" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <label>Subject</label>
                                                        <input type="text" className="form-control field" name="holdername" placeholder="Enter Subject" autofocus="" required="" id="name" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <label>Message</label>
                                                        <textarea className="form-control" placeholder="Enter Message"></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="contact-form-submint-btn-area">
                                                        <a href="#" className="contact-form-submint-btn">Submit</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="application-detail-heading-area">
                                <h2>Contact Details</h2>
                            </div>
                            <div className="contact-detail-text-main-area">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="contact-address-card-area">
                                            <div className="contact-address-map-marker">
                                                <i className="fa fa-phone" aria-hidden="true"></i>
                                            </div>
                                            <div className="contact-address-emial-area">
                                                <h4>Phone Number</h4>
                                                <p>+1 00224626264723</p>
                                            </div>
                                        </div>
                                        <div className="contact-address-card-area">
                                            <div className="contact-address-map-marker">
                                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                            </div>
                                            <div className="contact-address-emial-area">
                                                <h4>Email Us</h4>
                                                <p>companyemialid@gmail.com</p>
                                            </div>
                                        </div>
                                        <div className="contact-address-card-area">
                                            <div className="contact-address-map-marker">
                                                <i className="fas fa-map-marker-alt"></i>
                                            </div>
                                            <div className="contact-address-emial-area">
                                                <h4>Our Address</h4>
                                                <p>Lorem Ipsum is simply dummy text<br />and typesetting industry.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="footer text-center"> 2021 © Ample Admin brought to you by <a
                    href="https://www.wrappixel.com/">wrappixel.com</a>
                </footer>
            </div>
        </>
    );
};

export default Contactus;