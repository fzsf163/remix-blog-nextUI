import { Tabs, Tab } from "@nextui-org/react";
import { useState } from "react";
import { IconArrowDown } from "@tabler/icons-react";
let tabs = [
  {
    id: "all",
    label: "All",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "sprituality",
    label: "Sprituality",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "relationship",
    label: "Relationship",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: "lifestyle",
    label: "Lifestyle",
    content:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "mental health",
    label: "Mental health",
    content:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "money",
    label: "Money",
    content:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "health",
    label: "Health",
    content:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];
export default function CategoriesTabTop() {
  const [show, setShow] = useState<boolean>(true);
  return (
    <div className="flex w-full flex-col items-center">
      <button
        className="mt-2 w-full font-semibold bg-white/40 p-5 backdrop-blur-sm sm:hidden flex justify-center items-center"
        onClick={() => setShow(!show)}
      >
        Categories <span className={`${show ? "rotate-180" :""} transition-transform duration-500 ease-soft-spring`}><IconArrowDown stroke={2} /></span>
      </button>
      <Tabs
        aria-label="Categories tabs"
        items={tabs}
        size="lg"
        classNames={{
          tabList: ` gap-0 sm:gap-3 md:gap-6 rounded-none p-0  border-divider  text-center w-fit flex flex-col sm:flex-row items-center  transition-all duration-500 ease-in-out sm:h-12 ${show ? "h-[350px]" : "h-0"}`,
          cursor: "w-full bg-red-300 h-1",
          tab: "max-w-fit px-2 h-12 ",
          tabContent:
            "group-data-[selected=true]:text-purple-400 group-data-[selected=true]:font-bold transition-color duration-500 ease-in-out",
        }}
        variant="underlined"
        className="peer-hover:bg-green-900 sm:block"
      >
        {(item) => (
          <Tab key={item.id} title={<div>{item.label}</div>}>
            <div className="w-full bg-blue-400 p-4">
              <div className="m-auto w-fit bg-green-300">{item.content}</div>
            </div>
          </Tab>
        )}
      </Tabs>
    </div>
  );
}
