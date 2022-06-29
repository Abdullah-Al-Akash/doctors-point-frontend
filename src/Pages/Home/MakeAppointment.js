import React from 'react';
import doctor from '../../assets/images/doctor.png';
import bg from '../../assets/images/appointment.png';

const MakeAppointment = () => {
        return (
                <div style={{
                        background: `url(${bg})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat"
                }}>
                        <section className="flex justify-center items-center mt-36">
                                <div className="flex-1 hidden lg:block">
                                        <img className="mt-[-120px]" src={doctor} alt="" />
                                </div>
                                <div className="flex-1 lg:pr-36 p-12">
                                        <h3 className="text-secondary text-xl font-bold">Appointment</h3>
                                        <h2 className="text-3xl font-bold text-white mt-4">Make an appointment Today</h2>
                                        <p className="py-4 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                                        <div className="pb-4">
                                                <button class="btn btn-primary uppercase font-bold text-white bg-gradient-to-r from-secondary to-primary">Get Started</button>
                                        </div>
                                </div>
                        </section>
                </div>
        );
};

export default MakeAppointment;