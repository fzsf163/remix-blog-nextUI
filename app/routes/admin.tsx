import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  redirect,
} from "@remix-run/node";
import { authenticator } from "~/utils/auth.server";
import {
  destroySession,
  getSession,
  requireUserSession,
} from "~/utils/session.server";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formdata = await request.formData();
  const intent = formdata.get("intent");
  const _session = await getSession(request.headers.get("Cookie"));
  if (intent === "logout") {
    await authenticator.logout(request, {
      redirectTo: "/",
      headers: {
        "Set-Cookie": await destroySession(_session),
      },
    });
  }
  return null;
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const session = await requireUserSession(request);
  const userID = session?.data?.sessionKey?.userID;
  if (userID) {
    return redirect("/dashboard");
  } else {
    return redirect("/");
  }

  return userID;
};
