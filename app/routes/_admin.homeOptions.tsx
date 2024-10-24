import { Checkbox, Tooltip } from "@nextui-org/react";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { IconSquareCheck } from "@tabler/icons-react";
import { db } from "~/utils/db.server";
import { requireUserSession } from "~/utils/session.server";

export async function loader({ request }: LoaderFunctionArgs) {
  await requireUserSession(request);
  try {
    const posts = await db.post.findMany({
      where: {
        published: true,
      },
      select: {
        id: true,
        title: true,
      },
    });
    return posts;
  } catch (error) {
    console.log("🚀 ~ loader ~ error:", error);
  }
}

// icon for checkBox
const CheckIcon = ({ ...props }) => {
  // avoid passing non-DOM attributes to svg
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, react/prop-types
  const { isSelected, isIndeterminate, disableAnimation, ...otherProps } =
    props;
  return <IconSquareCheck stroke={3} {...otherProps}></IconSquareCheck>;
};
const layerModel = [
  { label: "add to carousel", id: 1, sub: "Select posts for carousel" },
  { label: "featured articles", id: 2, sub: "Select posts for featured" },
  { label: "trending blog", id: 3, sub: "Select posts for trending" },
];
export default function HomeOptions() {
  const loaderdata = useLoaderData<typeof loader>();
  return (
    <div className="mx-auto w-fit space-y-10 py-5 sm:w-[70%]">
      <h1 className="text-4xl font-bold">Home Options</h1>
      {/* serialize the order list */}
      <div className="space-y-10">
        {layerModel.map((L) => {
          return (
            <div key={L.id}>
              <p className="text-xl font-semibold capitalize">{L.label}</p>
              <p className="my-3 font-bold text-gray-500">{L.sub}</p>
              <div className="w-full rounded bg-neutral-300 p-4 text-xl font-semibold shadow-md">
                {loaderdata.length <= 0 ? (
                  "No data found"
                ) : (
                  <Checkbox
                    classNames={{
                      // base: "bg-green-600 m-5",
                      label: "flex flex-col",
                      // icon: "size-10",
                      wrapper: "bg-neutral-300 border border-blue-400",
                    }}
                    icon={<CheckIcon></CheckIcon>}
                    size="lg"
                    radius="sm"
                    value="bog1"
                    onChange={(x) => {
                      console.log("Checked:", x.currentTarget.checked);
                      console.log("Value:", x.currentTarget.value);
                    }}
                  >
                    Select This blog
                  </Checkbox>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <p className="text-xl font-semibold capitalize">author section</p>
        <div className="my-3 flex flex-col items-start gap-2">
          <label
            className="font-bold text-gray-500"
            htmlFor="authorShortDescription"
          >
            Short Description For Home page
          </label>
          <textarea
            className="w-full rounded bg-neutral-300 px-3 py-5 text-xl font-semibold text-black placeholder:text-gray-500"
            placeholder="write a small description..."
            name="authorShortDescription"
            id="authorShortDescription"
            rows={5}
          />
        </div>
      </div>
      <br />
      <Tooltip content="Submit or Update Data">
        <button className="submit-button" type="submit">
          Submit
        </button>
      </Tooltip>
    </div>
  );
}
