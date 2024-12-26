// components/Benefits.js
'use client';

import Image from 'next/image';

export default function Benefits() {
  const points = [
    {
      text: "Reduce content creation time by 60% with AI-powered assistance",
      icon: "/images/Group (2).png"
    },
    {
      text: "Drive 3x more engagement than traditional corporate content",
      icon: "/images/Vector (4).png"
    },
    {
      text: "Save 15+ hours per week on advocacy program management",
      icon: "/images/Vector (5).png"
    },
    {
      text: "Get real-time insights into content performance and ROI",
      icon: "/images/ic_baseline-insights.png"
    }
  ];

  return (
    <section id="benefits" className="py-16 px-4 bg-pink-gradient">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-medium text-white text-center mb-8">
          Benefits
        </h2>
        <p className="text-lg text-center mb-12 text-white">
          Why Leading Organizations Choose Our Platform
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white px-6 py-8 rounded-2xl "
            >
              <Image
                src={point.icon}
                alt={`Icon for ${point.text}`}
                width={64}
                height={64}
                className="mb-4 h-8 w-8"
              />
              <p className="text-gray-800 text-sm font-medium">
                {point.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
