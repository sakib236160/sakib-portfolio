import React from 'react';

const Contact = () => {
  return (
    <section id="contact"className="py-16 px-4 bg-[#10141c]">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-cyan-400 mb-6">Contact Me</h2>
        <p className="text-gray-300 mb-4">
          Feel free to reach out for collaboration or just a friendly hello 👋
        </p>
        <a
          href="mailto:yourmail@example.com"
          className="inline-block bg-cyan-500 text-black px-6 py-3 rounded hover:bg-cyan-600 transition"
        >
          Send Email
        </a>
      </div>
    </section>
  );
};

export default Contact;
