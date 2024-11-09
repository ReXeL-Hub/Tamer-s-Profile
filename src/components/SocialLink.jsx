import React from 'react';

const SocialLink = ({ icon, name, desc, color, url }) => {
  return (
    <a
      href={url}
      className={`social-link flex items-center space-x-4 p-4 rounded-xl bg-gray-800/30 backdrop-blur-sm ${color} hover:text-white group`}
    >
      <div className="flex-shrink-0 transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-[360deg] group-hover:animate-pulse">
        {icon}
      </div>
      <div className="flex-grow">
        <div className="font-semibold transition-all duration-700">{name}</div>
        <div className="text-sm text-gray-400 transition-all duration-700 group-hover:text-gray-200">{desc}</div>
      </div>
      <div className="flex-shrink-0 transform transition-all duration-700 group-hover:translate-x-2 group-hover:scale-110">
        <svg
          className="w-5 h-5 text-gray-400 group-hover:text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </a>
  );
};

export default SocialLink;