import { Button } from "@nextui-org/react";
import { IconArrowRight } from "@tabler/icons-react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
} from "@nextui-org/react";
import "./meet-author.css";
export default function MeetAuthor() {
  return (
    <div className="parent-author m-auto flex items-center justify-center gap-2 rounded-lg bg-slate-500/30 p-4 xl:w-[60%]">
      <div className="m-auto flex w-[700px] flex-col items-start justify-center gap-10 rounded-lg p-10">
        <div className="flex flex-col items-start capitalize">
          <h1 className="font-bold light:text-black/60 dark:text-white/60 sm:text-4xl">
            Roksana Chowdhury
          </h1>
          <h2 className="font-semibold light:text-black/50 dark:text-white/50 sm:text-2xl">
            Author and Creative Director
          </h2>
        </div>

        <div className="">
          {" "}
          <p className="w-fit sm:text-justify font-semibold sm:text-xl sm:leading-10">
            Blogs that changes your life forever is here. Written by Roksana Chowdhury. Integrating science of living and science of mind in one
            place. Going beyond and diving deep in the infinite world of
            thoughts and imagination.
          </p>
        </div>

        <div className="">
          <Button
            endContent={<IconArrowRight></IconArrowRight>}
            className="h-[5rem] w-[15rem] bg-white/80 text-xl font-bold text-black"
          >
            Meet Author
          </Button>
        </div>
      </div>
      <div className="">
        <Image
          isBlurred
          isZoomed
          className="h-full object-cover hidden sm:block"
          radius="lg"
          src="/public/auhtor-image/1.jpg"
        ></Image>
      </div>
    </div>
  );
}
