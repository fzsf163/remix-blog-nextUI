import { Form } from "@remix-run/react";
import ThemeToggler from "../themeSwitch";
import { IconLogout } from "@tabler/icons-react";
import { Tooltip } from "@nextui-org/react";
import SecondaryNav from "./secondaryNav";
export default function PrimaryNav() {
  return (
    <div className="sticky top-0 flex h-[4rem] items-center justify-center gap-4 bg-white/30 backdrop-blur-sm">
      <div>
        <SecondaryNav></SecondaryNav>
      </div>
      <h1
        className="bg-gradient-to-r from-blue-400 via-green-500 to-purple-400 bg-clip-text text-2xl font-bold text-transparent"
        style={{ fontFamily: "K2D" }}
      >
        Admin Panel
      </h1>
      <div className="flex items-center justify-center">
        <ThemeToggler></ThemeToggler>
        <Form method="POST" action="/admin">
          <Tooltip content="Logout">
            <button
              type="submit"
              name="intent"
              value="logout"
              className="rounded-md bg-blue-600 p-2 text-white"
            >
              <IconLogout stroke={2} className="size-4" />
            </button>
          </Tooltip>
        </Form>
      </div>
    </div>
  );
}
