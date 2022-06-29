import React from 'react';

const ReviewCard = ({ review }) => {
        const { name, description, img, location } = review;
        return (
                <div class="card bg-base-100 shadow-xl">
                        <div class="card-body">
                                <p>{description}</p>
                                <div class="flex items-center mt-4">
                                        <div class="avatar">
                                                <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                        <img src={img} />
                                                </div>
                                        </div>
                                        <div className="ml-8">
                                                <h3 className="text-lg font-bold">{name}</h3>
                                                <h4>{location}</h4>
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default ReviewCard;