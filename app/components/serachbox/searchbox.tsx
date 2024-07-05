import { IconSearch } from "@tabler/icons-react";
import "./searchbox.css";
import cross from "../../../public/searchboxcross/cross.svg";
import { useRef, useState } from "react";
export default function SearchBox() {
  const [value, setValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const resetFocus = () => {
    if (inputRef) {
      inputRef.current?.blur();
    }
  };
  return (
    <div className="relative m-auto flex w-fit items-center justify-center gap-2 rounded-lg bg-blue-400/20 p-4 shadow-lg backdrop-blur-sm">
      <label
        htmlFor="blogSearchInput"
        aria-label="search icon as label"
        className=""
      >
        <IconSearch
          stroke={2}
          className="size-7 cursor-pointer bg-transparent shadow-black drop-shadow-2xl"
        />
      </label>
      <input
        ref={inputRef}
        type="search"
        name="blogSearch"
        id="blogSearchInput"
        value={value}
        onKeyDown={(x) => {
          if (x.key === "Escape") {
            resetFocus();
          }
        }}
        onChange={(v) => setValue(v.currentTarget.value)}
        className="peer h-[40px] w-[10rem] border-b-2 border-current bg-transparent px-3 py-4 placeholder-slate-400 caret-purple-700 outline-none transition-all duration-500 ease-in-out placeholder:font-medium focus-within:w-[60rem] focus-within:font-semibold light:placeholder:text-black/40 md:w-[30rem]"
        aria-label="search input"
        placeholder="search for blogs"
        style={{
          fontFamily: "K2D",
        }}
      />
      <button
        className={`ease-soft-spring" absolute bottom-7 right-4 size-3 transition-opacity duration-700 ${value.length > 0 ? "opacity-100" : "opacity-0"}`}
        onClick={() => setValue("")}
      >
        <img src={cross} alt="clear search input" />
      </button>
    </div>
  );
}
