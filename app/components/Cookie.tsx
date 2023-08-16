import React from "react";
import { Abel } from "next/font/google";

const montserrat = Abel({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export default function Cookie() {
  return (
    <section
      className={`fixed bottom-5 flex w-full items-center justify-center ${montserrat.className}`}
    >
      <div className=" h-32 w-1/2 bg-green-200 p-4 uppercase">
        <h2 className="text-lg">Cookie Notice</h2>
        <p className="text-base">
          We use cookies to enhance your browsing experience. By clicking
          &quot;Accept,&quot; you consent to the use of all cookies.
        </p>
        <div className="flex items-center gap-4">
          <button className="bg-red-400 p-2 text-lg uppercase">
            Reject all cookies
          </button>
          <button className="bg-green-400 p-4 text-lg uppercase">Accept</button>
        </div>
      </div>
    </section>
  );
}
