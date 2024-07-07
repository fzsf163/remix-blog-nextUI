import { Input } from "@nextui-org/react";
import "./subscribe.css";
import { IconMailFilled } from "@tabler/icons-react";
export default function SubscribeBox() {
  return (
    <div className="m-auto xl:max-w-[90%] space-y-4 bg-slate-400/30 py-12 text-center rounded-lg">
      <h1 className="get-notified fa-text text-sm font-extrabold capitalize sm:text-5xl xl:text-6xl">
        Get notified with new articles
      </h1>
      <div className="m-auto flex w-fit flex-col items-center justify-center gap-3 sm:flex-row">
        <div className="group flex items-center justify-center rounded-md bg-[#6894b1]">
          <IconMailFilled className="pl-2 text-[#93b4ca] transition-all duration-250 ease-in-out group-focus-within:w-[0px] group-focus-within:pl-0 sm:h-[80px] sm:w-[50px]" />
          <input
            placeholder="your@email.com"
            className="input placeholder:text-sm placeholder:text-white/30 sm:h-[80px] sm:w-[400px] sm:placeholder:text-xl"
            name="emailHomePageSub"
            type="email"
          />
        </div>
        <button className="buttonSub sm:h-[80px] sm:w-[200px]">
          Subscribe
        </button>
      </div>
    </div>
  );
}
