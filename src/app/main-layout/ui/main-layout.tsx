import { Navbar } from '@/widgets/navbar/ui/navbar';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'sonner';

export const MainLayout = () => {
  return (
    <div className="max-w-[1280px] mx-auto">
      <Navbar />
      <Outlet />
      <Toaster />
    </div>
  );
};
