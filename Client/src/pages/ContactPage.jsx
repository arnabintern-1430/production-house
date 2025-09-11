import React, { useEffect } from "react";
import ContactForm from "../components/layout/ContactForm";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-black pt-14">
      <ContactForm />
    </div>
  );
};

export default ContactPage;
