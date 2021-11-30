import LinkChoice from "/components/linkChoice";
import { SearchIcon } from "@heroicons/react/outline";
import FadeIn from "react-fade-in/lib/FadeIn";
import { useState, useEffect } from "react";

export default function PickLinkForm({
  links,
  setProgress,
  currentLink,
  setCurrentLink,
}) {
  const [items, setItems] = useState(links);

  const [q, setQ] = useState(null);

  useEffect(() => {
    if (q) {
      setItems(
        items.filter((item) => {
          console.log(item.name.toString().toLowerCase(), "itemname");
          console.log(q, "q");
          console.log(
            item.name
              .toString()
              .toLowerCase()
              .indexOf(q.toLowerCase()),
            "ayyyyy"
          );
          item.name
            .toString()
            .toLowerCase()
            .indexOf(q.toLowerCase()) > -1;
        })
      );
      console.log(items);
    } else {
      return;
    }
  }, [q]);

  return (
    <FadeIn>
      <div className="my-16">
        <div className="mb-10">
          <h1 className="text-4xl font-medium tracking-wide">
            What should the OintTag open?
          </h1>
          <p className="mt-4 tracking-wide">
            Don't worry, this can be changed any time. As long as you save this page.
          </p>
        </div>
        {/* <div className="mb-12 w-full">
          <div>
            <div className="mt-1 relative rounded-md filter drop-shadow-sm">
              <input
                type="search"
                name="search-form"
                id="search-form"
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-6 pr-12 sm:text-sm rounded-full placeholder-gray-400 font-mono filter drop-shadow-lg border-none"
                placeholder="search..."
                value={q}
                onChange={(e) => setQ(e.target.value)}
              />
              <div className="absolute inset-y-0 right-0 pr-6 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-black" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div> */}

        <div className="flex flex-col px-2">
          <ul role="list" className=" space-y-4 ">
            {items.map((link) => (
              <LinkChoice
                key={link.name}
                link={link}
                setProgress={setProgress}
                currentLink={currentLink}
                setCurrentLink={setCurrentLink}
              />
            ))}
          </ul>
        </div>
      </div>
    </FadeIn>
  );
}
