import React, { useState, useEffect, useCallback } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import { Thumb } from "./EmblaCarouselThumbsButton";
import Autoplay from "embla-carousel-autoplay";
import "./carousel.css";
import { Button } from "@nextui-org/react";
import {
  IconArrowBadgeLeftFilled,
  IconArrowBadgeRightFilled,
  IconExternalLink,
} from "@tabler/icons-react";
import { useNavigate } from "@remix-run/react";

type PropType = {
  slides: {
    img: string;
    header: string;
    mainTag: string;
    description: string;
  }[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = props => {
  const navigate = useNavigate();
  const { slides, options } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options, [Fade()]);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: false,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  const scrollPrev = useCallback(() => {
    if (emblaMainApi) emblaMainApi.scrollPrev();
  }, [emblaMainApi]);

  const scrollNext = useCallback(() => {
    if (emblaMainApi) emblaMainApi.scrollNext();
  }, [emblaMainApi]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();

    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="embla relative">
      <div
        className="embla__viewport"
        ref={emblaMainRef}
      >
        <div className="embla__container aspect-video xl:aspect-auto">
          {slides.map((slide, index) => (
            <div
              className="embla__slide group"
              key={index}
            >
              <div className="embla__slide__number  relative">
                <div className="absolute max-h-[70dvh] max-w-[90dvw] sm:max-h-[100%] sm:top-[6dvh] left-3 top-3  sm:left-[6dvw]  xl:top-20 xl:left-60 z-10 text-white flex justify-center flex-col items-start gap-2 lg:gap-4 xl:gap-8">
                  <h1 className="text-sm md:text-xl lg:text-3xl">
                    {slide.mainTag}
                  </h1>
                  <h2 className="rounded-sm  text-lg md:text-[2rem] lg:text-[2rem]  xl:text-[3rem]  md:max-w-[50dvw] lg:max-w-[40dvw] md:leading-[35px]  xl:leading-[51px] ">
                    {slide.header}
                  </h2>
                  <p className=" text-xs md:text-sm lg:text-lg max-w-[70dvw] sm:max-w-[50dvw] lg:max-w-[40dvw] line-clamp-3  sm:line-clamp-5 ">
                    {slide.description}
                  </p>
                  <Button
                    variant="ghost"
                    className="opacity-100   lg:opacity-0 lg:group-hover:opacity-100 text-black  hover:text-blue-500 font-bold relative overflow-visible rounded-sm hover:-translate-y-1 px-12 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-sm after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0 2xl:hidden"
                    radius="sm"
                    // size
                    // fullWidth
                    endContent={<IconExternalLink stroke={2} />}
                    onClick={() =>
                      navigate({
                        pathname: `blogs/${index}`,
                        search: "?query=seninddata",
                      })
                    }
                  >
                    Read More
                  </Button>
                  <Button
                    variant="ghost"
                    className="opacity-100   lg:opacity-0 lg:group-hover:opacity-100 text-black  hover:text-blue-500 font-bold relative overflow-visible rounded-sm hover:-translate-y-1 px-12 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-sm after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0 max-w-[500px] max-h-[300px] h-[70px] text-[2rem] hidden 2xl:flex"
                    radius="sm"
                    size="lg"
                    fullWidth
                    endContent={<IconExternalLink stroke={2} />}
                    onClick={() =>
                      navigate({
                        pathname: `blogs/${index}`,
                        search: "?query=seninddata",
                      })
                    }
                  >
                    Read More
                  </Button>
                </div>
                <div className="bg-gradient-to-r from-black/35 to-white/10 w-full  absolute top-0 left-0 h-full ">
                  {" "}
                </div>
                <img src={slide.img} className="w-full h-full"></img>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="btns-carousel absolute z-10 bottom-2 left-3   md:bottom-10  md:left-10 lg:bottom-[6dvh] lg:left-[6dvh] xl:bottom-10 xl:left-60 space-x-6 sm:space-x-10">
        <Button
          className="embla__prev text-white border-blue-300 w-auto h-auto"
          onClick={scrollPrev}
          isIconOnly
          aria-label="Previous"
          radius="sm"
          variant="bordered"
          size="lg"
        >
          <IconArrowBadgeLeftFilled className="w-10 sm:w-20 sm:h-10 md:w-20 md:h-12 lg:w-24" />
        </Button>
        <Button
          className="embla__next text-white border-blue-300 w-auto h-auto"
          onClick={scrollNext}
          isIconOnly
          aria-label="Next"
          radius="sm"
          variant="bordered"
          size="lg"
        >
          <IconArrowBadgeRightFilled className="w-10 sm:w-20 sm:h-10 md:w-20 md:h-12 lg:w-24" />
        </Button>
      </div>
      <div className="embla-thumbs w-fit absolute bottom-0 right-0 md:bottom-10 md:right-10 z-10 rounded-lg">
        <div
          className="embla-thumbs__viewport"
          ref={emblaThumbsRef}
        >
          <div className="embla-thumbs__container p-2">
            {slides.map((slide, index) => (
              <Thumb
                key={index}
                img={slide.img}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
