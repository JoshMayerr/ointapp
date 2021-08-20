import Head from "next/head";
import { useRouter } from "next/router";
import { connectToDatabase } from "../../lib/mongodb";
import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ArrowRightIcon, InformationCircleIcon } from "@heroicons/react/solid";
import Link from "next/link";
import Presets from "../../components/presets";
import useUpdateEffect from "../../lib/useUpdateEffect";

export default function Home({ uuid, url }) {
  const [success, setSuccess] = useState(false);
  const [selected, setSelected] = useState(url);
  const [input, setInput] = useState(url);
  const isFirstMount = useRef(true);

  // console.log(url, "url");
  // console.log(input, "input");
  // console.log(selected, "selected");

  const navigation = {
    main: [
      { name: "help", href: "/help" },
      { name: "contact", href: "/contact" },
      { name: "about", href: "/about" },
    ],
  };

  const UpdateUrl = async (data) => {
    if (input != data.newTabUrl) {
      // axios post to nextjs api with new url and id
      const sendData = { uuid, url: data.newTabUrl };
      console.log(sendData, "adouwdgo9wdgoawdgo");
      return axios
        .post(`/api/${uuid}`, sendData)
        .then(function(response) {})
        .catch(function(error) {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    if (!isFirstMount.current) {
      setValue("newTabUrl", selected.real);
    } else {
      isFirstMount.current = false;
    }
    return () => {};
  }, [selected]);

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      newTabUrl: input,
    },
    mode: "onChange",
  });
  const onSubmit = async (data) => {
    //show success message w/ conditional messaging
    if (input != data.newTabUrl) {
      setSuccess(true);
      reset();
      await UpdateUrl(data);
    }
    return;
  };

  return (
    <div className="w-full flex flex-col justify-between items-center h-screen py-16 font-body">
      <Head>
        <title>Open In New Tab</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="sm:w-44 w-40 -mr-2">
        <img src="/ointrealsvg.svg" alt="ointlogo" />
      </div>

      {success ? (
        <>
          <div className="md:w-1/2 w-full px-6 md:px-0 sm:-mt-12 -mt-48 text-center">
            <h1 className="text-3xl pb-4">Success!</h1>
            <p>
              Your oint is now initialized and ready to share your new tab link.
            </p>
            <p className="">
              IMPORTANT: If you would like to edit your new tab link, then make
              sure to save this{" "}
              <span className="text-blue-500 underline">
                <a href={`/edit/${uuid}`}>edit URL.</a>
              </span>
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="md:w-1/2 w-full px-6 md:px-0 sm:-mt-12 -mt-48">
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
                    placeholder="https://example.com"
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
            <div className="mt-3">
              <Presets selected={selected} setSelected={setSelected} />
            </div>
          </div>
        </>
      )}

      <footer className="bg-white">
        <div className="max-w-7xl sm:mt-0 -mt-40 mx-auto px-4 overflow-hidden sm:px-6 lg:px-8">
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
        </div>
      </footer>
    </div>
  );
}

export async function getServerSideProps(context) {
  const pid = context.params.pid;
  const { db } = await connectToDatabase();
  const entries = db.collection("entries");
  const query = { uuid: pid };
  const user = await entries.findOne(query);

  if (user) {
    var uuid = user.uuid;
    var url = user.url;
  } else {
    return {
      notFound: true,
    };
  }

  return {
    props: { uuid, url },
  };
}
