import React from 'react';

const ServiceCard = ({ service, setTreatment }) => {
        const { name, slots } = service;
        return (
                <div class="card bg-base-100 shadow-xl py-4">
                        <div class="card-body text-center">
                                <h2 class="text-2xl font-bold text-secondary">{name}</h2>
                                <p>
                                        {
                                                slots.length ?
                                                        <span>{slots[0]}</span>
                                                        :
                                                        <span className="text-red-500">No Slots Available! Try another date</span>
                                        }
                                </p>
                                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                                <div class="card-actions justify-center py-4">
                                        <label for="booking-modal"
                                                onClick={() => setTreatment(service)}
                                                class="btn btn-primary uppercase font-bold text-white bg-gradient-to-r from-secondary to-primary"
                                                disabled={slots?.length == 0}>Book Appointment
                                        </label>
                                </div>
                        </div>
                </div>
        );
};

export default ServiceCard;