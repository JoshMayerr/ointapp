/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

const faqs = [
  {
    question: "How do I set up my brand new oint?",
    answer:
      "Initializing an oint is easy. Simply follow these steps: \r\n\n 1. Tap the top of your phone to the oint and scan it \r\n\n 2. Open the prompted link on your screen \r\n\n 3. Enter your desired open in new tab link into the input bar. BOOM your oint is now ready to be scanned by anyone.",
  },
  {
    question: "How do I edit my open in new tab link?",
    answer: "good question...",
  },
  {
    question: "How does someone scan my oint?",
    answer:
      "All they have to do is take their phone and tap the back-top of it to the oint. (similar to apple pay)",
  },
  // More questions...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="font-body">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <h2 className="text-center text-4xl text-black sm:text-5xl">
            OINT HELP
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="font-medium text-black">
                          {faq.question}
                        </span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(
                              open ? "-rotate-180" : "rotate-0",
                              "h-6 w-6 transform"
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
