import "./socialcard.css";
import { IconHeartPlus } from "@tabler/icons-react";
const socials = [
  { logo: "/social-svg/facebook.svg", count: 4191423064, name: "fb" },
  { logo: "/social-svg/x.svg", count: 735660815, name: "x" },
  { logo: "/social-svg/insta.svg", count: 59536144, name: "insta" },
  { logo: "/social-svg/tumbler.svg", count: 87298644, name: "tumbler" },
  { logo: "/social-svg/pin.svg", count: 814761197, name: "pin" },
  { logo: "/social-svg/snap.svg", count: 23319583, name: "snap" },
];

export default function Social() {
  // format the number
  const formatter = Intl.NumberFormat("en", { notation: "compact" });
  const numberToDisplay = formatter.format(40000000);
  return (
    <div className="flex items-center justify-center gap-5">
      {socials.map((s, index) => {
        return (
          <div className="card" key={index}>
            <div className="first-content">
              <span>
                {" "}
                <div className="m-auto w-fit space-y-7 text-center">
                  <div
                    className="m-auto size-20 rounded-lg"
                    aria-label={s.name}
                  >
                    <img src={s.logo}></img>
                  </div>
                  <div className="text-2xl font-bold">
                    {formatter.format(s.count)}
                  </div>
                </div>
              </span>
            </div>
            <div className="second-content">
              <span className="flex items-center justify-center">
                Follow <IconHeartPlus stroke={2} />
              </span>
            </div>
          </div>
        );
      })}
      {/* <div className="card">
        <div className="first-content">
          <span>
            {" "}
            <div className="m-auto w-fit text-center">
              <div className="m-auto size-24 rounded-lg bg-black p-5">
                <img src={x}></img>
              </div>
              <div className="p-4 text-2xl font-bold">{numberToDisplay}</div>
            </div>
          </span>
        </div>
        <div className="second-content">
          <span>Follow</span>
        </div>
      </div> */}
    </div>
  );
}
