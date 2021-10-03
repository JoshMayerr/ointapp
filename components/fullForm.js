import PickLinkForm from "./pickLinkForm";
import { useState } from "react";
import links from "../util/linkData";
import EnterLinkForm from "./enterLinkForm";

export default function FullForm({
  success,
  setSuccess,
  input,
  setInput,
  onSubmit,
  currentLink,
  setCurrentLink,
}) {
  const [progress, setProgress] = useState(false);
  return (
    <div>
      {progress ? (
        <EnterLinkForm
          currentLink={currentLink}
          setCurrentLink={setCurrentLink}
          setProgress={setProgress}
          success={success}
          setSuccess={setSuccess}
          input={input}
          setInput={setInput}
          onSubmit={onSubmit}
        />
      ) : (
        <PickLinkForm
          links={links}
          setProgress={setProgress}
          currentLink={currentLink}
          setCurrentLink={setCurrentLink}
        />
      )}
    </div>
  );
}
