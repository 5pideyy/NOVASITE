import React, { useEffect, useState } from "react";
import { Navbar, IconButton } from "@material-tailwind/react";
import { Collapse } from "@material-tailwind/react";
import {
  Bars2Icon,
  HomeIcon,
  CubeTransparentIcon,
  BookOpenIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";

// nav list component
const navListItems = [
  {
    label: "Home",
    icon: HomeIcon,
    link: "#/",
  },
  // {
  //   label: "Accomplishments",
  //   icon: CubeTransparentIcon,
  //   link: "#/accomplishments",
  // },
  {
    label: "Blogs",
    icon: BookOpenIcon,
    link: "#/blogs",
  },
  {
    label: "Become A Member",
    icon: UserPlusIcon,
    link: "#/membership",
  },
];

function NavList() {
  const [currentPath, setCurrentPath] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <ul className="flex flex-col lg:flex-row gap-8 justify-center items-center mt-2 mb-4 lg:mb-0 lg:mt-0">
      {navListItems.map(({ label, link, icon: Icon }) => {
        const isActive = currentPath === link;

        return (
          <li key={label}>
            <a
              href={link}
              className={`flex items-center gap-2 p-2 rounded-full transition-all ${
                isActive ? "bg-gray-800 text-white" : "text-gray-400"
              }`}
            >
              <Icon className="h-6 w-6" />
              <span className="text-sm font-medium">{label}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export function MainNavbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setIsNavOpen(false));
  }, []);

  return (
    <Navbar color="transparent" className="max-w-screen-xl p-4 lg:rounded-full lg:pl-6 mx-auto">
      <div className="flex items-center justify-between w-full h-full">
        {/* Center-aligned Navigation */}
        <div className="hidden lg:flex flex-1 justify-center">
          <NavList />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <IconButton
            size="sm"
            color="blue-gray"
            variant="text"
            onClick={toggleIsNavOpen}
            className="ml-auto mr-2"
          >
            <Bars2Icon className="h-6 w-6" />
          </IconButton>
        </div>
      </div>

      {/* Mobile Menu */}
      <Collapse open={isNavOpen} className="lg:hidden">
        <NavList />
      </Collapse>
    </Navbar>
  );
}
