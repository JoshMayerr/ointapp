import { ArrowSmLeftIcon, ExclamationIcon } from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/outline";
import FadeIn from "react-fade-in/lib/FadeIn";

export default function EnterLinkForm({
  setProgress,
  setCurrentLink,
  currentLink,
  success,
  setSuccess,
  input,
  setInput,
  onSubmit,
}) {
  return (
    <>
      <div className="absolute left-0 right-0 mx-auto w-3/4 bottom-0 pb-16 text-left tracking-wide">
        <div className="max-w-sm w-full bg-white filter drop-shadow-md rounded-full pointer-events-auto overflow-hidden">
          <div className="p-4 px-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <ExclamationIcon
                  className="h-8 w-8 text-black"
                  aria-hidden="true"
                />
              </div>
              <div className="ml-4 w-0 flex-1 pt-0.5">
                <p className="text-sm font-medium text-gray-900 leading-4">
                  Make sure to bookmark this page so you can edit in the future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col h-screen justify-center -mt-20">
        <div className="-mt-20 flex place-items-start">
          <button
            type="button"
            onClick={() => {
              setProgress(false);
              setSuccess(false);
            }}
            className="inline-flex items-center p-2 border border-transparent filter drop-shadow-md text-black rounded-full  bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <ArrowSmLeftIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <FadeIn transitionDuration={600}>
          <div className="flex flex-col mt-20 space-y-4">
            <h1 className="text-4xl font-medium tracking-wide mb-4">
              Enter your <br /> <span className="">{currentLink.enter}</span>
            </h1>
            <div>
              <div className="mt-1 flex rounded-md shadow-sm font-mono">
                <span className="inline-flex items-center px-3 rounded-l-md border tracking-tight text-md border-r-0 border-black bg-white text-black sm:text-sm">
                  {currentLink.prefix}
                </span>
                <input
                  type="text"
                  name="input"
                  id="input"
                  className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md tracking-wide focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-black placeholder-gray-400"
                  placeholder={currentLink.placeholder}
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                    setSuccess(false);
                  }}
                />
              </div>
            </div>
            <button
              onClick={() => onSubmit()}
              type="button"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-lg tracking-wide font-medium rounded-lg text-white bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>{" "}
            {success && (
              <p className="tracking-wide text-sm">
                Success! Your OintTag is ready to share. <br /> Start tapping!
              </p>
            )}
          </div>
        </FadeIn>
      </div>
    </>
  );
}
