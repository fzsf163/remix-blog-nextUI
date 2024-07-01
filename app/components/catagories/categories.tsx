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
    <div className="flex items-center justify-center flex-wrap gap-2 mx-2 sm:gap-10 text-white cursor-pointer">
      {categories.map((c, i) => {
        return (
          <div
            className="relative size-[100px] text-sm sm:text-xl md:text-2xl lg:text-3xl  sm:size-[200px] rounded-lg"
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
                <span>
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
