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
        id: 4,
        question: "Step 4.",
        answer:
          "Start tapping!",
    },
    // More questions...
  ]

  export default function Setup() {
    return (
      <div className="">
        <div className="max-w-7xl mx-auto py-12 px-6 sm:px-6 lg:py-16 lg:px-8 font-body">
          <h2 className="text-6xl text-black text-center">OintTag Setup</h2>
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
