import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Button,
  Tooltip,
} from "@nextui-org/react";
import { IconBook2, IconCalendarEvent } from "@tabler/icons-react";

const trending = [
  {
    title: "Title of the blog yo yo oyo yo",
    readingTime: "3 min",
    published: "12-4-24",
    img: "https://nextui.org/images/hero-card-complete.jpeg",
  },
  {
    title: "Title of the blog yo yo oyo yo",
    readingTime: "3 min",
    published: "12-4-24",
    img: "https://nextui.org/images/hero-card-complete.jpeg",
  },
  {
    title: "Title of the blog yo yo oyo yo",
    readingTime: "3 min",
    published: "12-4-24",
    img: "https://nextui.org/images/hero-card-complete.jpeg",
  },
  {
    title: "Title of the blog yo yo oyo yo",
    readingTime: "3 min",
    published: "12-4-24",
    img: "https://nextui.org/images/hero-card-complete.jpeg",
  },
];
export default function TrendingPost() {
  return (
    <div className="m-auto text-center">
      <h1 className="fa-text text-xl font-bold uppercase sm:text-2xl md:text-5xl lg:text-6xl xl:text-8xl 2xl:text-9xl">
        Trending Posts
      </h1>

      <div className="row-span-2 mt-10 inline-grid w-fit grid-cols-12 rounded-xl bg-slate-300 p-10 shadow-md sm:gap-10">
        {trending.map((trend, index) => {
          return (
            <Tooltip
              key={index + 1}
              content="See Post"
              showArrow
              className="rounded-md"
            >
              <div
                key={index}
                className="col-span-12 flex w-fit cursor-pointer justify-center gap-4 rounded-xl p-3 shadow-lg transition-colors duration-400 ease-in-out hover:text-white light:bg-blue-200 hover:light:bg-blue-400 dark:bg-slate-500 hover:dark:bg-slate-400 lg:col-span-6 xl:items-start"
              >
                <Image
                  removeWrapper
                  alt="Card background"
                  className="hidden rounded-lg object-cover sm:block"
                  src={trend.img}
                  width={200}
                />
                <Image
                  removeWrapper
                  alt="Card background"
                  className="rounded-lg object-cover sm:hidden"
                  src={trend.img}
                  width={100}
                />
                <div className="flex h-full max-w-[400px] flex-col items-start gap-4 pt-3">
                  <h1 className="md:text-md text-start text-xs font-bold capitalize sm:text-sm lg:text-lg xl:text-2xl">
                    {trend.title}
                  </h1>
                  <div className="flex items-start justify-between sm:gap-10">
                    <Button
                      isDisabled
                      startContent={<IconCalendarEvent stroke={2} />}
                      className="bg-transparent p-0 text-xs sm:text-sm md:text-lg"
                    >
                      {trend.published}
                    </Button>
                    <Button
                      isDisabled
                      startContent={<IconBook2 stroke={2} />}
                      className="bg-transparent p-0 text-xs sm:text-sm md:text-lg"
                    >
                      {trend.readingTime}
                    </Button>
                  </div>
                </div>
              </div>
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
}
