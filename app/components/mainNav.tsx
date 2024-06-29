import { Link, useLocation, useNavigate } from "@remix-run/react";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  IconHomeFilled,
  IconLayoutGridFilled,
  IconDialpadFilled,
  IconArticleFilled,
} from "@tabler/icons-react";
const navItems = [
  {
    path: "/",
    name: "Home",
    icon: <IconHomeFilled></IconHomeFilled>,
  },
  {
    path: "/blogs",
    name: "Blogs",
    icon: <IconArticleFilled></IconArticleFilled>,
  },
  {
    path: "/about",
    name: "About",
    icon: <IconLayoutGridFilled></IconLayoutGridFilled>,
  },
  {
    path: "/contact",
    name: "Contact",
    icon: <IconDialpadFilled></IconDialpadFilled>,
  },
];

export default function NavItems() {
  let location = useLocation();
  let pathname = "" ?? "/";

  if (location.pathname) {
    pathname = location.pathname;
  }

  const [hoveredPath, setHoveredPath] = useState(pathname);

  return (
    <div className="hidden md:block   p-[0.4rem] rounded-md  z-[100] bg-slate-700/20 backdrop-blur-md text-black">
      <nav className="flex gap-2 relative justify-start w-full z-[100]  rounded-lg">
        {navItems.map((item, index) => {
          const isActive = item.path === pathname;
          return (
            <Link
              key={item.path}
              className={`px-4 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in ${
                isActive
                  ? "text-zinc-100"
                  : "light:text-black dark:text-white/70"
              }`}
              data-active={isActive}
              to={item.path}
              onMouseOver={() => setHoveredPath(item.path)}
              onMouseLeave={() => setHoveredPath(pathname)}
            >
              <span className="flex justify-center items-center gap-2 mix-blend-exclusion hover:text-white transition-all duration-100 ease-in-out">
                {" "}
                {item.icon} {item.name}
              </span>
              {item.path === hoveredPath && (
                <motion.div
                  className="absolute bottom-0 left-0 h-full bg-stone-800/90 rounded-md -z-10 dark:bg-zinc-200"
                  layoutId="navbar"
                  aria-hidden="true"
                  style={{
                    width: "100%",
                  }}
                  transition={{
                    type: "spring",
                    bounce: 0.1,
                    stiffness: 130,
                    damping: 9,
                    duration: 0.3,
                  }}
                />
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
