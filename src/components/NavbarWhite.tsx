import ArrowUp from "@/assets/icon/ArrowUp";
import Bars3Icon from "@/assets/icon/Bars3Icon";
import XMarkIcon from "@/assets/icon/XMarkIcon";
import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import logo from ".././assets/Group (2).png";

const navigation = [
  { name: "Our Story", href: "#pg1", current: true },
  { name: "Services", href: "#pg2", current: false },
  { name: "News", href: "#pg3", current: false },
  { name: "Careers", href: "#pg4", current: false },
  { name: "Contact", href: "#pg5", current: false },
];
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <div className="mx-auto w-full container py-5">
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="mx-auto px-2 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between">
                <div>
                  <Link href={"/"}>
                    <Image src={logo} alt="" width={150} height={50} />
                  </Link>
                </div>
                <div className="flex items-center justify-between">
                  <div className="hidden sm:ml-6 lg:block">
                    <div className="flex space-x-4 items-center">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            "hover:bg-gray-500 hover:text-white",
                            "rounded-md px-3 py-2 text-lg uppercase font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <button className="flex justify-between items-center bg-none border bg-[#D63E0E] active:bg-[#B2330B] sm:py-4 sm:px-6 py-2 px-3 rounded-[36px] sm:text-lg text-xs text-white">
                    Get in touch <ArrowUp />
                  </button>
                </div>
                <div className="flex items-center md:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? <XMarkIcon /> : <Bars3Icon />}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden text-center">
              <div className="space-y-1 px-2 pt-2 pb-3">
                <h1 className="uppercase text-7xl">Menu</h1>
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={
                      (classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      ),
                      "flex items-center gap-3 justify-center py-2 rounded-lg border text-lg uppercase font-medium")
                    }
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name} <ArrowUp />
                  </Disclosure.Button>
                ))}
                <button className="flex mx-auto items-center bg-none border bg-[#D63E0E] active:bg-[#B2330B] sm:py-4 sm:px-6 py-2 px-3 rounded-[36px] sm:text-lg text-xs text-white">
                  Get in touch <ArrowUp />
                </button>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
