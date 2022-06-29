import React, { useState } from 'react';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointmentBanner = () => {
        const [date, setDate] = useState(new Date());
        return (
                <div className="banner">
                        <div class="container mx-auto lg:px-20 px-4 hero min-h-screen">
                                <div class="md:flex items-center">
                                        <div className="flex-1">
                                                <DayPicker
                                                        mode="single"
                                                        selected={date}
                                                        onSelect={setDate}
                                                />
                                                <p className="px-6">You have picked <span className="text-primary font-bold text-xl">{format(date, 'PP')}</span>.</p>
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