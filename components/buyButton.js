import Link from "next/link";

export default function BuyButton() {
  return (
    <span className="inline-flex rounded-full shadow">
      <Link href="https://shop.oint.app">
        <a className="inline-flex items-center px-4 py-1 border border-transparent text-base tracking-wider font-medium rounded-full text-white bg-indigo-500 hover:bg-indigo-400 transition duration-200 ease-in-out">
          Buy Now
        </a>
      </Link>
    </span>
  );
}
