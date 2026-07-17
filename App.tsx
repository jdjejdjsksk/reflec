/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Rules } from './components/Rules';
import { Support } from './components/Support';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white font-sans antialiased selection:bg-white/20">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Rules />
        <Support />
      </main>
      <Footer />
    </div>
  );
}
