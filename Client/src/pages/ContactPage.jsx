import React, { useEffect } from "react";
import ContactForm from "../components/layout/ContactForm";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pt-14  bg-gradient-to-br from-black via-gray-900 to-black">
      <ContactForm />
    </div>
  );
};

export default ContactPage;
