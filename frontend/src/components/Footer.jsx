import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Adani ACM & ACM-W Chapter. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
