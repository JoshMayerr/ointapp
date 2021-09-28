import { NextSeo } from "next-seo";

const Meta = () => (
  <>
    <NextSeo
      title="Open In New Tab"
      description="Open any link in the physical world. No app necessary."
      canonical="https://www.oint.app/"
      openGraph={{
        url: "https://www.oint.app",
        title: "Open In New Tab",
        description: "Open any link in the physical world. No app necessary.",
        site_name: "Open In New Tab",
      }}
      twitter={{
        handle: "@ointapp",
        site: "https://oint.app",
        cardType: "summary_large_image",
      }}
    />
  </>
);

export default Meta;
