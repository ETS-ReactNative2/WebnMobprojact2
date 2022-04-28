import React, { useState } from "react";

const Settings = () => {
    const [type, setType] = useState(1)

    return (
        <>
            <div className="page-wrapper" style={{ minHeight: '250px' }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="application-detail-heading-area">
                                <h2>Settings</h2>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="setting-tab-detail-main-area">
                                <div className="setting-tab-main-area">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button onClick={() => setType(1)} className={(type == 1) ? "nav-link tab-btn  active" : "nav-link tab-btn "} id="manage-profile-tab" data-bs-toggle="tab" data-bs-target="#manage-profile" type="button" role="tab" aria-controls="manage-profile" aria-selected="false"><i className="fa fa-user" aria-hidden="true">
                                            </i>Manage Profile</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button onClick={() => setType(2)} className={(type == 2) ? "nav-link tab-btn  active" : "nav-link tab-btn "} id="change-password-tab" data-bs-toggle="tab" data-bs-target="#change-password" type="button" role="tab" aria-controls="change-password" aria-selected="true"><i className="fa fa-lock" aria-hidden="true"></i>Change Password</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button onClick={() => setType(3)} className={(type == 3) ? "nav-link tab-btn  active" : "nav-link tab-btn "} id="purchase-plan-tab" data-bs-toggle="tab" data-bs-target="#purchase-plan" type="button" role="tab" aria-controls="purchase-plan" aria-selected="false"><i className="fa fa-cart-arrow-down" aria-hidden="true"></i>Purchase Plan</button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tab-content" id="myTabContent">
                                    <div className={(type == 1) ? "tab-pane fade show active" : "tab-pane fade"} id="manage-profile" role="tabpanel" aria-labelledby="manage-profile-tab">
                                        <div className="row">
                                            <div className="col-lg-5">
                                                <div className="setting-tab-heading-area">
                                                    <h2>Personal Info</h2>
                                                </div>
                                                <div className="setting-profile-detail-main-area">
                                                    <div className="user-photo-main-area">
                                                        <div className="user-img-area">
                                                            <img src={process.env.PUBLIC_URL + "/assets/images/user-img.jpg"} alt="user img" />
                                                        </div>
                                                        <div className="change-photo-btn-area">
                                                            <a href="#" className="change-poto-btn">
                                                                <i className="fa fa-camera" aria-hidden="true"></i>Edit</a>
                                                        </div>
                                                    </div>
                                                    <div className="user-detail-main-area">
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <div className="personal-information-heading">
                                                                    <h2>Full Name</h2>
                                                                    <h2>Email ID</h2>
                                                                    <h2>Phone</h2>
                                                                    <h2>Gender</h2>
                                                                    <h2>Country</h2>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="personal-information-details">
                                                                    <p>Jhon Smith</p>
                                                                    <p>jhonsmiht@gmail.com</p>
                                                                    <p>9874563214</p>
                                                                    <p>Male</p>
                                                                    <p>United States</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-7">
                                                <div className="setting-tab-heading-area">
                                                    <h2>Personal Details</h2>
                                                </div>
                                                <div className="setting-profile-detail-input-area">
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
                                                            <div className="col-lg-6">
                                                                <div className="form-group">
                                                                    <label>Gender</label>
                                                                    <div className="profile-input-box-area">
                                                                        <select className="form-control" name="cars" id="cars">
                                                                            <option value="volvo">Select Gender</option>
                                                                            <option value="volvo">Male</option>
                                                                            <option value="saab">Female</option>
                                                                            <option value="opel">Other</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="form-group">
                                                                    <label>Address</label>
                                                                    <input type="text" className="form-control field" name="holdername" placeholder="Enter Address" autofocus="" required="" id="name" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="form-group">
                                                                    <label>Country</label>
                                                                    <div className="profile-input-box-area">
                                                                        <select className="form-control" name="cars" id="cars">
                                                                            <option value="volvo">Select Country</option>
                                                                            <option value="volvo">India</option>
                                                                            <option value="saab">United States</option>
                                                                            <option value="opel">Australia</option>
                                                                            <option value="audi">Canada</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="form-group">
                                                                    <label>State</label>
                                                                    <div className="profile-input-box-area">
                                                                        <select className="form-control" name="cars" id="cars">
                                                                            <option value="volvo">Select State</option>
                                                                            <option value="volvo">India</option>
                                                                            <option value="saab">United States</option>
                                                                            <option value="opel">Australia</option>
                                                                            <option value="audi">Canada</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="form-group">
                                                                    <label>City</label>
                                                                    <div className="profile-input-box-area">
                                                                        <select className="form-control" name="cars" id="cars">
                                                                            <option value="volvo">Select City</option>
                                                                            <option value="volvo">India</option>
                                                                            <option value="saab">United States</option>
                                                                            <option value="opel">Australia</option>
                                                                            <option value="audi">Canada</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="form-group">
                                                                    <label>Postal/ZIP Code</label>
                                                                    <input type="text" className="form-control field" name="holdername" placeholder="Enter Postal/ZIP Code" autofocus="" required="" id="name" />
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
                                    <div className={(type == 2) ? "tab-pane fade show active" : "tab-pane fade"} id="change-password" role="tabpanel" aria-labelledby="change-password-tab">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="setting-tab-heading-area">
                                                    <h2>Change Password</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="change-password-input-box-area">
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <div className="change-password-lavel-area">
                                                        <h2>Old Password</h2>
                                                    </div>
                                                </div>
                                                <div className="col-lg-9">
                                                    <div className="change-password-input-box">
                                                        <input type="text" id="fname" name="fname" className="form-control" placeholder="Enter Old Password" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="change-password-input-box-area">
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <div className="change-password-lavel-area">
                                                        <h2>New Password</h2>
                                                    </div>
                                                </div>
                                                <div className="col-lg-9">
                                                    <div className="change-password-input-box">
                                                        <input type="text" id="fname" name="fname" className="form-control" placeholder="Enter New Password" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="change-password-input-box-area">
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <div className="change-password-lavel-area">
                                                        <h2>Confirm Password</h2>
                                                    </div>
                                                </div>
                                                <div className="col-lg-9">
                                                    <div className="change-password-input-box">
                                                        <input type="text" id="fname" name="fname" className="form-control" placeholder="Enter Confirm Password" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="change-password-submit-area">
                                            <a href="#" className="submit-password-change-btn">Submit</a>
                                        </div>
                                    </div>
                                    {/* multiline comment */}
                                    <div className={(type == 3) ? "tab-pane fade show active" : "tab-pane fade"} id="purchase-plan" role="tabpanel" aria-labelledby="change-password-tab">
                                        jai sri ram
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
    )
}

export default Settings;