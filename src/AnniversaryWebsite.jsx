import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

const AnniversaryWebsite = () => {
  const [currentPage, setCurrentPage] = useState(0);
  
  const pages = [
    {
      title: "Our Story",
      description: "Landing Page",
      content: (
        <div className="relative h-96 flex flex-col items-center justify-center space-y-6 overflow-hidden">
          <div className="absolute inset-0">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${8 + Math.random() * 4}s infinite`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              >
                <Heart className="text-stone-400 w-6 h-6" />
              </div>
            ))}
          </div>
          <h1 className="text-4xl font-serif text-stone-700 animate-fade-in">Happy Anniversary</h1>
          <p className="text-xl text-stone-600">A Year of Love & Memories</p>
          <div className="mt-8 animate-bounce">
            <ChevronRight className="w-8 h-8 text-stone-500" />
          </div>
        </div>
      )
    },
    {
      title: "Timeline",
      description: "Photo Journey",
      content: (
        <div className="h-96 p-8 flex flex-col space-y-6">
          <div className="flex items-center space-x-4">
            <div className="w-32 h-32 bg-stone-200 rounded-lg flex items-center justify-center">
              Photo 1
            </div>
            <div className="flex-1">
              <h3 className="text-xl text-stone-700">First Memory</h3>
              <p className="text-stone-600">Description of your special moment together</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 flex-row-reverse">
            <div className="w-32 h-32 bg-stone-200 rounded-lg flex items-center justify-center">
              Photo 2
            </div>
            <div className="flex-1">
              <h3 className="text-xl text-stone-700">Special Date</h3>
              <p className="text-stone-600">Another beautiful memory captured</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Photo Gallery",
      description: "Our Moments",
      content: (
        <div className="h-96 p-8 grid grid-cols-3 gap-4">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="bg-stone-200 rounded-lg aspect-square flex items-center justify-center">
              Photo {i + 1}
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Love Notes",
      description: "Messages & Quotes",
      content: (
        <div className="h-96 p-8 flex flex-col space-y-6">
          <div className="bg-stone-100 p-6 rounded-lg">
            <p className="text-stone-700 italic">"A favorite quote or memory..."</p>
            <p className="text-stone-500 text-sm mt-2">- Date of the memory</p>
          </div>
          <div className="bg-stone-100 p-6 rounded-lg">
            <p className="text-stone-700 italic">"Another special moment..."</p>
            <p className="text-stone-500 text-sm mt-2">- Another date</p>
          </div>
        </div>
      )
    },
    {
      title: "Looking Forward",
      description: "Future Together",
      content: (
        <div className="h-96 flex flex-col items-center justify-center space-y-6 text-center p-8">
          <h2 className="text-3xl font-serif text-stone-700">Here's to Many More</h2>
          <p className="text-stone-600 max-w-md">
            A heartfelt message about your hopes and dreams for the future together
          </p>
          <Heart className="text-stone-400 w-12 h-12 animate-pulse" />
        </div>
      )
    }
  ];

  return (
    <div className="max-w-2xl mx-auto bg-stone-50 rounded-lg shadow-xl overflow-hidden">
      <div className="p-4 bg-stone-100 flex justify-between items-center">
        <button 
          onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
          className="p-2 text-stone-600 hover:text-stone-800 disabled:opacity-50"
          disabled={currentPage === 0}
        >
          <ChevronLeft />
        </button>
        <div className="text-center">
          <h2 className="text-xl text-stone-700">{pages[currentPage].title}</h2>
          <p className="text-sm text-stone-500">{pages[currentPage].description}</p>
        </div>
        <button 
          onClick={() => setCurrentPage(Math.min(pages.length - 1, currentPage + 1))}
          className="p-2 text-stone-600 hover:text-stone-800 disabled:opacity-50"
          disabled={currentPage === pages.length - 1}
        >
          <ChevronRight />
        </button>
      </div>
      <div className="border-t border-stone-200">
        {pages[currentPage].content}
      </div>
      <div className="p-4 bg-stone-100 flex justify-center space-x-2">
        {pages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i)}
            className={`w-2 h-2 rounded-full ${
              i === currentPage ? 'bg-stone-600' : 'bg-stone-300'
            }`}
          />
        ))}
      </div>      
    </div>
  );
};

export default AnniversaryWebsite;