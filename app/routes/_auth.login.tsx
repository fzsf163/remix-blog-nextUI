import { ActionFunctionArgs, json, LoaderFunctionArgs } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { authenticator } from "~/utils/auth.server";
import { sessionStorage } from "~/utils/session.server";
export default function LogIn() {
  const user = useLoaderData<typeof loader>();
  return (
    <div>
      {" "}
      <Form method="post" className="space-x-5">
        <input type="email" name="email" required placeholder="email" />
        <input
          type="password"
          name="password"
          autoComplete="current-password"
          required
          placeholder="password"
        />
        <button>Sign In</button>
      </Form>
      {/* <div>{user ? user?.error?.message : ""} </div> */}
    </div>
  );
}
export async function action({ request }: ActionFunctionArgs) {
  // we call the method with the name of the strategy we want to use and the
  // request object, optionally we pass an object with the URLs we want the user
  // to be redirected to after a success or a failure
  return await authenticator.authenticate("user-pass", request, {
    successRedirect: "/admin",
    failureRedirect: "/login",
  });
}

// Finally, we can export a loader function where we check if the user is
// authenticated with `authenticator.isAuthenticated` and redirect to the
// dashboard if it is or return null if it's not
export async function loader({ request }: LoaderFunctionArgs) {
  // If the user is already authenticated redirect to /dashboard directly
  return await authenticator.isAuthenticated(request, {
    successRedirect: "/admin",
  });
  // const session = await sessionStorage.getSession(
  //   request.headers.get("Cookie"),
  // );

  // const error = session.get("sessionErrorKey");
  // return json<any>(error ? { error } : { OK: "ok" });
}
