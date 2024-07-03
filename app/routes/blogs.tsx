import { Spinner } from "@nextui-org/react";
import { ClientOnly } from "remix-utils/client-only";
import CategoriesTabTop from "~/components/categories-blog-page/tabs";
import SearchBox from "~/components/serachbox/searchbox";

export default function RouteComponent() {
  return (
    <div className="max-w-screen-3xl m-auto capitalize">
      <SearchBox></SearchBox>
      <ClientOnly
        fallback={
          <Spinner
            label="Loading...reload page if nothing happens"
            color="warning"
            size="lg"
            className="flex items-center justify-center"
            classNames={{
              label: "font-bold",
            }}
          />
        }
      >
        {() => <CategoriesTabTop></CategoriesTabTop>}
      </ClientOnly>
    </div>
  );
}
