import React from 'react';
import ProfileSection from './components/ProfileSection';
import SocialLink from './components/SocialLink';
import { socialLinks } from './data/links';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-6">
      <div className="max-w-2xl mx-auto space-y-8 mt-12">
        <ProfileSection />
        <div className="space-y-4">
          {socialLinks.map((link, index) => (
            <SocialLink key={index} {...link} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;