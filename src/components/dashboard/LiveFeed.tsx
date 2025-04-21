
import React from 'react';
import { 
  Gavel, 
  FileText, 
  Flag, 
  Clock, 
  Filter, 
  ChevronDown 
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type ActivityType = 'decision' | 'document' | 'flag';

type Activity = {
  id: string;
  type: ActivityType;
  title: string;
  agency: string;
  category: string;
  timestamp: string;
  trustScore?: number;
};

const getActivityIcon = (type: ActivityType) => {
  switch (type) {
    case 'decision':
      return <Gavel className="h-4 w-4 text-civic-blue" />;
    case 'document':
      return <FileText className="h-4 w-4 text-civic-darkBlue" />;
    case 'flag':
      return <Flag className="h-4 w-4 text-civic-alert" />;
    default:
      return null;
  }
};

const ActivityItem = ({ activity }: { activity: Activity }) => {
  const icon = getActivityIcon(activity.type);
  
  return (
    <div className="p-3 border-b border-border last:border-0">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center">
          <div className="mr-2">{icon}</div>
          <span className="font-medium">{activity.title}</span>
        </div>
        <div className="flex items-center text-xs text-muted-foreground">
          <Clock className="h-3 w-3 mr-1" />
          <span>{activity.timestamp}</span>
        </div>
      </div>
      <div className="flex items-center justify-between ml-6">
        <div className="text-sm text-muted-foreground">{activity.agency}</div>
        <Badge variant="outline" className="text-xs">{activity.category}</Badge>
      </div>
    </div>
  );
};

const LiveFeed = () => {
  const activities: Activity[] = [
    { 
      id: '1', 
      type: 'decision', 
      title: 'Budget Allocation Vote', 
      agency: 'City Council', 
      category: 'Finance', 
      timestamp: '2 min ago',
      trustScore: 78
    },
    { 
      id: '2', 
      type: 'document', 
      title: 'Environmental Impact Assessment', 
      agency: 'EPA', 
      category: 'Environment', 
      timestamp: '23 min ago',
      trustScore: 92
    },
    { 
      id: '3', 
      type: 'flag', 
      title: 'Missing Meeting Minutes', 
      agency: 'Housing Authority', 
      category: 'Transparency', 
      timestamp: '48 min ago',
      trustScore: 41
    },
    { 
      id: '4', 
      type: 'decision', 
      title: 'Zoning Change Approval', 
      agency: 'Planning Commission', 
      category: 'Housing', 
      timestamp: '1 hour ago',
      trustScore: 65
    },
    { 
      id: '5', 
      type: 'document', 
      title: 'Police Department Quarterly Report', 
      agency: 'Police Department', 
      category: 'Law Enforcement', 
      timestamp: '3 hours ago',
      trustScore: 73
    },
  ];

  return (
    <div className="civic-block h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="civic-title">Latest Logged Actions</h3>
        <div className="flex items-center space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-8">
                <Filter className="mr-2 h-3.5 w-3.5" />
                Filter
                <ChevronDown className="ml-2 h-3.5 w-3.5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Filter By</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  Agency
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Category
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Action Type
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Reset Filters</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      
      <div className="overflow-hidden rounded-md border border-border">
        {activities.map((activity) => (
          <ActivityItem key={activity.id} activity={activity} />
        ))}
      </div>
      
      <div className="mt-4 text-center">
        <Button variant="ghost" size="sm" className="text-civic-blue">
          View All Activity
        </Button>
      </div>
    </div>
  );
};

export default LiveFeed;
