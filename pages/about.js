/* This example requires Tailwind CSS v2.0+ */
export default function About() {
  return (
    <div className="h-screen bg-white font-body flex items-center sm:-mt-12 -mt-24">
      <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base  text-indigo-600 tracking-wide uppercase">
            oint.app
          </h2>
          <p className="mt-1 text-5xl sm:tracking-tight lg:text-6xl">
            About Us
          </p>
          <p className="max-w-3xl mt-5 mx-auto text-md sm:text-xl text-gray-500">
            Open a link in a new tab, in person. We make it possible. Started in
            San Francisco, CA by a 17 year old named Josh Mayer, OINT is
            blurring the lines between sharing links online and in person. We
            aim to let anyone and everyone share what they want to online, in an
            in person setting. Why not join the movement.
          </p>
        </div>
      </div>
    </div>
  );
}
