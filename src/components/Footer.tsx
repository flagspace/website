import React from 'react';
import { Flag } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Flag className="w-5 h-5" />
          <span className="text-lg font-semibold text-white">Flagspace</span>
        </div>
        <p className="text-center text-sm">
          © {new Date().getFullYear()} Flagspace. All rights reserved.
        </p>
      </div>
    </footer>
  );
}