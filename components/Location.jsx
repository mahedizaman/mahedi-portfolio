import { Github, Mail, MapIcon, MessageCircleMore } from 'lucide-react';
import Link from 'next/link';
import SocialLinks from './SocialLinks';

const Location = () => {
  return (
    <div>
      <div className="flex items-center gap-1 text-gray-400 text-sm mt-6 mb-2">
        <MapIcon size={16} />
        <Link
          href="https://www.google.com/maps?q=Dhaka,Bangladesh"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dhaka, Bangladesh
        </Link>
      </div>
      <SocialLinks />
    </div>
  );
}

export default Location