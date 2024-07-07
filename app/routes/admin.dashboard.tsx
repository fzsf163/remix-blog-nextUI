import {  useOutletContext } from "@remix-run/react";

export default function Dashboard() {
  const userID = useOutletContext();
  console.log("🚀 ~ Dashboard ~ userID:", userID);
  return <div>This is dashboard</div>;
}
