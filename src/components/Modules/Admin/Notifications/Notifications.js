import React from "react";

const Notifications = () => {
    return (
        <>
            <div className="page-wrapper" style={{ minHeight: '250px' }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="application-detail-heading-area">
                                <h2>Notifications</h2>
                            </div>
                            <div className="faq-accordian-main-area notification-arrow-hide-parents">
                                <div className="accordion accordion-flush" id="accordionFlushExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingOne">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                <div className="notification-detail-main-area">
                                                    <div className="notification-user-img">
                                                        <img src={process.env.PUBLIC_URL + "/assets/images/user-img.jpg"} alt="user img" />
                                                    </div>
                                                    <div className="notification-heading-main-area">
                                                        <h2>Wrapped Bitcoin is now listed on Unity Exchange</h2>
                                                        <p>25 min ago</p>
                                                    </div>
                                                    <div className="notification-dlt-main-area">
                                                        <i className="fa fa-trash" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                            </button>
                                        </h2>
                                        <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                <div className="notification-detail-main-area">
                                                    <div className="notification-user-img">
                                                        <img src={process.env.PUBLIC_URL + "/assets/images/user-img.jpg"} alt="user img" />
                                                    </div>
                                                    <div className="notification-heading-main-area">
                                                        <h2>Vivamus tortor, odio viverra malesuada sapien dui.</h2>
                                                        <p>30 min ago</p>
                                                    </div>
                                                    <div className="notification-dlt-main-area">
                                                        <i className="fa fa-trash" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                            </button>
                                        </h2>
                                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.</div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                <div className="notification-detail-main-area">
                                                    <div className="notification-user-img">
                                                        <img src={process.env.PUBLIC_URL + "/assets/images/user-img.jpg"} alt="user img" />
                                                    </div>
                                                    <div className="notification-heading-main-area">
                                                        <h2>Srapped Citcoin is now listed on Unity Exchange</h2>
                                                        <p>45 min ago</p>
                                                    </div>
                                                    <div className="notification-dlt-main-area">
                                                        <i className="fa fa-trash" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                            </button>
                                        </h2>
                                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingFour">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                                <div className="notification-detail-main-area">
                                                    <div className="notification-user-img">
                                                        <img src={process.env.PUBLIC_URL + "/assets/images/user-img.jpg"} alt="user img" />
                                                    </div>
                                                    <div className="notification-heading-main-area">
                                                        <h2>Trapped Eitcoin is now listed on Unity Exchange</h2>
                                                        <p>50 min ago</p>
                                                    </div>
                                                    <div className="notification-dlt-main-area">
                                                        <i className="fa fa-trash" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                            </button>
                                        </h2>
                                        <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingFive">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                                <div className="notification-detail-main-area">
                                                    <div className="notification-user-img">
                                                        <img src={process.env.PUBLIC_URL + "/assets/images/user-img.jpg"} alt="user img" />
                                                    </div>
                                                    <div className="notification-heading-main-area">
                                                        <h2>Lindy Uikit on trending</h2>
                                                        <p>15 min ago</p>
                                                    </div>
                                                    <div className="notification-dlt-main-area">
                                                        <i className="fa fa-trash" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                            </button>
                                        </h2>
                                        <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingSix">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                                <div className="notification-detail-main-area">
                                                    <div className="notification-user-img">
                                                        <img src={process.env.PUBLIC_URL + "/assets/images/user-img.jpg"} alt="user img" />
                                                    </div>
                                                    <div className="notification-heading-main-area">
                                                        <h2>Urapped Bitcoin is now listed on Unity Exchange</h2>
                                                        <p>45 min ago</p>
                                                    </div>
                                                    <div className="notification-dlt-main-area">
                                                        <i className="fa fa-trash" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                            </button>
                                        </h2>
                                        <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</div>
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

export default Notifications;