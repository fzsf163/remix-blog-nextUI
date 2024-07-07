import { NavLink } from "@remix-run/react";
import { useRef, useState } from "react";
import { IconArrowRight } from "@tabler/icons-react";
export default function SecondaryNav() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [opened, setOpend] = useState(false);

  function changeOpen() {
    if (buttonRef.current == null) return;
    if (opened === false) {
      buttonRef.current?.classList.add("opened");
      setOpend(true);
    }
    if (opened === true) {
      buttonRef.current?.classList.remove("opened");
      setOpend(false);
    }
  }
  const routes = [
    { label: "dashboard", to: "/admin/dashboard" },
    { label: "home options", to: "/admin/homeOptions" },
    { label: "about options", to: "/admin/aboutOptions" },
    { label: "request options", to: "/admin/requestOptions" },
    { label: "create blog", to: "/admin/createBlog" },
  ];
  return (
    <div
      className="relative flex flex-col items-center justify-center"
      style={{ fontFamily: "K2D" }}
    >
      <button
        className="menu"
        aria-label="Side Menu"
        ref={buttonRef}
        onClick={changeOpen}
      >
        <svg width="50" height="50" viewBox="0 0 100 100">
          <path
            className="line line1"
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          />
          <path className="line line2" d="M 20,50 H 80" />
          <path
            className="line line3"
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
          />
        </svg>
      </button>

      <div
        className={`absolute left-0 top-16 flex flex-col items-center justify-center gap-5 overflow-hidden rounded-md bg-blue-100  dark:bg-neutral-500 backdrop-blur-sm ${opened ? " h-[17rem] w-[18rem]" : "h-0 w-0"} duration-[4s] ease-in-out transition-size`}
      >
        {routes.map((route, index) => {
          return (
            <NavLink key={route.label} to={route.to}>
              {({ isActive, isPending, isTransitioning }) => (
                <div
                  className={`text-xl capitalize ${isActive ? "text-purple-400 dark:text-green-300" : ""} transition-color group relative duration-100 ease-in-out`}
                  onClick={changeOpen}
                >
                  <p className="transition-color group relative flex items-center justify-center gap-2 text-nowrap duration-300 ease-in-out hover:text-purple-600 dark:hover:text-purple-300">
                    <span className="absolute left-0 top-2 -translate-x-[200px] -rotate-45 transition-transform duration-500 ease-in-out group-hover:-translate-x-[31px]">
                      <IconArrowRight
                        stroke={2}
                        color="purple"
                        className="opacity-50"
                      />
                    </span>
                    {route.label}
                  </p>
                  <span className="absolute -bottom-1 left-0 h-1 w-0 bg-blue-500 transition-all duration-300 ease-in-out group-hover:w-[100%]"></span>
                </div>
              )}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}
