import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full  mx-auto bg-transparent py-4 mt-auto">
      <div className="max-w-7xl mx-auto text-sm text-white/80">
        <p>&copy; {new Date().getFullYear()} Heather Davies. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
