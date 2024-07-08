import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { authenticator } from "~/utils/auth.server";
import { requireUserSession } from "~/utils/session.server";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formdata = await request.formData();
  const intent = formdata.get("intent");

  if (intent === "logout") {
    await authenticator.logout(request, { redirectTo: "/login" });
  }
  return null;
};


export const loader = async ({ request }: LoaderFunctionArgs) => {
  const session = await requireUserSession(request);
  return null;
};
