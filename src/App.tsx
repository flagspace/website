import React, { useState } from 'react';
import {
  Flag,
  Rocket,
  Gauge,
  Gamepad,
  MessageSquare,
  Layers,
  Sparkles,
} from 'lucide-react';
import WaitlistForm from './components/WaitlistForm';
import FeatureCard from './components/FeatureCard';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const features = [
    {
      icon: Rocket,
      title: 'Agile-First Platform',
      description:
        'Rapid feature deployment and quick issue resolution, unlike traditional slow-moving platforms.',
    },
    {
      icon: Flag,
      title: 'Blazing Fast SDKs',
      description:
        'Modular and lightweight SDKs designed for seamless integration with minimal overhead.',
    },
    {
      icon: Gauge,
      title: 'Edge-First Architecture',
      description:
        'Feature gating and experimentation at the edge for ultimate performance and reliability.',
    },
    {
      icon: Gamepad,
      title: 'Real-Time Ready',
      description:
        'Optimized for real-time applications including games and interactive experiences.',
    },
    {
      icon: MessageSquare,
      title: 'Built-in Feedback',
      description:
        'Collect and analyze user feedback during feature rollouts to make data-driven decisions.',
    },
    {
      icon: Layers,
      title: 'Cross-Platform Support',
      description:
        'Unified feature management across web, mobile, and server environments with consistent behavior.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header onWaitlistClick={() => setIsFormOpen(true)} />

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 mb-6">
              <Sparkles className="h-4 w-4 mr-2" />
              Coming Soon
            </span>
            <h1 className="text-5xl font-bold mb-6 text-blue-600">
              Feature Management for the Edge
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Lightning-fast feature flags and experimentation platform built
              for modern applications.
            </p>
            <button
              onClick={() => setIsFormOpen(true)}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transform transition hover:scale-[1.02]"
            >
              Get Early Access
            </button>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <WaitlistForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
}

export default App;
