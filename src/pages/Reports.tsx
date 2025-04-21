
import React from "react";
import Navbar from "@/components/layout/Navbar";
import { FileText } from "lucide-react";

const Reports = () => (
  <div className="min-h-screen flex flex-col bg-gray-50">
    <Navbar />
    <main className="container mx-auto px-4 py-12 flex-1 flex flex-col items-center justify-center">
      <FileText className="text-civic-blue h-10 w-10 mb-4" />
      <h1 className="text-2xl font-bold mb-2">Analytics &amp; Reports</h1>
      <p className="text-muted-foreground max-w-lg text-center">
        Explore trends and analyze civic activity. View trust scores, abuse reports, and other analytics.
      </p>
    </main>
  </div>
);

export default Reports;
