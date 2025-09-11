import React, { useEffect } from "react";
import HeroBooking from "../components/layout/HeroBooking";
import BookingForm from "../components/layout/BookingForm";

const Booking = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <HeroBooking />
      <BookingForm />
    </div>
  );
};

export default Booking;
