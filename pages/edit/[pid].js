import { connectToDatabase } from "../../lib/mongodb";
import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import {
  ArrowRightIcon,
  InformationCircleIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import Footerr from "../../components/footerr";
import QRCode from "react-qr-code";
import Presets from "../../components/presets";

export default function Home({ uuid, url }) {
  const [success, setSuccess] = useState(false);
  const [selected, setSelected] = useState(url);
  const [input, setInput] = useState(url);
  const isFirstMount = useRef(true);

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
    <div className="w-full flex flex-col justify-between items-center h-screen py-16 font-body tracking-wider">
      <Link href="/">
        <a className="sm:w-60 w-60 -mr-2">
          <img src="/ointrealsvg.svg" alt="ointlogo" />
        </a>
      </Link>

      {success ? (
        <>
          <div className="md:w-1/2 w-full px-6 md:px-0 sm:-mt-12 -mt-36 text-center">
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
            {/* <div className="w-24">
              <QRCode value={`https://oint.app/edit/${uuid}`} />
            </div> */}
          </div>
        </>
      ) : (
        <>
          <div className="md:w-1/2 w-full px-6 md:px-0 sm:-mt-12 -mt-36">
            <label htmlFor="link" className="block text-lg self-start pb-2">
              <div className="md:flex-row flex">
                <span>Enter your new tab link here </span>
                <span className="ml-1">
                  <Link href="/help">
                    <a>
                      {" "}
                      <InformationCircleIcon className="w-5 h-5 mt-1" />
                    </a>
                  </Link>
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
                    className="focus:ring-black focus:border-black border-2 border-black block w-full rounded-sm rounded-l-sm pl-4 h-12 tracking-tight text-md font-mono"
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
            {/* <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-1  rounded-sm  shadow-sm">
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <label htmlFor="country" className="sr-only">
                      Country
                    </label>
                    <select
                      id="country"
                      name="country"
                      className="focus:ring-indigo-500 focus:border-indigo-500 bg-gray-100 border-black border-2 h-full py-0 pl-3 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                    >
                      <option>Snapchat @</option>
                      <option>CA</option>
                      <option>EU</option>
                    </select>
                  </div>
                  <input
                    className="focus:ring-indigo-500 focus:border-indigo-500 border-2 border-black block w-full pl-16 sm:text-sm rounded-md tracking-tight text-sm font-mono"
                    type="url"
                    name="link"
                    id="link"
                    placeholder="https://example.com"
                    // className="focus:ring-black focus:border-black border-2 border-black block w-full rounded-sm rounded-l-sm pl-4 h-12 tracking-tight text-md font-mono"
                    {...register("newTabUrl", {})}
                  />
                </div>
              </div>
            </form> */}

            <div className="mt-3">
              <Presets selected={selected} setSelected={setSelected} />
            </div>
          </div>
        </>
      )}

      <Footerr />
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
