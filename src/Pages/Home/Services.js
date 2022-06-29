import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
        const services = [
                {
                        _id: 1,
                        name: "Fluoride Treatment",
                        img: fluoride,
                        description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
                },
                {
                        _id: 2,
                        name: "Cavity Filling",
                        img: cavity,
                        description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
                },
                {
                        _id: 3,
                        name: "Teeth Whitening",
                        img: whitening,
                        description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
                },
        ]
        return (
                <div className="">
                        <div className="text-center pt-16 pb-12">
                                <h3 className="text-secondary text-lg font-bold">OUR SERVICES</h3>
                                <h2 className="text-3xl">Services We Provide</h2>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 container mx-auto lg:px-24 px-8">
                                {
                                        services.map(service => <Service
                                                key={service._id}
                                                service={service}
                                        ></Service>)
                                }
                        </div>
                </div>
        );
};

export default Services;