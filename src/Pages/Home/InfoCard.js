import React from 'react';

const InfoCard = ({ img, cardTitle, bgClass }) => {
        return (
                <div class={`card lg:card-side shadow-xl mx-auto px-8 py-4 ${bgClass}`}>
                        <figure>
                                <img src={img} alt="Album" />
                        </figure>
                        <div class="card-body text-white">
                                <h2 class="card-title">{cardTitle}</h2>
                                <p>Click the button to listen on Spotiwhy app.</p>
                        </div>
                </div>
        );
};

export default InfoCard;