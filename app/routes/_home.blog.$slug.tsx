import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  console.log("🚀 ~ loader ~ params:", params);
  return params;
};

export default function SingleBlog() {
  const data = useLoaderData<typeof loader>();
  return <div>Single blog route {data.slug}</div>;
}
