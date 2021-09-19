import Head from "next/head";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import emailjs from "emailjs-com";
import Footer from "../components/Footerr";
import { Player, PosterImage, ControlBar, PlayToggle } from "video-react";
import "video-react/dist/video-react.css";

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  // const onSubmit = (data) => console.log(data);
  console.log(errors);
  const toastifySuccess = () => {
    toast.dark("Sign Up Complete! Check your email soon 👀", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "dark",
      toastId: "notifyToast",
    });
  };

  const onSubmit = async (data) => {
    // Send form email
    try {
      const templateParams = {
        name: data.Name,
        email: data.Email,
        message: data.Message,
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_USER_ID
      );

      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="relative bg-white overflow-hidden font-body">
      <Head>
        <title>Open In New Tab</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative sm:pt-6 pb-10">
        <main className="mt-6 mb-24 sm:mb-0 mx-auto max-w-7xl px-4 sm:px-6 lg:mt-6">
          <ToastContainer />
          <div className="text-center">
            <div className="md:max-w-5xl md:mx-auto flex flex-col items-center">
              <div className="mt-4 w-36">
                <span className=" ">
                  <span className=" -mr-8">
                    <img src="/ointrealsvg.svg" alt="ointlogo" />
                  </span>
                </span>
              </div>
              <div className="md:max-w-2xl">
                <h1 className="text-6xl sm:text-5xl uppercase mt-4 sm:mt-8">
                  Share your Linktree Profile in the Physical World
                </h1>
                <p className="mt-12 sm:mt-10 text-base text-black sm:text-lg">
                  Next time you go out to dinner, a concert or a club, share
                  your profile with a quick tap, no typing, no app to download.
                  Just attach our nifty oint tag to your smartphone.
                </p>
                <div className="mt-12 relative mx-auto w-full lg:max-w-lg">
                  <div className="aspect-w-16 aspect-h-9 ">
                    <iframe
                      src="/promo.gif"
                      width="100%"
                      height="100%"
                      className="absolute"
                      frameBorder="0"
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="w-full text-left py-16">
                <div className="px-6 py-6  border-4 border-black rounded-lg md:py-12 md:px-8 xl:flex xl:items-center">
                  <div className="xl:w-0 xl:flex-1 pr-8">
                    <h2 className="text-2xl font-extrabold tracking-tight text-black sm:text-5xl uppercase">
                      Get one now
                    </h2>
                    <p className="mt-3 max-w-2xl text-lg leading-6 text-black">
                      The first 100 users to sign up for our beta program will
                      receive their very own oint tag for free. All you have to
                      do is enter your email.
                    </p>
                  </div>
                  <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className=" sm:flex"
                    >
                      <label htmlFor="email" className="sr-only">
                        Email
                      </label>

                      <input
                        type="text"
                        name="Email"
                        id="Email"
                        autoComplete="email"
                        {...register("Email", {
                          required: true,
                          pattern: /^\S+@\S+$/i,
                        })}
                        className="block w-full py-3 text-base border-2 rounded-md bg-transparent placeholder-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:flex-1 border-black"
                        placeholder="Enter your email"
                      />

                      <button
                        type="submit"
                        className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                      >
                        Sign Up
                      </button>
                    </form>
                    <span>
                      {errors.Email && "Email is required and must be valid"}
                    </span>
                    <p className="mt-3 text-sm text-gray-400">
                      We care about the protection of your data. No spam, ever.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
