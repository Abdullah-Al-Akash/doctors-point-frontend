import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ date, treatment, setTreatment }) => {
        const { name, slots } = treatment;

        const handleSubmit = e => {
                e.preventDefault();
                const slot = e.target.slot.value;
                const name = e.target.name.value;
                console.log(format(date, 'PP'), slot, name)
                setTreatment(null);
        }
        return (
                <div>
                        <input type="checkbox" id="booking-modal" class="modal-toggle" />
                        <div class="modal modal-bottom sm:modal-middle">
                                <div class="modal-box">
                                        <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                        <h3 class="font-bold text-2xl text-center">Booking for <span className="text-secondary">{name}</span> </h3>
                                        <form onSubmit={handleSubmit} className="mt-8 px-8">
                                                <input type="text" value={format(date, 'PP')} class="input input-bordered w-full my-2" readonly />
                                                <select name="slot" class="select select-bordered w-full my-2">
                                                        {
                                                                slots.map(slot => <option value={slot}>{slot}</option>)
                                                        }
                                                </select>
                                                <input name="name" type="text" placeholder="Your Name" class="input input-bordered w-full my-2" />
                                                <input name="email" type="email" placeholder="Your Email" class="input input-bordered w-full my-2" />
                                                <input name="phone" type="number" placeholder="Your Phone Number" class="input input-bordered w-full my-2" />
                                                <input type="submit" value="Appointment" class="btn btn-primary uppercase font-bold text-white bg-gradient-to-r from-secondary to-primary w-full mb-8 mt-4" />
                                        </form>
                                </div>
                        </div>
                </div>
        );
};

export default BookingModal;