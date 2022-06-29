import React from 'react';
import chair from '../../assets/images/chair.png';
import './Banner.css';

const Banner = () => {
        return (
                <div className="banner">
                        <div class="container mx-auto lg:px-20 px-4 hero min-h-screen">
                                <div class="md:flex items-center justify-center">
                                        <div className="">
                                                <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                                                <p class="py-6 lg:pr-12">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                                <div className="pb-4">
                                                        <button class="btn btn-primary uppercase font-bold text-white bg-gradient-to-r from-secondary to-primary">Get Started</button>
                                                </div>

                                        </div>
                                        <div className="">
                                                <img src={chair} class="rounded-lg shadow-2xl" />
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default Banner;