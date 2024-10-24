import { Outlet } from "@remix-run/react";
import PrimaryNav from "~/components/AdminNav/primaryNav";
import "../components/submitbutton/btn.css";

export default function Admin() {
  return (
    <div style={{ fontFamily: "K2D, sans-serif" }}>
      <PrimaryNav></PrimaryNav>
      <Outlet></Outlet>
    </div>
  );
}
