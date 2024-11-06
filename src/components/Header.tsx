import React from 'react';
import { Flag } from 'lucide-react';

interface HeaderProps {
  onWaitlistClick: () => void;
}

export default function Header({ onWaitlistClick }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Flag className="w-6 h-6 text-blue-600" />
            <span className="text-xl font-bold">Flagspace</span>
          </div>
          <button
            onClick={onWaitlistClick}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-sm transform transition hover:scale-[1.02]"
          >
            Join Waitlist
          </button>
        </nav>
      </div>
    </header>
  );
}