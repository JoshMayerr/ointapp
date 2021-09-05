import Head from "next/head";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import emailjs from "emailjs-com";

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

      <div className="relative pt-6">
        <main className="mt-6 mx-auto max-w-7xl px-4 sm:px-6 lg:mt-6">
          <ToastContainer />
          <div className="text-center">
            <div className="md:max-w-2xl md:mx-auto flex flex-col items-center">
              <div className="mt-4 w-36">
                <span className=" ">
                  <span className=" -mr-3">
                    <img src="/ointrealsvg.svg" alt="ointlogo" />
                  </span>
                </span>
              </div>
              <h1 className="text-6xl sm:text-7xl uppercase mt-8">it's time</h1>
              <p className="mt-8 sm:mt-10 text-base text-black sm:text-lg">
                The first 100 users to sign up for our early bird program will
                recieve their very own oint for 100% free. All you have to do is
                enter your email.
              </p>
              <div className="mt-6 sm:w-3/4 lg:mx-0">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="mt-3 sm:flex"
                >
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  {/* <input
                    type="text"
                    name="email"
                    id="email"
                    className=""
                  /> */}
                  <input
                    type="text"
                    name="Email"
                    id="Email"
                    autoComplete="email"
                    {...register("Email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                    className="block w-full py-3 text-base rounded-md placeholder-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:flex-1 border-black"
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

                <p className="mt-3 text-sm text-gray-500">
                  I promise you will not recieve any spam.
                </p>
              </div>
            </div>
            <div className="mt-12 relative">
              <div className="relative mx-auto w-full lg:max-w-lg">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src="/vid1.mp4"
                    frameborder="0"
                    allow="autoplay;"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
