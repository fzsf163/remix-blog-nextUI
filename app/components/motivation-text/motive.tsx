import { IconQuote } from "@tabler/icons-react";

export default function MotivationalText() {
  return (
    <div
      style={{
        backgroundImage: "url('/public/motivation/1.jpg')",
        objectFit: "contain",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundPosition: "center center",
      }}
      className="pointer-events-none relative m-auto h-auto w-[90%] select-none rounded-lg p-4 text-justify text-white sm:text-center md:h-[25rem] xl:h-[40rem]"
    >
      <div className="flex h-full items-center justify-center bg-black/40 sm:gap-2">
        <div className="absolute left-2 top-[10%] sm:left-[8%]">
          <IconQuote stroke={2} className="rotate-180 md:size-20" />
        </div>
        <h1 className="w-[80%] text-sm sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl">
          Leap into the abyss of mind with us. Traverse the cosmic
          constellations of mental health. Leap into the abyss of mind with us.
        </h1>
        <div className="">
          <IconQuote
            stroke={2}
            className="absolute bottom-[10%] right-[10%] md:size-20"
          />
        </div>
      </div>
    </div>
  );
}
