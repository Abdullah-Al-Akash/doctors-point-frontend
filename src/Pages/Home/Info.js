import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {
        return (
                <div className="container mx-auto px-8 pt-16 pb-8 grid gird-cols-1 lg:grid-cols-3 gap-8">
                        <InfoCard img={clock}></InfoCard>
                        <InfoCard img={marker}></InfoCard>
                        <InfoCard img={phone}></InfoCard>
                </div>
        );
};

export default Info;