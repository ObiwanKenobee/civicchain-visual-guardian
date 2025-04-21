
import React from "react";
import Navbar from "@/components/layout/Navbar";
import { Upload } from "lucide-react";

const SubmitEvidence = () => (
  <div className="min-h-screen flex flex-col bg-gray-50">
    <Navbar />
    <main className="container mx-auto px-4 py-12 flex-1 flex flex-col items-center justify-center">
      <Upload className="text-civic-blue h-10 w-10 mb-4" />
      <h1 className="text-2xl font-bold mb-2">Submit Evidence</h1>
      <p className="text-muted-foreground max-w-lg text-center">
        Contribute evidence or reports securely. Upload supporting files and help increase civic transparency.
      </p>
    </main>
  </div>
);

export default SubmitEvidence;
