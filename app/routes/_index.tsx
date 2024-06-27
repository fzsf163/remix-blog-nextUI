import type { MetaFunction } from "@remix-run/node";


export const meta: MetaFunction = () => {
  return [
    { title: "RB-Home" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <div className="w-full h-[500px] bg-green-400">Home Page</div>
      <div className="w-full h-[500px] bg-green-400">Home Page</div>
      <div className="w-full h-[500px] bg-green-400">Home Page</div>
      <div className="w-full h-[500px] bg-green-400">Home Page</div>
      <div className="w-full h-[500px] bg-green-400">Home Page</div>
      <div className="w-full h-[500px] bg-green-400">Home Page</div>
      <div className="w-full h-[500px] bg-green-400">Home Page</div>
      <div className="w-full h-[500px] bg-green-400">Home Page</div>
    </div>
  );
}
