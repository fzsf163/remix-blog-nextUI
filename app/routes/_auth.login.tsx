import { ActionFunctionArgs, json, LoaderFunctionArgs } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import LoginForm from "~/components/AdminLoginForm/loginForm";
import { authenticator } from "~/utils/auth.server";
import { sessionStorage } from "~/utils/session.server";
export default function LogIn() {
  const user = useLoaderData<typeof loader>();
  return (
    <div
      className="relative h-[100dvh]"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1505909182942-e2f09aee3e89?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        backgroundPosition: "center center",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundOrigin:"border-box",
      }}
    >
      {" "}
      <Form
        method="post"
        className="absolute bottom-0 left-0 right-0 top-60 m-auto"
      >
        <LoginForm></LoginForm>
      </Form>
      <div>{user ? user?.error?.message : ""} </div>
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
  await authenticator.isAuthenticated(request, {
    successRedirect: "/admin",
  });
  const session = await sessionStorage.getSession(
    request.headers.get("Cookie"),
  );

  const error = session.get("sessionErrorKey");
  return json<any>(error ? { error } : { OK: "ok" });
}
