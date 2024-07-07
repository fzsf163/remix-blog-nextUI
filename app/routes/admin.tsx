import type { ActionFunctionArgs } from "@remix-run/node";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { Form, Outlet, redirect } from "@remix-run/react";
import { authenticator } from "~/utils/auth.server";
import { requireUserSession } from "~/utils/session.server";

export default function Admin() {
  return (
    <div>
      This is admin
      <Form method="POST">
        <button type="submit" name="intent" value="logout">
          Logout
        </button>
      </Form>
      <Outlet></Outlet>
    </div>
  );
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const session = await requireUserSession(request);
  const userID = session?.data?.sessionKey?.userID;
  console.log("🚀 ~ loader ~ userID:", userID);
  return { true: true };
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const formdata = await request.formData();
  console.log("🚀 ~ action ~ formdata:", formdata);
  const intent = formdata.get("intent");
  console.log("🚀 ~ action ~ intent:", intent);

  if (intent === "logout") {
    await authenticator.logout(request, { redirectTo: "/login" });
  }
  return null;
};
