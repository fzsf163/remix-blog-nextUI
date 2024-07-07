import { Form } from "@remix-run/react";
import ThemeToggler from "../themeSwitch";
import { IconLogout } from "@tabler/icons-react";
import { Tooltip } from "@nextui-org/react";
import SecondaryNav from "./secondaryNav";
export default function PrimaryNav() {
  return (
    <div className="sticky top-0 flex h-[4rem] items-center justify-center gap-4 bg-white/30 backdrop-blur-sm">
      <h1 className="text-2xl font-bold" style={{ fontFamily: "K2D" }}>
        Admin Panel
      </h1>

      <div>
        <SecondaryNav></SecondaryNav>
      </div>
      <ThemeToggler></ThemeToggler>
      <Form method="POST" action="/admin">
        <Tooltip content="Logout">
          <button
            type="submit"
            name="intent"
            value="logout"
            className="rounded-md bg-purple-600 p-2 text-white"
          >
            <IconLogout stroke={2} className="size-4" />
          </button>
        </Tooltip>
      </Form>
    </div>
  );
}
