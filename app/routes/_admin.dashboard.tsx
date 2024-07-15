import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useOutletContext } from "@remix-run/react";
import CustomCells from "~/components/poststable/custiomcell";
import StatCard from "~/components/statCard/statCard";
import { db } from "~/utils/db.server";
import { requireUserSession } from "~/utils/session.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const session = await requireUserSession(request);
  const userID = session?.data?.sessionKey?.userID;
  const postCount = await db.post.count();
  const commentsCount = await db.comments.count();
  const viewsCount = await db.post.findMany({
    select: {
      readCount: true,
    },
  });
  const shareCount = 3000;
  return { postCount, commentsCount, viewsCount, shareCount };
};

export default function Dashboard() {
  // const userID = useOutletContext();
  const { commentsCount, postCount, shareCount, viewsCount } =
    useLoaderData<typeof loader>();
  const formatter = Intl.NumberFormat("en", { notation: "compact" });
  const sumOfViewCounts = viewsCount.reduce((a, b) => {
    return +a + +b;
  }, 0);
  return (
    <div className="m-auto my-5 w-full sm:w-[60%] space-y-10 px-4 py-5">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <div className="flex flex-wrap items-center justify-center gap-6">
        <StatCard
          count={formatter.format(postCount)}
          forStat={"Posts"}
          icon={
            "/public/dashboardcards/typewriter-write-type-writer-svgrepo-com.svg"
          }
        ></StatCard>
        <StatCard
          count={formatter.format(commentsCount)}
          forStat={"Comments"}
          icon={"/public/dashboardcards/comment-5-svgrepo-com.svg"}
        ></StatCard>
        <StatCard
          count={formatter.format(sumOfViewCounts)}
          forStat={"Reads"}
          icon={"/public/dashboardcards/view-grid-many-svgrepo-com.svg"}
        ></StatCard>
        <StatCard
          count={formatter.format(shareCount)}
          forStat={"Shares"}
          icon={"/public/dashboardcards/share-svgrepo-com.svg"}
        ></StatCard>
      </div>
      <div>
        <h1 className="text-xl font-bold">Posts</h1>
        <br />
        <CustomCells></CustomCells>
      </div>
    </div>
  );
}
