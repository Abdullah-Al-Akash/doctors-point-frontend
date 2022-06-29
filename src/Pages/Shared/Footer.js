import React from 'react';
import footerBg from '../../assets/images/footer.png';

const Footer = () => {
        return (
                <footer style={{
                        background: `url(${footerBg})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                }} class="">
                        <div className="footer mx-auto px-12 lg:px-48 py-16">
                                <div>
                                        <span class="text-black font-bold">SERVICES</span>
                                        <a class="link link-hover">Emergency Checkup</a>
                                        <a class="link link-hover">Monthly Checkup</a>
                                        <a class="link link-hover">Weekly Checkup</a>
                                        <a class="link link-hover">Deep Checkup</a>
                                </div>
                                <div>
                                        <span class="text-black font-bold">ORAL HEALTH</span>
                                        <a class="link link-hover">Fluoride Treatment</a>
                                        <a class="link link-hover">Cavity Filling</a>
                                        <a class="link link-hover">Teath Whitening</a>
                                </div>
                                <div>
                                        <span class="text-black font-bold">OUR ADDRESS</span>
                                        <a class="link link-hover">New York - 101010 Hudson</a>
                                </div>
                        </div>

                        <div className="py-12">
                                <p className="text-center text-black font-bold">Copyright 2022 All Rights Reserved</p>
                        </div>
                </footer>
        );
};

export default Footer;