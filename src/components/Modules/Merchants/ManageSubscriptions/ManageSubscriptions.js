import React from 'react';

const ManageSubscriptions = () => {
    return (
        <>
            <div className="page-wrapper" style={{ minHeight: '250px' }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="application-detail-heading-area">
                                <h2>Subscription</h2>
                                <p>Upgrade your subscription plan and starting talking to more visitors</p>
                            </div>
                            <div className="add-payment-heading-area">
                                <h2>Add Payment Card</h2>
                            </div>
                            <div className="add-card-main-area">
                                <form action="payment.php" method="POST" id="paymentFrm">
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label>Card Holder Name</label>
                                                <input type="text" className="form-control field" name="holdername" placeholder="Card Holder Name" autofocus="" required="" id="name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label>Card Number</label>
                                                <input type="text" className="form-control field" name="holdername" placeholder="Card Number" autofocus="" required="" id="name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label>Date</label>
                                                <input type="text" className="form-control field" name="holdername" placeholder="MM/YY" autofocus="" required="" id="name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label>CVC Number</label>
                                                <input type="text" className="form-control field" name="holdername" placeholder="CVC Number" autofocus="" required="" id="name" />
                                            </div>
                                        </div>
                                        <div className="card-detail-save-cancle-btn-area">
                                            <a href="#" className="card-detail-save-btn">Save</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="subscription-box-main-area">
                                <div className="subscription-price-heading-are">
                                    <h5>Free Plan</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <span>$ 0 / Month</span>
                                </div>
                                <div className="about-subscription-main-area">
                                    <ul>
                                        <li>1 user</li>
                                        <li>Upto 500 Sessions/Month</li>
                                        <li>Upto 1 Apps</li>
                                        <li>Dedicated Support</li>
                                        <li>24/7 Support</li>
                                    </ul>
                                    <div className="plan-start-btn-area">
                                        <a href="#" className="plan-start-btn">Get Started</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="subscription-box-main-area">
                                <div className="subscription-price-heading-are">
                                    <h5>Basic Plans </h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <span>$ 5 / Month</span>
                                </div>
                                <div className="about-subscription-main-area">
                                    <ul>
                                        <li>2 user</li>
                                        <li>Upto 1k Sessions/Month</li>
                                        <li>Upto 5 Apps</li>
                                        <li>Dedicated Support</li>
                                        <li>24/7 Support</li>
                                    </ul>
                                    <div className="plan-start-btn-area">
                                        <a href="#" className="plan-start-btn">Get Started</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="subscription-box-main-area">
                                <div className="subscription-price-heading-are">
                                    <h5>Regular Plans </h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <span>$ 10 / Month</span>
                                </div>
                                <div className="about-subscription-main-area">
                                    <ul>
                                        <li>10 user</li>
                                        <li>Upto 1.5k Sessions/Month</li>
                                        <li>Upto 10 Apps</li>
                                        <li>Dedicated Support</li>
                                        <li>24/7 Support</li>
                                    </ul>
                                    <div className="plan-start-btn-area">
                                        <a href="#" className="plan-start-btn">Get Started</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="subscription-box-main-area">
                                <div className="subscription-price-heading-are">
                                    <h5>Premium Plans </h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <span>$ 15 / Month</span>
                                </div>
                                <div className="about-subscription-main-area">
                                    <ul>
                                        <li>15 user</li>
                                        <li>Upto 2k Sessions/Month</li>
                                        <li>Upto 15 Apps</li>
                                        <li>Dedicated Support</li>
                                        <li>24/7 Support</li>
                                    </ul>
                                    <div className="plan-start-btn-area">
                                        <a href="#" className="plan-start-btn">Get Started</a>
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

export default ManageSubscriptions;