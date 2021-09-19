/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  SparklesIcon,
  LightningBoltIcon,
  OfficeBuildingIcon,
} from "@heroicons/react/outline";
import Footerr from "../components/Footerr";
import Marquee from "react-fast-marquee";
import ManyLink from "../components/ManyLink";
import Image from "next/image";
import Feature from "../components/Feature";

export default function Home() {
  const links = [
    "twitter",
    "linktr.ee",
    "instagram",
    "swapd.me",
    "tiktok",
    "medium.com",
    "facebook",
    "music.apple.com",
    "reddit",
    "youtube.com",
    "depop.com",
    "spotify",
    "twitter",
    "linktr.ee",
    "instagram",
    "swapd.me",
    "tiktok",
    "medium.com",
    "facebook",
    "music.apple.com",
    "reddit",
    "youtube.com",
    "depop.com",
    "spotify",
  ];

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
                  <div className="w-20">
                    <img src="/ointrealsvg.svg" alt="ointlogo" />
                  </div>
                </div>
              </div>

              <div className=" flex items-center ">
                <span className="inline-flex rounded-full shadow">
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-1 border border-transparent text-base tracking-wider font-medium rounded-full text-white bg-indigo-400 hover:bg-indigo-300 transition duration-200 ease-in-out"
                  >
                    Buy Now
                  </a>
                </span>
              </div>
            </div>
          </nav>
        </div>

        <div className="">
          <main className="relative  mt-10">
            <div className="mx-auto max-w-4xl px-4">
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
            </div>
            <div className="bg-white">
              <div className="text-center py-60 mx-auto max-w-5xl px-4 flex md:justify-between flex-col md:flex-row">
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
                <div className="md:text-right text-center flex flex-col justify-between mt-8 md:-mt-6 md:w-1/2 py-4">
                  <span className="tracking-wider">
                    <h1 className="text-5xl ">A tap is all</h1>
                    <h1 className="text-5xl">it takes.</h1>
                  </span>

                  <p className="font-mono pt-6">
                    Simply tap a phone to an OintTag and instantly open a link
                    in a new tab. No more tediously spelling out your Instagram
                    username or typing into a friend's phone, it's lighting
                    fast.
                  </p>
                  <div className="pt-8">
                    <span className="inline-flex rounded-full shadow">
                      <a
                        href="#"
                        className="inline-flex items-center px-4 py-1 border border-transparent text-base tracking-wider font-medium rounded-full text-white bg-indigo-400 hover:bg-indigo-300 transition duration-200 ease-in-out"
                      >
                        Buy Now
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mx-auto max-w-5xl px-4">
              <div className="text-center h-screen flex items-center justify-center">
                <div>
                  <div className="mb-40 ">
                    <div className="w-screen">
                      <Marquee gradient={false} speed={50}>
                        {links.map((link) => (
                          <ManyLink name={link} key={link} />
                        ))}
                      </Marquee>
                    </div>
                    <div className=""></div>
                  </div>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-light">
                    <span className="">Any link you want.</span>{" "}
                  </h1>
                  <p className="font-mono mt-3 max-w-sm mx-auto text-base sm:text-md md:mt-5">
                    The OintTag works with any URL. Simply enter it in during
                    the one step setup.
                  </p>{" "}
                  <div className="inline-flex rounded-full shadow mt-6 ">
                    <a
                      href="#"
                      className="inline-flex items-center px-4 py-1 border border-transparent text-base tracking-wider font-medium rounded-full text-white bg-indigo-400 hover:bg-indigo-300 transition duration-200 ease-in-out"
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white">
              <div className="text-center py-40 mx-auto max-w-5xl px-4 ">
                <div className="flex md:flex-row flex-col space-y-20 md:space-y-0 md:justify-between md:space-x-20">
                  <Feature
                    icon={<SparklesIcon />}
                    title="No app required"
                    desc="AirTag is designed to keep going more than a year on a
                      standard battery you can easily replace."
                  />
                  <Feature
                    icon={<LightningBoltIcon />}
                    title="One step setup"
                    desc="AirTag is designed to keep going more than a year on a
                      standard battery you can easily replace."
                  />
                  <Feature
                    icon={<OfficeBuildingIcon />}
                    title="For Businesses"
                    desc="AirTag is designed to keep going more than a year on a
                      standard battery you can easily replace."
                  />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="pb-16">
        <Footerr />
      </div>
    </div>
  );
}
