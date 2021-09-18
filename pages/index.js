/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

export default function Home() {
  return (
    <div className="relative bg-gray-100 overflow-hidden font-body ">
      <div className="relative pb-16 sm:pb-24  ">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-2">
          <nav
            className="backdrop-filter backdrop-blur-sm bg-opacity-30 border-b border-gray-300 bg-white z-50 firefox:bg-opacity-90  fixed inset-x-0 top-0"
            aria-label="Global"
          >
            <div className="flex items-center justify-between h-14 max-w-6xl mx-auto sm:px-12 px-6">
              <div className="flex items-center flex-1 ">
                <div className="flex items-center justify-between w-full">
                  <a href="#">
                    <span className="text-xl font-medium">OintTag</span>
                  </a>
                </div>
              </div>

              <div className=" flex items-center ">
                <span className="inline-flex rounded-full shadow">
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-1 border border-transparent text-base font-medium rounded-full text-indigo-600 bg-white hover:bg-gray-50"
                  >
                    Buy Now
                  </a>
                </span>
              </div>
            </div>
          </nav>
        </div>

        <div className="">
          <main className="relative mx-auto max-w-4xl px-4 mt-10">
            <div className="text-center h-screen flex items-center justify-center ">
              <div className="-mt-24">
                <p className="mb-3 max-w-md mx-auto text-base  sm:text-lg md:text-xl font-medium">
                  OintTag
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-light">
                  <span className="">
                    Open a link in a new tab, in person. No app necesarry.
                  </span>{" "}
                </h1>
                <p className="mt-3 max-w-md mx-auto text-base  sm:text-lg md:mt-5 md:text-xl md:max-w-xl font-medium">
                  (it's only 7$)
                </p>
              </div>
            </div>
            <div className="text-center flex md:justify-between flex-col md:flex-row">
              <div className="relative md:w-1/3 w-full ">
                <div className="aspect-w-9 aspect-h-9 overflow-hidden">
                  <iframe
                    src="/promo.gif"
                    width="100%"
                    height="100%"
                    className="absolute"
                    frameBorder="0"
                  ></iframe>
                </div>
              </div>
              <div className="md:text-right text-center mt-12 md:-mt-6 md:w-1/2">
                <h1 className="text-5xl ">A tap is all</h1>
                <h1 className="text-5xl">it takes.</h1>
                <p className="font-mono pt-6">
                  Simply tap a phone to an OintTag and instantly open a link in
                  a new tab. No more tediously spelling out your Instagram
                  username or typing into a friend's phone, it's lighting fast.
                </p>
                <div className="pt-8">
                  <span className="inline-flex rounded-full shadow">
                    <a
                      href="#"
                      className="inline-flex items-center px-4 py-1 border border-transparent text-base font-medium rounded-full text-white bg-blue-400 hover:bg-gray-50"
                    >
                      Buy Now
                    </a>
                  </span>
                </div>
              </div>
              <div></div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
