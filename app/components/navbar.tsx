import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { useState } from "react";
import ThemeToggler from "./themeSwitch";
import { NavLink } from "@remix-run/react";
import {
  IconHome,
  IconArticle,
  IconAddressBook,
  IconLayoutGrid,
  IconApiApp,
} from "@tabler/icons-react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="navbar-top"
      isMenuOpen={isMenuOpen}
      classNames={{
        base: "bg-tranparent",
      }}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <h1>
            <IconApiApp
              stroke={2}
              className="light dark:text-green-100  light:text-green-700"
            ></IconApiApp>
          </h1>
          <p className="light font-bold light:text-green-700 dark:text-green-100">
            RB
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-4"
        justify="center"
      >
        <NavbarItem>
          <NavLink
            to={"/"}
            className="navitem flex justify-center items-center gap-1 dark:text-white "
          >
            <IconHome stroke={2}></IconHome>
            <p>
              {" "}
              Home
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </p>
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink
            to={"/blogs"}
            className="navitem flex justify-center items-center gap-1 dark:text-white"
          >
            <IconArticle stroke={2}></IconArticle>
            <p>
              {" "}
              Blogs
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </p>
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink
            to={"/contact"}
            className="navitem flex justify-center items-center gap-1 dark:text-white"
          >
            {" "}
            <IconAddressBook stroke={2}></IconAddressBook>
            <p>
              {" "}
              Contact
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </p>
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink
            to={"/about"}
            className="navitem flex justify-center items-center gap-1 dark:text-white"
          >
            <IconLayoutGrid stroke={2}></IconLayoutGrid>{" "}
            <p>
              {" "}
              About
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </p>
          </NavLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeToggler></ThemeToggler>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="navbarmenu-top">
        <NavbarMenuItem onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {" "}
          <NavLink
            to={"/"}
            className="navitem flex justify-center items-center gap-1 dark:text-white"
          >
            <IconHome stroke={2}></IconHome>
            <p>
              {" "}
              Home
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </p>
          </NavLink>
        </NavbarMenuItem>
        <NavbarMenuItem onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {" "}
          <NavLink
            to={"/blogs"}
            className="navitem flex justify-center items-center gap-1 dark:text-white"
          >
            <IconArticle stroke={2}></IconArticle>
            <p>
              {" "}
              Blogs
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </p>
          </NavLink>
        </NavbarMenuItem>
        <NavbarMenuItem onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {" "}
          <NavLink
            to={"/contact"}
            className="navitem flex justify-center items-center gap-1 dark:text-white"
          >
            {" "}
            <IconAddressBook stroke={2}></IconAddressBook>
            <p>
              {" "}
              Contact
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </p>
          </NavLink>
        </NavbarMenuItem>
        <NavbarMenuItem onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {" "}
          <NavLink
            to={"/about"}
            className="navitem flex justify-center items-center gap-1 dark:text-white"
          >
            <IconLayoutGrid stroke={2}></IconLayoutGrid>{" "}
            <p>
              {" "}
              About
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </p>
          </NavLink>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
