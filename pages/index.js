/* This example requires Tailwind CSS v2.0+ */
import {
  SparklesIcon,
  LightningBoltIcon,
  OfficeBuildingIcon,
  ArrowSmRightIcon,
} from "@heroicons/react/outline";
import Footerr from "../components/footerr";
import Marquee from "react-fast-marquee";
import ManyLink from "../components/manyLink";
import Image from "next/image";
import Feature from "../components/feature";
import { v4 as uuidv4 } from "uuid";
import FadeIn from "react-fade-in";
import Fade from "react-reveal/Fade";

export default function Home() {
  const links = [
    "twitter",
    "linktr.ee",
    "instagram",
    "swapd.me",
    "tiktok",
    "medium.com",
    "solo.to",
    "music.apple.com",
    "reddit",
    "youtube.com",
    "beacons.ai",
    "spotify",
    "twitter",
    "linktr.ee",
    "instagram.com",
    "flow.page",
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
    <div className="relative bg-gray-100 overflow-hidden font-body select-none ">
      <div className="relative pb-16 sm:pb-24  ">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-2">
          <nav
            className="backdrop-filter backdrop-blur-sm bg-opacity-30 border-b border-gray-300 bg-white z-50 firefox:bg-opacity-90  fixed inset-x-0 top-0"
            aria-label="Global"
          >
            <div className="flex items-center justify-between h-14 max-w-6xl mx-auto sm:px-12 px-6">
              <div className="w-20">
                <img src="/ointrealsvg.svg" alt="ointlogo" />
              </div>

              <div className=" flex items-center ">
                <span className="inline-flex rounded-full shadow">
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-1 border border-transparent text-base tracking-wider font-medium rounded-full text-white bg-indigo-500 hover:bg-indigo-400 transition duration-200 ease-in-out"
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
              <div className="text-center h-screen flex flex-col items-center justify-center">
                <div className="relative">
                  <div className="absolute animate-pulse filter blur-md -inset-1 xl:mb-12 lg:mb-12 md:mb-8 sm:mb-4 mb-16 -mr-1 -mt-40 sm:-mt-20 xl:-mt-48 bg-gradient-to-r from-blue-400 to-purple-400  rounded-full"></div>
                  <div className="relative xl:mb-12 lg:mb-12 md:mb-8 sm:mb-4 mb-16 -mr-1 -mt-40 sm:-mt-20 xl:-mt-48 ">
                    <div className="w-40 xl:w-44 rounded-full shadow-2xl">
                      <img src="/whitecircle.svg" alt="ointlogo" />
                    </div>
                  </div>
                </div>
                <div className="">
                  <FadeIn delay={200} transitionDuration={500}>
                    <p className="mb-3 max-w-md mx-auto text-base  sm:text-lg md:text-xl font-medium">
                      OintTag
                    </p>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-7xl">
                      <span className="">
                        Open a link in a new tab, in person. No app necessary.
                      </span>{" "}
                    </h1>

                    <button
                      type="button"
                      className="mt-6 -mr-1 inline-flex items-center px-3 py-2 text-lg leading-none font-medium transition duration-200 ease-in-out text-indigo-500 border-b-2 hover:border-indigo-500 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Shop for $7
                      <div className="">
                        <ArrowSmRightIcon
                          className="ml-1 -mr-0.5 h-5 w-5 "
                          aria-hidden="true"
                        />
                      </div>
                    </button>
                  </FadeIn>
                </div>
              </div>
            </div>
            <div className="bg-white">
              <div className="text-center py-60 mx-auto max-w-5xl px-4 flex md:justify-between flex-col md:flex-row">
                <div className="relative md:w-1/3 w-full ">
                  <div className="aspect-w-9 aspect-h-9">
                    <img
                      src="/promo.gif"
                      width="100%"
                      height="100%"
                      className=" "
                    />
                  </div>
                </div>
                <div className="md:text-right text-center flex flex-col justify-between mt-8 md:-mt-8 md:w-1/2 py-4">
                  <span className="tracking-wider ">
                    <Fade>
                      <h1 className="text-6xl ">A tap is all</h1>
                      <h1 className="text-6xl">it takes.</h1>
                    </Fade>
                  </span>

                  <p className="font-mono pt-6 text-xl">
                    Simply tap a phone to an OintTag and instantly open a link
                    in a new tab. No more tediously spelling out your Instagram
                    username or typing into a friend's phone, it's lighting
                    fast.
                  </p>
                  <div className="pt-8">
                    <span className="inline-flex rounded-full shadow">
                      <a
                        href="#"
                        className="inline-flex items-center px-4 py-1 border border-transparent text-base tracking-wider font-medium rounded-full text-white bg-indigo-500 hover:bg-indigo-400 transition duration-200 ease-in-out"
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
                  <div className="mb-20 flex flex-col items-center">
                    <div className="w-screen">
                      <Marquee gradient={false} speed={50}>
                        {links.map((link) => (
                          <ManyLink name={link} key={uuidv4()} />
                        ))}
                      </Marquee>
                    </div>
                    {/* <div className="w-40 -mt-24 sm:w-48 sm:-mt-28 shadow-2xl rounded-full z-50">
                      <img src="/blackcircle.svg" alt="ointlogo" />
                    </div> */}
                    <div className="relative z-10">
                      <div className="absolute filter blur-md -inset-1 -mt-24 sm:-mt-28 bg-gradient-to-r from-pink-400 to-purple-400  rounded-full"></div>
                      <div className="relative ">
                        <div className="w-40 -mt-24 sm:w-48 sm:-mt-28 rounded-full shadow-2xl ">
                          <img src="/whitecircle.svg" alt="ointlogo" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <h1 className="text-4xl sm:text-5xl md:text-7xl font-light  ">
                    <Fade>
                      <span className="">Any link you want.</span>{" "}
                    </Fade>
                  </h1>
                  <p className="font-mono mt-3 max-w-xs md:max-w-sm mx-auto text-base sm:text-lg md:mt-5">
                    The OintTag works with any URL. Simply enter it in during
                    the one step setup.
                  </p>{" "}
                  <div className="inline-flex rounded-full shadow mt-6 ">
                    <a
                      href="#"
                      className="inline-flex items-center px-4 py-1 border border-transparent text-base tracking-wider font-medium rounded-full text-white bg-indigo-500 hover:bg-indigo-400 transition duration-200 ease-in-out"
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white">
              <div className="text-center py-24 sm:py-40 mx-auto max-w-5xl px-4 ">
                <div className="flex md:flex-row flex-col space-y-20 md:space-y-0 md:justify-between md:space-x-20">
                  <Feature
                    icon={<SparklesIcon />}
                    title="No app required"
                    desc="Neither you or the person your sharing the link with will ever need to download an app."
                  />
                  <Feature
                    icon={<LightningBoltIcon />}
                    title="One step setup"
                    desc="Simply scan the tag, enter any link, and the tag is good to go."
                  />
                  <Feature
                    icon={<OfficeBuildingIcon />}
                    title="For Businesses"
                    desc={
                      <span>
                        OintTags are perfect for high-traffic social events. For
                        large orders or custom tags{" "}
                        <a href="#" className="text-indigo-500 hover:underline">
                          see here.
                        </a>
                      </span>
                    }
                  />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="pt-16 md:pt-0 pb-14">
        <Footerr />
      </div>
    </div>
  );
}
