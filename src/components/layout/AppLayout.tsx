import React from 'react';
import { Outlet } from 'react-router-dom';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from './AppSidebar';
import { TopNav } from './TopNav';
import { MobileNav } from './MobileNav';
import { useIsMobile } from '@/hooks/use-mobile';



export const AppLayout: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        {!isMobile && <AppSidebar />}
        
        <div className="flex-1 flex flex-col">
          <TopNav />
          
          <main className="flex-1 overflow-auto">
            <Outlet />
          </main>
          
          {isMobile && <MobileNav />}
        </div>
      </div>
    </SidebarProvider>
  );
};

