import React from 'react';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointmentBanner = ({ date, setDate }) => {
        return (
                <div className="banner">
                        <div class="container mx-auto lg:px-20 px-4 hero min-h-screen">
                                <div class="md:flex items-center">
                                        <div className="flex-1">
                                                <div className="flex justify-center">
                                                        <div>
                                                                <DayPicker
                                                                        mode="single"
                                                                        selected={date}
                                                                        onSelect={setDate}
                                                                        className="bg-white p-8 border-solid border-2 mt-8"
                                                                />
                                                                <p className="px-6 py-4">You have picked <span className="text-primary font-bold text-xl">{format(date, 'PP')}</span>.</p>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className="flex-1 lg:py-0 py-16">
                                                <img src={chair} class="rounded-lg shadow-2xl" alt="Dentist Chair" />
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default AppointmentBanner;