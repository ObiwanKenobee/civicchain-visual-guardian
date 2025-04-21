
import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AISummaryBox = () => {
  return (
    <div className="civic-block h-full">
      <div className="flex items-center mb-4">
        <Sparkles className="h-5 w-5 text-civic-blue mr-2" />
        <h3 className="civic-title">What's Happening Right Now?</h3>
      </div>
      
      <div className="prose prose-sm max-w-none">
        <p className="text-muted-foreground">
          AI analysis of current civic activities and power dynamics:
        </p>
        
        <ul className="mt-3 space-y-2 text-sm">
          <li>
            <strong>Transparency Alert:</strong> City Planning Commission published 87% of meeting notes, up from 62% last quarter.
          </li>
          <li>
            <strong>Trending Issue:</strong> 27 new reports filed regarding housing discrimination in Southwest district.
          </li>
          <li>
            <strong>Recent Improvement:</strong> Police department response times to FOIA requests have decreased by 18% following recent policy changes.
          </li>
          <li>
            <strong>Notable Change:</strong> Increase in whistleblower reports related to environmental regulation enforcement (+14%).
          </li>
        </ul>
        
        <div className="mt-4 text-sm text-muted-foreground">
          Last updated: Today at 10:32 AM
        </div>
      </div>
      
      <div className="mt-4">
        <Button variant="outline" size="sm" className="w-full">
          View Full Analysis <ArrowRight className="ml-2 h-3 w-3" />
        </Button>
      </div>
    </div>
  );
};

export default AISummaryBox;
