/* This example requires Tailwind CSS v2.0+ */
const faqs = [
    {
      id: 1,
      question: "Step 1.",
      answer:
        "Tap the top of any smartphone to the OintTag. (Phone has to be awake, not logged in)",
    },
    {
        id: 2,
        question: "Step 2.",
        answer:
          "Enter what link you want the OintTag to open and click save.",
    },
    {
        id: 3,
        question: "Step 3.",
        answer:
          "Bookmark the setup page because this is how you edit what the OintTag opens.",
    },
    {
        id: 3,
        question: "Step 4.",
        answer:
          "Put the OintTag on the bottom of your phone.",
    },
    {
        id: 4,
        question: "Step 5.",
        answer:
          "Start tapping!",
    },
  ]

  export default function Setup() {
    return (
      <div className="">
        <div className="max-w-6xl md:max-w-2xl mx-auto py-12 px-10 sm:px-6 lg:py-12 font-body">
          <h2 className="text-5xl text-black text-center mb-12">OintTag Setup</h2>

          <div
            className="sm:hidden flex flex-col items-center"
            style={{
            position: "relative",
            paddingBottom: "56.25%" /* 16:9 */,
            height: 0,
            }}
        >

        <iframe
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          src="https://www.youtube.com/embed/z61Hlvva45Q"
          allowFullScreen
          style={{ border: 0 }}
          sandbox="allow-scripts allow-same-origin allow-popups allow-presentation"
        />
      </div>
      <div className="hidden sm:flex flex-col items-center">
        <iframe
          width="640"
          height="360"
          src="https://www.youtube.com/embed/z61Hlvva45Q"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>


          <div className="mt-4">
            <dl className="divide-y divide-gray-200 font-mono">
              {faqs.map((faq) => (
                <div key={faq.id} className="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8">
                  <dt className="text-2xl text-gray-900 md:col-span-5">{faq.question}</dt>
                  <dd className="mt-2 md:mt-0 md:col-span-7">
                    <p className="text-md text-gray-500">{faq.answer}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }
