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
      className="pointer-events-none m-auto h-[25rem] w-[90%] select-none rounded-lg text-white"
    >
      <div className="flex h-full items-center justify-center bg-black/20">
        <div>
          <IconQuote
            stroke={2}
            className="rotate-180 border border-green-500 size-10"
          />
        </div>
        <h1 className="text-3xl">
          Leap into the abyss of mind with us. Traverse the cosmic
          constellations of mental health.
        </h1>
        <div>
          <IconQuote stroke={2} className="border border-green-500" />
        </div>
      </div>
    </div>
  );
}
