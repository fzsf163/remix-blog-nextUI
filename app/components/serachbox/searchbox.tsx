import { IconSearch } from "@tabler/icons-react";
import "./searchbox.css";
export default function SearchBox() {
  return (
    <div className="m-auto flex w-fit items-center justify-center gap-2 rounded-lg bg-white/20 p-4 backdrop-blur-sm">
      <label
        htmlFor="blogSearchInput"
        aria-label="search icon as label"
        className=""
      >
        <IconSearch stroke={3} className="size-7 drop-shadow-xl shadow-black" />
      </label>
      <input
        type="search"
        name="blogSearch"
        id="blogSearchInput"
        className="h-[40px] w-[200px] border-b-2 border-current bg-transparent px-3 py-4 caret-purple-700 outline-none transition-all duration-150 ease-in-out placeholder:font-medium light:placeholder:text-black/40"
        aria-label="search input"
        placeholder="search for blogs"
      />
    </div>
  );
}
