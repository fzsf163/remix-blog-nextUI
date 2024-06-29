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
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div
              className="embla__slide group"
              key={index}
            >
              <div className="embla__slide__number relative">
                <div className="absolute top-28 left-60 z-10 text-white flex justify-center flex-col items-start gap-8">
                  <h1 className="text-3xl">{slide.mainTag}</h1>
                  <h2 className="rounded-sm text-left  text-[3rem] max-w-[30dvw]  leading-[51px]">
                    {slide.header}
                  </h2>
                  <p className="text-lg max-w-[30dvw]  line-clamp-5">
                    {slide.description}
                  </p>
                  <Button
                    variant="ghost"
                    className="opacity-0 group-hover:opacity-100 text-black  hover:text-blue-500 font-bold relative overflow-visible rounded-sm hover:-translate-y-1 px-12 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-sm after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
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
                <div className="bg-gradient-to-r from-black/65 to-white/10 w-full h-full absolute">
                  {" "}
                </div>
                <img src={slide.img}></img>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="btns absolute z-10 bottom-60 left-60 space-x-10">
        <Button
          className="embla__prev text-white border-blue-300 w-auto h-auto"
          onClick={scrollPrev}
          isIconOnly
          aria-label="Previous"
          radius="sm"
          variant="bordered"
          size="lg"
        >
          <IconArrowBadgeLeftFilled
            width={100}
            height={50}
          />
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
          <IconArrowBadgeRightFilled
            width={100}
            height={50}
          />
        </Button>
      </div>
      <div className="embla-thumbs light light:bg-black/35 dark:bg-white/35 w-full backdrop-blur-lg py-3">
        <div
          className="embla-thumbs__viewport"
          ref={emblaThumbsRef}
        >
          <div className="embla-thumbs__container">
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
