/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Legacy } from './components/Legacy';
import { PracticeAreas } from './components/PracticeAreas';
import { Features } from './components/Features';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ChevronUp } from 'lucide-react';

import { Professionals } from './components/Professionals';

export default function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, [showScroll]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Legacy />
        <Professionals />
        <PracticeAreas />
        <Features />
        <Contact />
      </main>
      <Footer />

      {/* Back to Top */}
      {showScroll && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-gold text-white p-3 rounded-sm shadow-xl z-50 hover:bg-navy transition-all animate-in fade-in slide-in-from-bottom-4"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
}


