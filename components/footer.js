import Link from "next/link";

export default function Footer() {
  const navigation = {
    main: [
      { name: "help", href: "/help" },
      { name: "contact", href: "/contact" },
      { name: "about", href: "/about" },
    ],
  };
  return (
    <footer className="bg-white">
      <div className="max-w-7xl sm:mt-0 -mt-20 mx-auto px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <Link href={item.href}>
                <a className="text-base text-black hover:text-gray-900">
                  {item.name}
                </a>
              </Link>
            </div>
          ))}
        </nav>

        <p className="mt-6 text-center text-sm text-black">
          &copy; 2021 oint.app
        </p>
        <p className="mt-2 -mr-2 text-center text-xs">patent pending</p>
      </div>
    </footer>
  );
}
