import { connectToDatabase } from "../../lib/mongodb";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Link from "next/link";
import QRCode from "react-qr-code";
import FullForm from "../../components/fullForm";

export default function Home({ uuid, url, urlType }) {
  const unpruneData = (input) => {
    if (input.startsWith("https://")) {
      return input.replace(urlType, "");
    } else if (input.startsWith("http://")) {
      return input.replace(urlType, "");
    } else {
      return input;
    }
  };

  const [success, setSuccess] = useState(false);
  const [input, setInput] = useState(unpruneData(url));
  const [currentLink, setCurrentLink] = useState(null);

  const pruneData = () => {
    if (input.startsWith("https://") || input.startsWith("http://")) {
      return input;
    } else {
      return currentLink.URL.concat(input);
    }
  };

  //once URL IS READY TO GO
  const updateUrl = async (a) => {
    if (a != url) {
      // axios post to nextjs api with new url and id
      const sendData = { uuid, url: a, urlType: currentLink.URL };
      return axios
        .post(`/api/${uuid}`, sendData)
        .then(function(response) {})
        .catch(function(error) {
          console.log(error);
        });
    }
  };
  //make sure its new ionput
  //prune data
  //show success message
  const onSubmit = async () => {
    //show success message w/ conditional messaging
    console.log(input);
    console.log(currentLink);
    if (input != url) {
      const a = pruneData();
      console.log(a);
      await updateUrl(a);
      setSuccess(true);
    } else {
      return;
    }

    //   if (input != data.url) {
    //     setSuccess(true);
    //     reset();
    //     await UpdateUrl(input);
    //   }
    //   return;
  };

  //   useEffect(() => {
  //     if (!isFirstMount.current) {
  //       setValue("url", selected.real);
  //     } else {
  //       isFirstMount.current = false;
  //     }
  //     return () => {};
  //   }, [selected]);

  //   const {
  //     register,
  //     setValue,
  //     handleSubmit,
  //     formState: { errors },
  //     reset,
  //   } = useForm({
  //     defaultValues: {
  //       url: input,
  //     },
  //     mode: "onChange",
  //   });

  return (
    <div className="min-h-screen flex flex-col items-center select-text font-body">
      <div className="px-6 w-full sm:w-1/2 text-center">
        <FullForm
          success={success}
          setSuccess={setSuccess}
          input={input}
          setInput={setInput}
          onSubmit={onSubmit}
          currentLink={currentLink}
          setCurrentLink={setCurrentLink}
        />
      </div>
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
    var urlType = user.urlType;
  } else {
    return {
      notFound: true,
    };
  }

  return {
    props: { uuid, url, urlType },
  };
}
