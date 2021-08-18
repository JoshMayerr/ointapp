import Head from "next/head";
import { useRouter } from "next/router";
import { connectToDatabase } from "../../lib/mongodb";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ArrowRightIcon, InformationCircleIcon } from "@heroicons/react/solid";
import ReactTooltip from "react-tooltip";

export default function Home({ uuid, url }) {
  const navigation = {
    main: [
      { name: "help", href: "#" },
      { name: "contact", href: "#" },
      { name: "about", href: "#" },
    ],
  };
  const [success, setSuccess] = useState(false);
  const UpdateUrl = async (data) => {
    if (url != data.newTabUrl) {
      // axios post to nextjs api with new url and id
      const sendData = { uuid, url: data.newTabUrl };
      //console.log(sendData, "adouwdgo9wdgoawdgo");
      return axios
        .post(`/api/${uuid}`, sendData)
        .then(function(response) {})
        .catch(function(error) {
          console.log(error);
        });
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      newTabUrl: url,
    },
  });
  const onSubmit = async (data) => {
    //show success message w/ conditional messaging
    setSuccess(true);
    reset();
    return UpdateUrl(data);
  };

  return (
    <div className="w-full flex flex-col justify-between items-center h-screen py-16 font-body">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-44">
        <img src="/ointrealsvg.svg" alt="ointlogo" />
      </div>

      {success ? (
        <h1>success</h1>
      ) : (
        <>
          <div className="md:w-1/2 w-full px-6 md:px-0 -mt-12">
            <label htmlFor="link" className="block text-lg self-start pb-2">
              <div className="md:flex-row flex flex-col md:space-x-3">
                <span>Enter your new tab </span>
                <span className="flex">
                  link here{" "}
                  <span className="ml-3 ">
                    <a href="#">
                      {" "}
                      <InformationCircleIcon className="w-5 h-5 mt-1.5" />
                    </a>
                  </span>
                </span>
              </div>
            </label>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-1 flex rounded-sm  shadow-sm">
                <div className="relative flex items-stretch flex-grow focus-within:z-10">
                  <input
                    type="url"
                    name="link"
                    id="link"
                    className="focus:ring-black focus:border-black border-2 border-black block w-full rounded-sm rounded-l-sm pl-4 h-12 "
                    {...register("newTabUrl", {})}
                  />
                </div>
                <button
                  type="submit"
                  className=" relative inline-flex items-center space-x-2 -ml-2 px-4 py-2 border-2 border-black text-sm font-medium rounded-r-sm text-gray-700 bg-black focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <ArrowRightIcon
                    className="h-4 w-4 text-white"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </form>
          </div>
        </>
      )}

      <footer className="bg-white">
        <div className="max-w-7xl mx-auto px-4 overflow-hidden sm:px-6 lg:px-8">
          <nav
            className="-mx-5 -my-2 flex flex-wrap justify-center"
            aria-label="Footer"
          >
            {navigation.main.map((item) => (
              <div key={item.name} className="px-5 py-2">
                <a
                  href={item.href}
                  className="text-base text-black hover:text-gray-900"
                >
                  {item.name}
                </a>
              </div>
            ))}
          </nav>

          <p className="mt-6 text-center text-sm text-black">
            &copy; 2021 oint.app
          </p>
        </div>
      </footer>

      {/* <main>
        {success ? (
          <h1>success</h1>
        ) : (
          <>
            <h1 className="title">Oint</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
              <input type="url" {...register("newTabUrl", {})} />

              <input type="submit" />
            </form>
          </>
        )}
      </main> */}
    </div>
  );
}

export async function getServerSideProps(context) {
  const pid = context.params.pid;
  const { db } = await connectToDatabase();
  const entries = db.collection("entries");
  const query = { uuid: pid };
  const { uuid, url } = await entries.findOne(query);

  return {
    props: { uuid, url },
  };
}
