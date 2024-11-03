import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import CustomCells from "~/components/poststable/custiomcell";
import { TablePropsTypes } from "~/components/poststable/types";
import StatCard from "~/components/statCard/statCard";
import { db } from "~/utils/db.server";
import { requireUserSession } from "~/utils/session.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  await requireUserSession(request);
  const postCount = await db.post.count();
  const commentsCount = await db.comments.count();
  const viewsCount = await db.post.findMany({
    select: {
      readCount: true,
    },
  });
  const tablePosts = await db.post.findMany({
    select: {
      title: true,
      author: {
        select: {
          name: true,
        },
      },
      thumbnail: true,
      createdAt: true,
      published: true,
      updatedAt: true,
      id: true,
    },
  });
  const shareCount = 3000;
  return { postCount, commentsCount, viewsCount, shareCount, tablePosts };
};
export default function Dashboard() {
  // const userID = useOutletContext();
  const { commentsCount, postCount, shareCount, viewsCount, tablePosts } =
    useLoaderData<typeof loader>();
  const tablePostData: TablePropsTypes[] = tablePosts.map((post) => ({
    id: post.id,
    createdAt: post.createdAt,
    updatedAt: post.updatedAt,
    title: post.title,
    published: post.published, // This will work as boolean is acceptable in the type
    thumbnail: post.thumbnail,
    author: post.author.name, // Extract just the name from the author object
  }));
  console.log(
    "🚀 ~ consttablePostData:TablePropsTypes[]=tablePosts.map ~ tablePostData:",
    tablePostData,
  );
  const formatter = Intl.NumberFormat("en", { notation: "compact" });
  const sumOfViewCounts = viewsCount.reduce((a, b) => {
    const n = b.readCount!;
    return a + n;
  }, 0);
  return (
    <div className="m-auto my-5 w-full space-y-10 px-4 py-5 sm:w-[60%]">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <div className="flex flex-wrap items-center justify-center gap-6">
        <StatCard
          count={formatter.format(postCount)}
          forStat={"Posts"}
          icon={"dashboardcards/typewriter-write-type-writer-svgrepo-com.svg"}
        ></StatCard>
        <StatCard
          count={formatter.format(commentsCount)}
          forStat={"Comments"}
          icon={"dashboardcards/comment-5-svgrepo-com.svg"}
        ></StatCard>
        <StatCard
          count={formatter.format(sumOfViewCounts)}
          forStat={"Reads"}
          icon={"dashboardcards/view-grid-many-svgrepo-com.svg"}
        ></StatCard>
        <StatCard
          count={formatter.format(shareCount)}
          forStat={"Shares"}
          icon={"dashboardcards/share-svgrepo-com.svg"}
        ></StatCard>
      </div>
      <div>
        <h1 className="text-4xl font-bold">Posts</h1>
        <br />
        <CustomCells posts={tablePostData}></CustomCells>
      </div>
    </div>
  );
}
