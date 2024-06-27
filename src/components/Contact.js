import React from "react";
import { useSelector } from "react-redux";

const Contact = () => {
  const contact = useSelector((state) => state.portfolio.contact);

  return (
    <section id="contact" className="p-4">
      <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
      <div className="bg-gray-300 rounded-lg p-4">
        <p>Email: {contact.email}</p>
        <p>Phone: {contact.phone}</p>
        <p>
          LinkedIn: <a href={contact.linkedin}>{contact.linkedin}</a>
        </p>
        <p>
          GitHub: <a href={contact.github}>{contact.github}</a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
