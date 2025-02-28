import { Navbar } from "@/widgets/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="w-[1280px] mx-auto">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
