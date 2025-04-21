
import React from 'react';
import { Shield, Info } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

type TrustScoreProps = {
  score: number;
  agency: string;
  category: string;
};

const getTrustColor = (score: number) => {
  if (score >= 70) return 'text-green-600';
  if (score >= 40) return 'text-amber-500';
  return 'text-red-500';
};

const getProgressColor = (score: number) => {
  if (score >= 70) return 'bg-green-600';
  if (score >= 40) return 'bg-amber-500';
  return 'bg-red-500';
};

const TrustScore = ({ score, agency, category }: TrustScoreProps) => {
  const trustColor = getTrustColor(score);
  const progressColor = getProgressColor(score);
  
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex justify-between items-center mb-1">
        <div className="text-sm font-medium">{agency}</div>
        <div className="text-xs text-muted-foreground">{category}</div>
      </div>
      <div className="flex items-center gap-2">
        <Progress 
          value={score} 
          className="h-2" 
          style={{ 
            '--progress-foreground': progressColor.replace('bg-', 'var(--')
          } as React.CSSProperties}
        />
        <span className={`text-sm font-semibold ${trustColor}`}>{score}%</span>
      </div>
    </div>
  );
};

const TrustIndexWidget = () => {
  return (
    <div className="civic-block h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Shield className="h-5 w-5 text-civic-blue mr-2" />
          <h3 className="civic-title">Public Trust Index</h3>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="text-muted-foreground hover:text-foreground">
                <Info className="h-4 w-4" />
              </button>
            </TooltipTrigger>
            <TooltipContent className="max-w-sm">
              <p>The Public Trust Index reflects citizen trust ratings based on verified actions, transparency, and accountability.</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      
      <div>
        <TrustScore score={76} agency="Department of Justice" category="Federal" />
        <TrustScore score={52} agency="Local Police Department" category="Law Enforcement" />
        <TrustScore score={83} agency="Public Records Office" category="Administration" />
        <TrustScore score={35} agency="County Housing Authority" category="Housing" />
        <TrustScore score={61} agency="City Council" category="Government" />
      </div>
    </div>
  );
};

export default TrustIndexWidget;
