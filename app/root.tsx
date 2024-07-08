import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation,
  useNavigate,
} from "@remix-run/react";
import "./tailwind.css";
import "react-toastify/dist/ReactToastify.css";
import { NextUIProvider } from "@nextui-org/react";
import clsx from "clsx";
import {
  PreventFlashOnWrongTheme,
  ThemeProvider,
  useTheme,
} from "remix-themes";
import { themeSessionResolver } from "./sessionstheme.server";
import { LoaderFunctionArgs } from "@remix-run/node";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import NavTop from "./components/navtop";
import ToTop from "./utils/scrolltotop";
import Footer from "./components/footer/footer";
import { ToastContainer } from "react-toastify";

export function Layout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const path = useLocation();
  let route = path.pathname;
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <NextUIProvider navigate={navigate}>
          <NextThemesProvider attribute="class" defaultTheme="light">
            {/* {(route === "/" ||
              route === "/about" ||
              route === "/blogs" ||
              route === "/request") && <NavTop></NavTop>} */}
            {children}
            {/* {(route === "/" ||
              route === "/about" ||
              route === "/blogs" ||
              route === "/request") && <Footer></Footer>} */}

            <ToTop></ToTop>
          </NextThemesProvider>
        </NextUIProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <div>
      <Outlet />
      <ToastContainer theme="dark" bodyClassName={"font-bold"} style={{fontFamily:"K2D"}} />
    </div>
  );
}
