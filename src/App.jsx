import React from "react";
import Carousel from "./Carousel";
import "./App.css";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import tredimage1 from "./assets/image/tranding/bracelet.jpg";
import tredimage2 from "./assets/image/tranding/earrings-05.jpg";
import tredingimage3 from "./assets/image/tranding/earrings-06.jpg";
import tredingimage4 from "./assets/image/tranding/earrings.jpg";
import uniquepiece1 from "./assets/image/tranding/bg-02.jpg";
import uniquepiece2 from "./assets/image/tranding/bg-01.jpg";

const navigation = [
  { name: "Rings", href: "#", current: true },
  { name: "Bracelets", href: "#", current: false },
  { name: "Earings", href: "#", current: false },
  { name: "Necklaces", href: "#", current: false },
];
const navigationdetail = [
  { name: "Home", href: "#", current: true },
  { name: "Contact", href: "#", current: false },
  { name: "About", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const App = () => {
  return (
    <>
      <Disclosure as="nav" className="bg-white">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-20 items-center justify-between ">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block size-6 group-data-open:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden size-6 group-data-open:block"
                />
              </DisclosureButton>
            </div>
            <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
              {/* <div className="flex shrink-0 items-center">
            <img
              alt="Your Company"
              src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              className="h-8 w-auto"
            />
          </div> */}
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-2">
                  {navigation.map((item) => (
                    <li className="menu-item">
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? "page" : undefined}
                        className={classNames(
                          item.current ? "menu-current " : " menu-link ",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center w-28">
              <img
                className="max-w-{4px}"
                alt=""
                src="https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/logo-retina.png"
              />
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="flex space-x-2">
                {navigationdetail.map((item) => (
                  <li className="menu-item">
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        item.current ? "menu-current " : " menu-link ",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </div>
              <button
                type="button"
                className="relative rounded-full bg-[#A19B2F] p-1 text-black hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <BellIcon aria-hidden="true" className="size-6" />
              </button>

              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-3">
                <div>
                  <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="size-8 rounded-full"
                    />
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                    >
                      Your Profile
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                    >
                      Settings
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                    >
                      Sign out
                    </a>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
      <div className=" home-background">
        <h6 className="background-content">The new ring sensation</h6>
      </div>
      {/* Carousel Section */}
      <div className="mt-6 mb-12 ">
        <Carousel />
      </div>
      {/* popular products Section */}
      <div className="mt-[80px] grid justify-center ">
        <p className="text-gray-500">Popular Products</p>
      </div>
      <div className="mt-[2px] grid justify-center mb-[50px]">
        <h6 className="text-4xl uppercase">Trending Now</h6>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div>
          <img
            src={tredimage1}
            alt="trending image"
            className=" w-[300px] h-[350px] "
          />
          <h6 className="text-2xl mt-4 ml-8 ">Product Name 1</h6>
          <p className="text-bold ml-8">450</p>
        </div>
        <div>
          <img
            src={tredimage2}
            alt="trending image"
            className=" w-[300px] h-[350px] "
          />
          <h6 className="text-2xl mt-4 ml-8 ">Product Name 1</h6>
          <p className="text-bold ml-8">450</p>
        </div>
        <div>
          <img
            src={tredingimage3}
            alt="trending image"
            className=" w-[300px] h-[350px] "
          />
          <h6 className="text-2xl mt-4 ml-8 ">Product Name 1</h6>
          <p className="text-bold ml-8">450</p>
        </div>
        <div>
          <img
            src={tredingimage4}
            alt="trending image"
            className=" w-[300px] h-[350px] "
          />
          <h6 className="text-2xl mt-4 ml-8 ">Product Name 1</h6>
          <p className="text-bold ml-8">450</p>
        </div>
      </div>
      {/* unique pieces Section */}
      <div className="grid grid-cols-3 gap-4">
        <div className="mt-[80px] grid justify-center ">
          <p className="text-gray-500">Unique pieces</p>
        </div>
        {/* <div className="flex relative">
          <img
            src={uniquepiece1}
            alt="trending image"
            className=" w-[300px] h-[350px] mt-44 "
          />

          <div className="  ">
            <img
              src={uniquepiece2}
              alt="trending image"
              className=" w-[410px] h-[800px] "
            />
          </div>
        </div> */}
        <div class="relative justify-self-end col-span-2 ">
          <img
            src={uniquepiece1}
            alt="Image 1"
            class="absolute w-[400px] object-cover mr-[180px] h-[600px] right-1/2  top-28 md:hidden sm:hidden"
          />

          <img src={uniquepiece2} alt="Image 2" class=" static" />
        </div>
      </div>
    </>
  );
};

export default App;
