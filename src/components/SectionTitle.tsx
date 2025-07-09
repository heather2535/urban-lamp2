import React from "react";
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className={`relative inline-block mb-8 not-prose ${inter.className}`}>
      <span className="block w-full h-4 bg-orange-300 absolute left-0 bottom-0 z-0"></span>
      <span className="text-3xl font-semibold tracking-wide text-gray-900 relative z-10">{children}</span>
    </div>
  );
} 