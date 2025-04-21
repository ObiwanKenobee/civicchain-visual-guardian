
import React from 'react';
import { Eye, Bell, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white border-b border-border">
      <div className="flex items-center">
        <div className="mr-4 flex items-center">
          <Eye className="h-5 w-5 text-civic-blue mr-1" />
          <span className="text-xl font-bold tracking-tight text-civic-darkGray">
            Civic<span className="text-civic-blue">Chain</span>
          </span>
        </div>
        <div className="hidden md:flex space-x-1">
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground" asChild>
            <Link to="/">Dashboard</Link>
          </Button>
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground" asChild>
            <Link to="/watchlist">Watchlist</Link>
          </Button>
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground" asChild>
            <Link to="/reports">Reports</Link>
          </Button>
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground" asChild>
            <Link to="/submit-evidence">Submit Evidence</Link>
          </Button>
        </div>
      </div>
      
      <div className="hidden md:block w-1/3">
        <Input placeholder="Search agencies, officials, or cases..." className="w-full" />
      </div>
      
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon" aria-label="Notifications">
          <Bell className="h-5 w-5 text-muted-foreground" />
        </Button>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="h-5 w-5 text-muted-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Sign out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}

export default Navbar;
