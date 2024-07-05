import { Tabs, Tab, Chip } from "@nextui-org/react";
import { useEffect, useState } from "react";
import {
  IconArrowDown,
  IconArrowRight,
  IconBrain,
  IconBusinessplan,
  IconGlass,
  IconHeartRateMonitor,
  IconHearts,
  IconSpiral,
  IconWall,
} from "@tabler/icons-react";
import { Link, useSearchParams } from "@remix-run/react";
let tabs = [
  {
    id: "all",
    label: "All",
    icon: <IconWall stroke={2} color="green" />,
    content: [
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/1.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/alps-6706182_640.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/boat-3062045_1280.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/clouds-3994154_640.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/fish-5265096_640.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/forest-6589852_640.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/lighting-3489394_640.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/love-3061483_640.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/nature-3082832_640.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/nature-7421337_640.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/winter-4021090_640.jpg",
        to: "#",
      },
    ],
  },
  {
    id: "sprituality",
    label: "Sprituality",
    icon: <IconSpiral stroke={2} color="blue" />,
    content: [
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/1.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/alps-6706182_640.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/boat-3062045_1280.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/clouds-3994154_640.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/fish-5265096_640.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/forest-6589852_640.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/lighting-3489394_640.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/love-3061483_640.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/nature-3082832_640.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/nature-7421337_640.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/winter-4021090_640.jpg",
        to: "#",
      },
    ],
  },
  {
    id: "relationship",
    label: "Relationship",
    icon: <IconHearts stroke={2} color="red" />,
    content: [
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/1.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/alps-6706182_640.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/boat-3062045_1280.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/clouds-3994154_640.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/fish-5265096_640.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/forest-6589852_640.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/lighting-3489394_640.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/love-3061483_640.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/nature-3082832_640.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/nature-7421337_640.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/winter-4021090_640.jpg",
        to: "#",
      },
    ],
  },
  {
    id: "lifestyle",
    label: "Lifestyle",
    icon: <IconGlass stroke={2} color="purple" />,
    content: [
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/1.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/alps-6706182_640.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/boat-3062045_1280.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/clouds-3994154_640.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/fish-5265096_640.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/forest-6589852_640.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/lighting-3489394_640.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/love-3061483_640.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/nature-3082832_640.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/nature-7421337_640.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/winter-4021090_640.jpg",
        to: "#",
      },
    ],
  },
  {
    id: "mental health",
    label: "Mental health",
    icon: <IconBrain stroke={2} color="gray" />,
    content: [
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/1.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/alps-6706182_640.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/boat-3062045_1280.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/clouds-3994154_640.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/fish-5265096_640.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/forest-6589852_640.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/lighting-3489394_640.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/love-3061483_640.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/nature-3082832_640.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/nature-7421337_640.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/winter-4021090_640.jpg",
        to: "#",
      },
    ],
  },
  {
    id: "money",
    label: "Money",
    icon: <IconBusinessplan stroke={2} color="orange" />,
    content: [
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/1.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/alps-6706182_640.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/boat-3062045_1280.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/clouds-3994154_640.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/fish-5265096_640.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/forest-6589852_640.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/lighting-3489394_640.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/love-3061483_640.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/nature-3082832_640.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/nature-7421337_640.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/winter-4021090_640.jpg",
        to: "#",
      },
    ],
  },
  {
    id: "health",
    label: "Health",
    icon: <IconHeartRateMonitor stroke={2} color="brown" />,
    content: [
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/1.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/alps-6706182_640.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/boat-3062045_1280.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/clouds-3994154_640.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/fish-5265096_640.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/forest-6589852_640.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/lighting-3489394_640.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/love-3061483_640.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/nature-3082832_640.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/nature-7421337_640.jpg",
        to: "#",
      },
      {
        title: "Very big title of the blog yo yooooo yoyoyo",
        bgimg: "/blogspage-cards/winter-4021090_640.jpg",
        to: "#",
      },
    ],
  },
];

export default function CategoriesTabTop() {
  // must be capital , same as label
  const [searchParams, setSearchParams] = useSearchParams();
  let searchCategory = searchParams.get("category");
  const [selected, setSelected] = useState(searchCategory ?? "All");

  useEffect(() => {
    setSearchParams(
      new URLSearchParams({ category: String(selected) }).toString(),
      { preventScrollReset: true, relative: "path" },
    );
  }, [selected]);
  return (
    <div className="flex w-full flex-col items-center justify-start px-4">
      <Tabs
        aria-label="Categories"
        selectedKey={selected}
        onSelectionChange={(x) => {
          setSelected(x.toString());
        }}
        // isVertical
        items={tabs}
        variant="bordered"
        classNames={{
          cursor: "bg-[#d1dcf0] dark:bg-[#1c283a] backdrop-shadow-sm",
          base: " rounded-xl bg-transparent w-fit",
          tabList: "p-4 shadow-md  flex-wrap flex-row  xl:flex-nowrap",
          tab: "flex justify-start px-4 py-6 w-full",
          panel: "w-fit p-5 m-auto",
          tabContent:
            "group-data-[selected=true]:text-gray-800 group-data-[selected=true]:font-bold  dark:group-data-[selected=true]:text-gray-100",
        }}
        className="m-auto"
      >
        {tabs.map((tab, index) => {
          return (
            <Tab
              key={tab.label}
              id={tab.label}
              title={
                <div className="flex items-center space-x-2 capitalize">
                  <span className="size-6 text-blue-200"> {tab.icon}</span>
                  <span> {tab.label}</span>
                  <Chip size="sm" variant="bordered">
                    {Math.floor(Math.random() * 9)}
                  </Chip>
                </div>
              }
            >
              <div className="sapce-x-10 xl:colums-4 columns-1 gap-3 sm:columns-2 lg:columns-3 2xl:columns-4">
                {/* cards */}
                {tab.content.map((blog, index) => {
                  return (
                    <div
                      // style={{
                      //   backgroundImage: "url('/blogspage-cards/1.jpg')",
                      //   objectFit: "contain",
                      //   backgroundRepeat: "no-repeat",
                      //   backgroundSize: "100% 100%",
                      //   backgroundPosition: "center center",
                      // }}
                      className="group relative mb-4 flex w-fit max-w-[24rem] flex-col items-center justify-center rounded-lg text-white 2xl:w-fit"
                      key={blog.title + index}
                    >
                      <div className="absolute left-0 top-0 z-10 h-fit w-fit text-wrap break-words rounded-lg bg-black/30 p-3 font-semibold backdrop-blur-sm lg:text-base xl:text-xl">
                        {blog.title}
                      </div>
                      <div className="aspect-auto w-fit overflow-hidden rounded-lg">
                        <img
                          src={blog.bgimg}
                          className="w-full rounded-lg p-0 transition-transform duration-700 ease-soft-spring group-hover:scale-110 md:min-h-[20rem] xl:h-full"
                        ></img>
                      </div>
                      <Link to={blog.to}>
                        <button className="absolute bottom-0 left-0 z-10 flex w-full items-center justify-center gap-2 rounded-lg bg-black/30 py-4 text-lg backdrop-blur-sm transition-colors duration-250 ease-in-out hover:text-blue-200">
                          Read More{" "}
                          <span>
                            <IconArrowRight strokeWidth={2}></IconArrowRight>
                          </span>
                        </button>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </Tab>
          );
        })}
      </Tabs>
    </div>
  );
}
