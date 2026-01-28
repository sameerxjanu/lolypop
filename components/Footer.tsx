"use client";

import Link from 'next/link';

export interface FooterProps { }

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 border-t border-gray-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

        <div className="text-left w-full md:w-auto">
          <div className="text-3xl font-bold font-display tracking-tight mb-2">
            LOLYPOP<span className="text-loly-pink">.</span>
          </div>
          <p className="text-gray-500 font-mono text-sm">Building for the internet's wild side</p>
        </div>

        <div className="flex gap-8 text-sm font-bold tracking-widest uppercase text-gray-400 w-full md:w-auto justify-start md:justify-end">
          <Link href="#" className="hover:text-loly-blue transition-colors">Twitter</Link>
          <Link href="#" className="hover:text-loly-blue transition-colors">Telegram</Link>
          <Link href="#" className="hover:text-loly-blue transition-colors">Discord</Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-mono">
        <p>&copy; {new Date().getFullYear()} LOLYPOP. All rights reserved.</p>
        <p className="mt-2 md:mt-0 flex items-center gap-2">
          Built with 🔍 and chaos.
        </p>
      </div>
    </footer>
  );
};

export default Footer;