import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

const UserLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default UserLayout;
