import { Navbar } from '@/widgets/Navbar/ui/navbar';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <div className="w-full mx-auto">
      <Navbar />
      <Outlet />
    </div>
  );
};
