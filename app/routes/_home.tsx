import { Outlet } from "@remix-run/react";
import Footer from "~/components/footer/footer";
import NavTop from "~/components/navtop";

export default function HomeLayout() {
  return (
    <div className="w-full">
      <NavTop></NavTop>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}
