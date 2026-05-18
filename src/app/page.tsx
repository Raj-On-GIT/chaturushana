import React from 'react';
import { Leaf } from 'lucide-react';

// Classical Ayurvedic data for Chaturushana strictly following the requested fields.
const herbsData = [
  {
    id: 1,
    name: "शुण्ठी",
    englishName: "Shunthi",
    latinName: "Zingiber officinale",
    family: "Zingiberaceae",
    rasa: "कटु",
    guna: "लघु, स्निग्ध",
    vipaka: "मधुर",
    veerya: "उष्ण",
    karma: "तृप्तिघ्न"
  },
  {
    id: 2,
    name: "पिप्पली",
    englishName: "Pippali",
    latinName: "Piper longum",
    family: "Piperaceae",
    rasa: "कटु",
    guna: "लघु, स्निग्ध, तीक्ष्ण",
    vipaka: "मधुर",
    veerya: "अनुष्ण शीत",
    karma: "कासहर"
  },
  {
    id: 3,
    name: "मरिच",
    englishName: "Maricha",
    latinName: "Piper nigrum",
    family: "Piperaceae",
    rasa: "कटु",
    guna: "लघु, तीक्ष्ण",
    vipaka: "कटु",
    veerya: "उष्ण",
    karma: "दीपन"
  },
  {
    id: 4,
    name: "पिप्पलीमूल",
    englishName: "Pippalimoola",
    latinName: <>Root of <span className="italic">Piper longum</span></>,
    family: "Piperaceae",
    rasa: "कटु",
    guna: "लघु, स्निग्ध, तीक्ष्ण",
    vipaka: "मधुर",
    veerya: "अनुष्ण शीत",
    karma: "कासहर"
  }
];

const HerbCard = ({ herb }: { herb: any }) => {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(20,83,45,0.08)] transition-all duration-500 border border-stone-100/50 flex flex-col h-full">
      
      {/* Card Header */}
      <div className="bg-gradient-to-br from-emerald-50/50 to-stone-50/50 p-8 border-b border-stone-100">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-4xl font-bold text-emerald-900 tracking-tight font-serif">
            {herb.name}
          </h2>
          <Leaf className="w-6 h-6 text-emerald-600/40 group-hover:text-emerald-500 transition-colors" />
        </div>
        <p className="text-stone-500 font-medium tracking-wide">
          {herb.englishName}
        </p>
      </div>

      {/* Card Body / Properties Grid */}
      <div className="p-8 flex-grow flex flex-col space-y-6">
        
        {/* Botanical Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-6 border-b border-stone-100">
          <div>
            <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1">Latin Name</p>
            <p className={`text-stone-800 font-medium ${herb.id !== 4 ? 'italic' : ''}`}>
              {herb.latinName}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1">Family</p>
            <p className="text-stone-800 font-medium">{herb.family}</p>
          </div>
        </div>

        {/* Ayurvedic Properties (Rasapanchaka) */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-6 flex-grow">
          <div className="bg-stone-50/50 p-4 rounded-2xl">
            <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1">रस</p>
            <p className="text-lg text-emerald-950 font-medium">{herb.rasa}</p>
          </div>
          
          <div className="bg-stone-50/50 p-4 rounded-2xl">
            <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1">गुण</p>
            <p className="text-lg text-emerald-950 font-medium">{herb.guna}</p>
          </div>
          
          <div className="bg-stone-50/50 p-4 rounded-2xl">
            <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1">विपाक</p>
            <p className="text-lg text-emerald-950 font-medium">{herb.vipaka}</p>
          </div>
          
          <div className="bg-stone-50/50 p-4 rounded-2xl">
            <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1">वीर्य</p>
            <p className="text-lg text-emerald-950 font-medium">{herb.veerya}</p>
          </div>
        </div>

        {/* Karma (Main Action) */}
        <div className="pt-2">
          <div className="bg-emerald-50/50 border border-emerald-100/50 p-5 rounded-2xl">
            <p className="text-xs font-semibold text-emerald-600/70 uppercase tracking-wider mb-2">मुख्य कर्म</p>
            <p className="text-xl text-emerald-900 font-medium leading-relaxed">
              {herb.karma}
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default function ChaturushanaApp() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] text-stone-800 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* Subtle Background Pattern/Gradient */}
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-[#F2EFEB]/50 to-transparent" />
      
      <main className="relative max-w-7xl mx-auto px-6 py-16 md:px-12 md:py-24">
        
        {/* Header Section */}
        <header className="text-center mb-16 md:mb-24 space-y-6 flex flex-col items-center">
          <div className="inline-flex items-center justify-center p-3 bg-emerald-50 rounded-2xl mb-4 shadow-sm border border-emerald-100/50">
            <Leaf className="w-8 h-8 text-emerald-700" strokeWidth={1.5} />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-stone-900 tracking-tight font-serif drop-shadow-sm">
            चतुरूषण
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-emerald-600/30 to-transparent rounded-full mt-8" />
        </header>

        {/* Herb Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {herbsData.map((herb) => (
            <HerbCard key={herb.id} herb={herb} />
          ))}
        </div>
        
        {/* Footer */}
        <footer className="mt-24 text-center pb-8">
          <p className="text-stone-400 text-sm font-medium tracking-widest uppercase">
            Ayurvedic Botanical Reference
          </p>
        </footer>

      </main>
    </div>
  );
}