import { ArrowRightIcon } from "@heroicons/react/outline";
import { SocialIcon } from "react-social-icons";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function LinkChoice({
  link,
  setProgress,
  currentLink,
  setCurrentLink,
}) {
  return (
    <>
      <li className="list-none">
        <button
          onClick={() => {
            setProgress(true);
            setCurrentLink(link);
          }}
          className="col-span-1 flex shadow-md w-full bg-white rounded-md text-left"
        >
          <div className="flex-1 flex items-center justify-betweenbg-white rounded-r-md truncate">
            <div className="flex-1 px-4 py-3 text-sm truncate">
              <p className="text-gray-900 text-lg tracking-wide -pb-1 font-medium">
                {link.name}
              </p>
              <p className="text-gray-500 text-xs">
                <span className="font-mono pr-0.5">{link.userFaceURL}</span>
              </p>
            </div>
            <div className="flex-shrink-0 pr-2">
              <div
                type="button"
                className="w-8 h-8 bg-white inline-flex items-center justify-center text-balck rounded-full bg-transparent "
              >
                <span className="sr-only">Open options</span>
                <ArrowRightIcon className="w-5 h-5" aria-hidden="true" />
              </div>
            </div>
          </div>
        </button>
      </li>
    </>
  );
}
