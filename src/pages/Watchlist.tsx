
import React from "react";
import Navbar from "@/components/layout/Navbar";
import { Eye } from "lucide-react";

const Watchlist = () => (
  <div className="min-h-screen flex flex-col bg-gray-50">
    <Navbar />
    <main className="container mx-auto px-4 py-12 flex-1 flex flex-col items-center justify-center">
      <Eye className="text-civic-blue h-10 w-10 mb-4" />
      <h1 className="text-2xl font-bold mb-2">Watchlist</h1>
      <p className="text-muted-foreground max-w-lg text-center">
        Track and monitor public officials, agencies, or decisions over time. Follow activity feeds and stay updated on the actions you care about most.
      </p>
    </main>
  </div>
);

export default Watchlist;
