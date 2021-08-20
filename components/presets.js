/* This example requires Tailwind CSS v2.0+ */
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { PlusSmIcon, CheckIcon } from "@heroicons/react/solid";

const presets = [
  {
    start: "www.linkt.ree/",
    real: "https://linkt.ree/",
  },
  {
    start: "www.twitter.com/",
    real: "https://twitter.com/",
  },
  {
    start: "www.instagram.com/",
    real: "https://instagram.com/",
  },
  {
    start: "www.swapd.me/",
    real: "https://swapd.me/",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Presets({ selected, setSelected }) {
  return (
    <RadioGroup value={selected} onChange={setSelected}>
      <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
      <div className="flex flex-wrap justify-between">
        {presets.map((plan) => (
          <RadioGroup.Option
            key={plan.start}
            value={plan}
            className={({ active }) =>
              classNames(active ? " ring-none" : "", "inline-flex")
            }
          >
            {({ checked }) => (
              <>
                <button
                  className={`px-2 py-1 font-mono inline-flex ml-1 mr-1 mt-1 mb-1 focus:outline-none transition duration-300 ease-in-out ${
                    checked
                      ? "bg-black border border-transparent"
                      : "border-black border"
                  } text-xs font-medium ${
                    checked ? "text-white" : "text-black"
                  }  rounded-full`}
                >
                  <div className="ml-1">{plan.start}</div>
                  <div className="ml-2">
                    {checked ? (
                      <CheckIcon className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <PlusSmIcon className="h-4 w-4" aria-hidden="true" />
                    )}
                  </div>
                </button>
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
}
