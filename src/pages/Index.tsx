
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import LiveFeed from '@/components/dashboard/LiveFeed';
import TrustIndexWidget from '@/components/dashboard/TrustIndexWidget';
import AISummaryBox from '@/components/dashboard/AISummaryBox';
import QuickAccessButtons from '@/components/dashboard/QuickAccessButtons';
import { Chain } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Welcome to CivicChain</h1>
              <p className="text-muted-foreground">The transparent civic accountability platform</p>
            </div>
            <div className="hidden md:flex items-center text-sm text-muted-foreground bg-white border border-border rounded-full px-3 py-1">
              <Chain className="h-3 w-3 mr-1 text-civic-blue animate-pulse-gentle" />
              <span>Latest block: <span className="font-mono">f8a2e9c4</span></span>
            </div>
          </div>
          
          <QuickAccessButtons />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <LiveFeed />
          </div>
          
          <div className="space-y-6">
            <TrustIndexWidget />
            <AISummaryBox />
          </div>
        </div>
      </main>
      
      <footer className="border-t border-border py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Eye className="h-5 w-5 text-civic-blue mr-2" />
              <span className="text-lg font-semibold">CivicChain</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2025 CivicChain. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
