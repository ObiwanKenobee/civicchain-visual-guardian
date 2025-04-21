
import React from 'react';
import { 
  FileText, 
  Bell, 
  Flag, 
  Upload,
  Users
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const QuickAccessButton = ({ 
  icon, 
  label, 
  onClick 
}: { 
  icon: React.ReactNode; 
  label: string; 
  onClick: () => void;
}) => {
  return (
    <Button 
      variant="outline" 
      className="flex-col h-auto py-4 border-civic-gray/20 hover:bg-civic-peach/10 hover:border-civic-blue transition-all"
      onClick={onClick}
    >
      <div className="mb-2">{icon}</div>
      <span className="text-xs font-medium">{label}</span>
    </Button>
  );
};

const QuickAccessButtons = () => {
  const handleClick = (action: string) => {
    console.log(`Clicked ${action}`);
    // Would handle navigation or action in a full implementation
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
      <QuickAccessButton 
        icon={<FileText className="h-5 w-5 text-civic-blue" />} 
        label="New Cases" 
        onClick={() => handleClick('New Cases')} 
      />
      <QuickAccessButton 
        icon={<Bell className="h-5 w-5 text-civic-blue" />} 
        label="My Alerts" 
        onClick={() => handleClick('My Alerts')} 
      />
      <QuickAccessButton 
        icon={<Flag className="h-5 w-5 text-civic-blue" />} 
        label="Flag Issue" 
        onClick={() => handleClick('Flag Issue')} 
      />
      <QuickAccessButton 
        icon={<Upload className="h-5 w-5 text-civic-blue" />} 
        label="Submit Evidence" 
        onClick={() => handleClick('Submit Evidence')} 
      />
      <QuickAccessButton 
        icon={<Users className="h-5 w-5 text-civic-blue" />} 
        label="Tracking" 
        onClick={() => handleClick('Tracking')} 
      />
    </div>
  );
};

export default QuickAccessButtons;
