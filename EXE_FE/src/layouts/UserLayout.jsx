import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
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
