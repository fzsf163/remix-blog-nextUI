import { Link } from "@remix-run/react";
import "./categories.css";
import { IconArrowRight } from "@tabler/icons-react";
const categories = [
  { label: "spirituality", bgImg: "/public/categoriesimg/spirituality.jpg" },
  { label: "relationship", bgImg: "/public/categoriesimg/relationship.jpg" },
  { label: "lifestyle", bgImg: "/public/categoriesimg/lifestyle.jpg" },
  { label: "mental health", bgImg: "/public/categoriesimg/mentalhealth.jpg" },
  { label: "money", bgImg: "/public/categoriesimg/money.jpg" },
  { label: "health", bgImg: "/public/categoriesimg/health.jpg" },
];
export default function Categories() {
  return (
    <div className="mx-2 flex cursor-pointer flex-wrap items-center justify-center gap-2 text-white sm:gap-10">
      {categories.map((c, i) => {
        return (
          <div
            className="relative size-[100px] rounded-lg text-sm sm:size-[200px] sm:text-xl md:text-2xl"
            key={i}
            style={{
              backgroundImage: `url(${c.bgImg})`,
              backgroundPosition: "center center",
              objectFit: "cover",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
            }}
          >
            <div className="cardCategory h-full w-full">
              <strong className="capitalize">{c.label}</strong>
              {/* <div className="card__body">Get UI elements that help you stand out.</div> */}
              <Link to={"blogs"}>
                <span className="text-sm sm:text-xl md:text-2xl">
                  See Blogs <IconArrowRight></IconArrowRight>
                </span>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
