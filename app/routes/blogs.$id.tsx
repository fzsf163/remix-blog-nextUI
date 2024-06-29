import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLocation } from "@remix-run/react";

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  console.log("🚀 ~ loader ~ params:", params);
  //   console.log("🚀 ~ loader ~ request:", request.body);
  const url = new URL(request.url);
  const id = url.searchParams.get("query");
  console.log("🚀 ~ loader ~ id:", id)
  return true;
};

export default function SingleBlog() {
  return <div>Single blog route</div>;
}
