// eslint-disable-next-line no-unused-vars
import React from 'react';

const Contact = () => {
  return (
    <div className="p-6 border border-blue-950 rounded-md flex flex-col gap-4 md:gap-8 justify-center items-center text-center">
      <p>
        Please contact admin to get username and password to access questions
      </p>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="py-1 px-10 border border-blue-950 rounded-md text-blue-950 font-semibold hover:bg-blue-950 hover:text-white"
      >
        Contact Admin
      </a>
    </div>
  );
};

export default Contact;
