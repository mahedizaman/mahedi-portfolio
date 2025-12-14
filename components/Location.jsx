import { MapIcon } from 'lucide-react';
import React from 'react'

const Location = () => {
  return (
    <div className="flex items-center gap-1 text-gray-600 text-sm mt-6">
      <MapIcon size={16} />
      <a
        href="https://www.google.com/maps?q=Dhaka,Bangladesh"
        target="_blank"
        rel="noopener noreferrer"
      >
        Dhaka, Bangladesh
      </a>
    </div>
  );
}

export default Location