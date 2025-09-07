import React from 'react';
import HeroBooking from '../components/layout/HeroBooking';
import BookingForm from '../components/layout/BookingForm';

const Booking = () => {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <HeroBooking />
      <BookingForm />
    </div>
  );
};

export default Booking;