import { useState } from "react";
import { Button } from "@nextui-org/react";
import { IconCaretUpFilled } from "@tabler/icons-react";
export default function ToTop() {
  const [showBtn, setShowBtn] = useState(false);

  if (typeof window !== "undefined") {
    // browser code
    window.onscroll = function () {
      scrollFunction();
    };
  }

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <Button
      onClick={topFunction}
      id="myBtn"
      className={
        showBtn
          ? `fixed bottom-5 right-5 rounded-full w-[3rem] h-[4rem] bg-slate-800/40 text-white hover:bg-blue-200 hover:text-black`
          : `hidden`
      }
      title="Go to top"
      size="sm"
    >
      <IconCaretUpFilled
        width={50}
        height={50}
      />
    </Button>
  );
}
