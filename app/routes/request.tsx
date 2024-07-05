import RequestForm from "~/components/request-inputs/request-form";
import { IconAsterisk } from "@tabler/icons-react";
export default function RouteComponent() {
  return (
    <div className="m-auto mb-20 w-full max-w-[50rem] py-4 space-y-6">
      <div className="space-y-2">
        <h1
          style={{ fontFamily: "K2D" }}
          className="text-3xl font-semibold capitalize"
        >
          Let's make a request for blog
        </h1>{" "}
        <p className="flex items-start justify-start text-gray-400">
          <span>
            <IconAsterisk stroke={2} className="size-4" color="red" />
          </span>{" "}
          All of the data added here will not be disclosed
        </p>
      </div>
      <div>
        <RequestForm></RequestForm>
      </div>
      <button className="submit-button">Submit</button>
    </div>
  );
}
