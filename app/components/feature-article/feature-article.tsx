import "./featured-article.css";
import { IconDirectionSignFilled } from "@tabler/icons-react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
const featuredArticles = [
  {
    cardtitleOne: "this is card Title one",
    cardtitleTwo: "this is card Title Two",
    img: "https://random-image-pepebigotes.vercel.app/api/random-image",
    cardfooter: "this is card footer",
    id: "1",
  },
  {
    cardtitleOne: "this is card Title one",
    cardtitleTwo: "this is card Title Two",
    img: "https://random-image-pepebigotes.vercel.app/api/random-image",
    cardfooter: "this is card footer",
    id: "2",
  },
  {
    cardtitleOne: "this is card Title one",
    cardtitleTwo: "this is card Title Two",
    img: "https://random-image-pepebigotes.vercel.app/api/random-image",
    cardfooter: "this is card footer",
    id: "3",
  },
  {
    cardtitleOne: "this is card Title one",
    cardtitleTwo: "this is card Title Two",
    img: "https://random-image-pepebigotes.vercel.app/api/random-image",
    cardfooter: "this is card footer",
    id: "4",
  },
  {
    cardtitleOne: "this is card Title one",
    cardtitleTwo: "this is card Title Two",
    img: "https://random-image-pepebigotes.vercel.app/api/random-image",
    cardfooter: "this is card footer",
    id: "5",
  },
  {
    cardtitleOne: "this is card Title one",
    cardtitleTwo: "this is card Title Two",
    img: "https://random-image-pepebigotes.vercel.app/api/random-image",
    cardfooter: "this is card footer",
    id: "6",
  },
];
export default function FeaturedArticle() {
  return (
    <div className="text-center">
      <h1 className="fa-text text-xl font-bold uppercase sm:text-2xl md:text-5xl lg:text-6xl xl:text-8xl 2xl:text-9xl">
        Featured Article
      </h1>
      {/* cards */}
      <div className="inline-grid grid-cols-12 grid-rows-2 gap-3 p-3 sm:p-8 md:gap-8 lg:gap-20">
        {featuredArticles.map((article, index) => {
          return (
            <Card
              isFooterBlurred
              shadow="lg"
              className="col-span-12 m-auto h-fit w-fit max-w-[500px] rounded-lg bg-transparent md:col-span-6 md:w-[300px] lg:w-[400px] xl:col-span-4 2xl:w-[600px]"
              key={index + article.id}
            >
              <CardHeader className="absolute top-0 z-10 flex-col items-start rounded-md rounded-bl-none rounded-br-none bg-black/30 dark:border dark:border-default-100 dark:bg-black/80">
                <p className="text-tiny font-bold uppercase text-white/60">
                  {article.cardtitleOne}
                </p>
                <h4 className="text-xl font-medium capitalize text-white/90">
                  {article.cardtitleTwo}
                </h4>
              </CardHeader>
              <CardBody className="p-0">
                <Image
                  isZoomed
                  // removeWrapper
                  radius="none"
                  // width="100%"
                  alt="Relaxing app background"
                  className="z-0 h-full w-full rounded-none object-cover"
                  src={article.img}
                />
              </CardBody>
              <CardFooter className="absolute bottom-0 left-0 rounded-md rounded-tl-none rounded-tr-none bg-black/40 backdrop-blur-sm dark:border dark:border-default-100">
                <div className="flex flex-grow items-center gap-2">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-white/60">
                      <IconDirectionSignFilled />
                    </span>
                    <p className="text-tiny capitalize text-white/60">
                      {article.cardfooter}
                    </p>
                  </div>
                </div>
                <Button
                  radius="full"
                  size="lg"
                  className="bg-black/30 text-white backdrop-blur-lg dark:bg-white/40"
                >
                  Read More
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
