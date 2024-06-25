import type { MetaFunction } from "@remix-run/node";
import NavBar from "~/components/navbar";

export const meta: MetaFunction = () => {
  return [
    { title: "RB-Home" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return <div>Home Page</div>;
}
