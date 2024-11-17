import React from 'react';
import { Building2, Brain, Wine, Share2 } from 'lucide-react';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Map from './components/Map';
import SubsidiaryCard from './components/SubsidiaryCard';
import Logo from './components/Logo';

function App() {
  const subsidiaries = [
    {
      title: 'Negus Consulting',
      description: 'Leading data privacy consulting and compliance solutions for enterprises worldwide.',
      icon: Building2,
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
    },
    {
      title: 'Negus AI',
      description: 'Cutting-edge enterprise AI automation services transforming businesses.',
      icon: Brain,
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80',
    },
    {
      title: 'NegusWines',
      description: 'Premium California wines expertly curated for African markets.',
      icon: Wine,
      image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80',
    },
    {
      title: 'Tam Tam S.A.',
      description: 'The fastest-growing social media platform connecting African communities.',
      icon: Share2,
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
          <Logo className="h-32 w-auto mb-8" color="#FFFFFF" />
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Negus Group Inc.</h1>
            <p className="text-xl md:text-2xl mb-8">
              A diverse portfolio of innovative companies shaping the future of technology, 
              consulting, wine, and social media.
            </p>
            <a 
              href="#subsidiaries"
              className="inline-block bg-[#FF4500] text-white px-8 py-3 rounded-md text-lg hover:bg-[#FF5722] transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Subsidiaries Section */}
      <div id="subsidiaries" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Companies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {subsidiaries.map((subsidiary) => (
              <SubsidiaryCard
                key={subsidiary.title}
                title={subsidiary.title}
                description={subsidiary.description}
                icon={subsidiary.icon}
                image={subsidiary.image}
              />
            ))}
          </div>
        </div>
      </div>

      <Newsletter />
      <Map />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-12">
            <Logo className="h-16 w-auto mb-4" color="#FFFFFF" />
            <h3 className="text-2xl font-bold">Negus Group Inc.</h3>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {subsidiaries.map((subsidiary) => (
              <div key={subsidiary.title}>
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <subsidiary.icon className="w-5 h-5" />
                  {subsidiary.title}
                </h3>
                <p className="text-gray-400 text-sm">{subsidiary.description}</p>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Negus Group Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;