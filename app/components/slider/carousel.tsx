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

const EmblaCarousel: React.FC<PropType> = (props) => {
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
    [emblaMainApi, emblaThumbsApi],
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
      <div className="embla__viewport rounded-xl" ref={emblaMainRef}>
        <div className="embla__container aspect-video xl:aspect-auto">
          {slides.map((slide, index) => (
            <div className="embla__slide group" key={index}>
              <div className="embla__slide__number relative">
                <div className="absolute left-3 top-3 z-10 flex max-h-[70dvh] max-w-[90dvw] flex-col items-start justify-center gap-2 text-white sm:left-[6dvw] sm:top-[6dvh] sm:max-h-[100%] lg:gap-4 xl:left-60 xl:top-20 xl:gap-8">
                  <h1 className="text-sm md:text-xl lg:text-3xl">
                    {slide.mainTag}
                  </h1>
                  <h2 className="rounded-sm text-lg md:max-w-[50dvw] md:text-[2rem] md:leading-[35px] lg:max-w-[40dvw] lg:text-[2rem] xl:text-[3rem] xl:leading-[51px]">
                    {slide.header}
                  </h2>
                  <p className="line-clamp-3 max-w-[70dvw] text-xs sm:line-clamp-5 sm:max-w-[50dvw] md:text-sm lg:max-w-[40dvw] lg:text-lg">
                    {slide.description}
                  </p>
                  <Button
                    variant="ghost"
                    className="relative overflow-visible rounded-lg bg-background/30 px-12 font-bold opacity-100 shadow-xl after:absolute after:inset-0 after:z-[-1] after:rounded-sm after:bg-background/40 after:transition after:!duration-500 after:content-[''] hover:-translate-y-1 hover:after:scale-150 hover:after:opacity-0 light:text-black light:hover:text-blue-500 dark:bg-black/50 dark:text-white dark:hover:bg-slate-700 dark:hover:text-blue-500 lg:opacity-0 lg:group-hover:opacity-100 2xl:hidden"
                    // radius="lg"
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
                    className="relative hidden h-[70px] max-h-[300px] max-w-[500px] overflow-visible rounded-lg bg-background/30 px-12 text-[2rem] font-bold opacity-100 shadow-xl after:absolute after:inset-0 after:z-[-1] after:rounded-sm after:bg-background/40 after:transition after:!duration-500 after:content-[''] hover:-translate-y-1 hover:after:scale-150 hover:after:opacity-0 light:text-black light:hover:text-blue-500 dark:bg-black/50 dark:text-white dark:hover:bg-slate-700 dark:hover:text-blue-500 lg:opacity-0 lg:group-hover:opacity-100 2xl:flex"
                    // radius="lg"
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
                <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-black/35 to-white/10">
                  {" "}
                </div>
                <img src={slide.img} className="h-full w-full"></img>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="btns-carousel absolute bottom-2 left-3 z-10 space-x-6 sm:space-x-10 md:bottom-10 md:left-10 lg:bottom-[6dvh] lg:left-[6dvh] xl:bottom-10 xl:left-60">
        <Button
          className="embla__prev h-auto w-auto border-blue-300 text-white"
          onClick={scrollPrev}
          isIconOnly
          aria-label="Previous"
          radius="sm"
          variant="bordered"
          size="lg"
        >
          <IconArrowBadgeLeftFilled className="w-10 sm:h-10 sm:w-20 md:h-12 md:w-20 lg:w-24" />
        </Button>
        <Button
          className="embla__next h-auto w-auto border-blue-300 text-white"
          onClick={scrollNext}
          isIconOnly
          aria-label="Next"
          radius="sm"
          variant="bordered"
          size="lg"
        >
          <IconArrowBadgeRightFilled className="w-10 sm:h-10 sm:w-20 md:h-12 md:w-20 lg:w-24" />
        </Button>
      </div>
      <div className="embla-thumbs absolute bottom-0 right-0 z-10 w-fit rounded-lg md:bottom-10 md:right-10">
        <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
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
