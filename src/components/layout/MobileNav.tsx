import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  CheckSquare, 
  MessageSquare, 
  Bell, 
  User
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const mobileNavItems = [
  { title: 'Dashboard', url: '/dashboard', icon: LayoutDashboard },
  { title: 'Tasks', url: '/tasks', icon: CheckSquare },
  { title: 'Discussions', url: '/discussions', icon: MessageSquare },
  { title: 'Notifications', url: '/notifications', icon: Bell },
  { title: 'Profile', url: '/profile', icon: User },
];

export const MobileNav: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center justify-around h-16">
        {mobileNavItems.map((item) => (
          <NavLink
            key={item.title}
            to={item.url}
            className={`flex flex-col items-center justify-center gap-1 px-2 py-1 text-xs transition-colors ${
              isActive(item.url)
                ? 'text-primary'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <div className="relative">
              <item.icon className="h-5 w-5" />
              {item.title === 'Notifications' && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-1 -right-1 h-4 w-4 text-xs p-0 flex items-center justify-center"
                >
                  3
                </Badge>
              )}
            </div>
            <span className="truncate">{item.title}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};