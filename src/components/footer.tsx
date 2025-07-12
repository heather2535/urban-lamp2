import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full mx-auto bg-transparent py-4 mt-auto">
      <div className="max-w-6xl mx-auto px-4 ml-10sm:px-6 text-sm text-gray-700 dark:text-white/80 font-mono">
        <p>&copy; {new Date().getFullYear()} Heather Davies. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
