import { Input } from "@nextui-org/react";
import "./subscribe.css";
import { IconMailFilled } from "@tabler/icons-react";
export default function SubscribeBox() {
  return (
    <div className="text-center space-y-4 bg-slate-400/30 py-12">
      <h1 className="get-notified fa-text text-sm font-extrabold capitalize sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl">
        Get notified with new articles
      </h1>
      <div className="m-auto flex w-fit items-center justify-center gap-3">
        <div className="group flex items-center justify-center rounded-md bg-[#6894b1]">
          <IconMailFilled className="h-[80px] w-[50px] pl-2 text-[#93b4ca] duration-250 ease-in-out transition-all group-focus-within:w-[0px] group-focus-within:pl-0" />
          <input
            placeholder="your@email.com"
            className="input h-[80px] w-[400px]"
            name="emailHomePageSub"
            type="email"
          />
        </div>
        <button className="buttonSub h-[80px] w-[200px]">Subscribe</button>
      </div>
    </div>
  );
}
