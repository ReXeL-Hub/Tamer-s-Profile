import React from 'react';

const ProfileSection = () => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative group">
        <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-blue-500 transform transition-all duration-300 group-hover:scale-105">
          <img
            src="/profile.png"
            alt="Profile"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="absolute -right-1 -bottom-1 bg-blue-500 rounded-full p-1 transform transition-all duration-300 hover:scale-110">
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
          </svg>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Tamer Osmane</h1>
        <p className="text-gray-400 mt-2">I help businesses scale with paid ads.</p>
      </div>
    </div>
  );
};

export default ProfileSection;