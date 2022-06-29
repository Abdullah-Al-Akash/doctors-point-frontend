import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import ReviewCard from './ReviewCard';

const Testimonials = () => {
        const reviews = [
                {
                        _id: 1,
                        name: "Winson Herry",
                        location: "California",
                        description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
                        img: people1
                },
                {
                        _id: 2,
                        name: "Winson Herry",
                        location: "California",
                        description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
                        img: people2
                },
                {
                        _id: 3,
                        name: "Winson Herry",
                        location: "California",
                        description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
                        img: people3
                },
        ]
        return (
                <section className="py-28">
                        <div className="flex justify-between container mx-auto px-4 lg:px-12">
                                <div>
                                        <h4 className="text-xl font-bold text-secondary">Testimonial</h4>
                                        <h2 className="text-3xl py-4">What Our Patients Says</h2>
                                </div>
                                <div>
                                        <img className="w-20 lg:w-40" src={quote} alt="" />
                                </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto px-8">
                                {
                                        reviews.map(review => <ReviewCard
                                                key={review._id}
                                                review={review}
                                        ></ReviewCard>)
                                }
                        </div>
                </section>
        );
};

export default Testimonials;