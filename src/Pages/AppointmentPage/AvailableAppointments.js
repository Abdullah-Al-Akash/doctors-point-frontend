import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import ServiceCard from './ServiceCard';

const AvailableAppointments = ({ date }) => {
        const [services, setServices] = useState([]);
        const [treatment, setTreatment] = useState(null);

        // Load Data:
        useEffect(() => {
                fetch('http://localhost:5000/services')
                        .then(res => res.json())
                        .then(data => setServices(data))
        }, [])
        return (
                <div className="py-24">
                        <h4 className="text-center text-secondary font-bold text-xl">Available Appointments on <span className="text-secondary font-bold">{format(date, 'PP')}</span></h4>

                        {/* Display Services */}
                        <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-16">
                                {
                                        services.map(service => <ServiceCard
                                                key={service._id}
                                                service={service}
                                                setTreatment={setTreatment}
                                        ></ServiceCard>)
                                }
                        </div>
                        {treatment && <BookingModal
                                date={date}
                                treatment={treatment}
                                setTreatment={setTreatment}
                        ></BookingModal>}
                </div>
        );
};

export default AvailableAppointments;