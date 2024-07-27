import { useState, useEffect } from "react";

import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// eslint-disable-next-line react/prop-types
function DropdownMenu({ options }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="">
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Menu.Items className="absolute right-0 z-10 mt-2 w-56  origin-top-right rounded-md bg-background shadow-lg ring-1 ring-primary  focus:outline-none">
        <div className="py-1">
          {options.map((option, index) => (
            <Menu.Item key={index}>
              {({ active }) => (
                <a
                  href={option.url}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  {option.label}
                </a>
              )}
            </Menu.Item>
          ))}
        </div>
      </Menu.Items>
    </Menu>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header
        className={`w-full fixed z-40 transition-all duration-300 ${
          scrolled ? "bg-background" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto ">
          <div className="flex justify-between items-center py-4 px-6">
            <div className="flex gap-2">
              <img src="./src/assets/wedadev.png" alt="" />
              <h1 className="font-semibold text-2xl text-white">WedaDev</h1>
            </div>
            <nav className="flex">
              <ul
                className={`lg:flex hidden ${
                  isOpen ? "block" : "hidden"
                } gap-10 text-white font-popins text-xl font-light`}
              >
                <li className="hover:bg-blue-500 px-1 hover:rounded-sm hover:cursor-pointer">
                  <a href="#beranda">Beranda</a>
                </li>
                <li className="hover:bg-blue-500 px-1 hover:rounded-sm hover:cursor-pointer">
                  <a href="#tentang">Tentang saya</a>
                  <DropdownMenu
                    options={[
                      { label: "Sartifikat saya", url: "#certificate" },
                      { label: "Gallery", url: "#" },

                      // Add more options as needed
                    ]}
                  />
                </li>
                <li className="hover:bg-blue-500 px-1 hover:rounded-sm hover:cursor-pointer">
                  <a href="#projek">Projek</a>
                </li>
                <li className="hover:bg-blue-500 px-1 hover:rounded-sm hover:cursor-pointer">
                  <a href="#keahlian">Keahlian</a>
                </li>
                <li className="hover:bg-blue-500 px-1 hover:rounded-sm hover:cursor-pointer">
                  <a href="#kontak">Kontak</a>
                </li>
              </ul>
              <div className="border-1 border-sky-50 lg:hidden">
                <img
                  src={
                    isOpen
                      ? "./src/assets/Group 22.png"
                      : "./src/assets/humberger.png"
                  }
                  alt=""
                  className="m-2"
                  onClick={toggleMenu}
                />
              </div>
            </nav>
          </div>
        </div>
        <div
          className={`lg:hidden flex justify-evenly gap-9 fixed top-16 right-0 bg-background h-full w-1/2 ${
            isOpen
              ? "transform translate-x-0 transition-transform duration-500 ease-in-out"
              : "transform translate-x-full transition-transform duration-500 ease-in-out"
          }`}
        >
          <ul className="py-2 text-white">
            <li className="hover:bg-blue-500 px-4 py-2 cursor-pointer">
              <a href="#beranda">Beranda</a>
            </li>
            <li className="hover:bg-blue-500 px-4 py-2 cursor-pointer">
              <a href="#tentang">Tentang saya</a>
              <DropdownMenu
                options={[
                  { label: "Sartifikat saya", url: "#certificate" },
                  { label: "Gallery", url: "#" },

                  // Add more options as needed
                ]}
              />
            </li>
            <li className="hover:bg-blue-500 px-4 py-2 cursor-pointer">
              <a href="#projek">Projek</a>
            </li>
            <li className="hover:bg-blue-500 px-4 py-2 cursor-pointer">
              <a href="#keahlian">Keahlian</a>
            </li>
            <li className="hover:bg-blue-500 px-4 py-2 cursor-pointer">
              <a href="#kontak">Kontak</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
