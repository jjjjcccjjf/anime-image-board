"use client";

import React, { useEffect, useState } from "react";
import { Abel } from "next/font/google";
import Cookies from "js-cookie";

const montserrat = Abel({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

const generateRandomString = (length: number) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomString = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }
  return randomString;
};

export default function Cookie() {
  const [isAcceptingCookies, setIsAcceptingCookies] = useState(() => {
    const isAcceptingCookies = localStorage.getItem("isAcceptingCookies");

    switch (isAcceptingCookies) {
      case "true":
        return true;
      case "false":
        return false;
      case null:
      default:
        return null;
    }
  });

  useEffect(() => {
    if (isAcceptingCookies) {
      const existingCookie = Cookies.get("token");
      if (!existingCookie) {
        const randomString = generateRandomString(30);
        Cookies.set("token", randomString, { expires: 30 }); // Expires in 30 days
      }
    }
  }, [isAcceptingCookies]);

  const handleCookieButton = (wantCookies: boolean) => {
    setIsAcceptingCookies(wantCookies);
    localStorage.setItem("isAcceptingCookies", wantCookies.toString());
  };

  return (
    <>
      {isAcceptingCookies === null && (
        <section
          className={`fixed bottom-5 flex w-full items-center justify-center ${montserrat.className}`}
        >
          <div className=" flex h-36 w-1/2 flex-col gap-1 bg-green-200 p-4 uppercase">
            <h2 className="">Cookie Notice</h2>
            <p className="text-base">
              We use cookies to enhance your browsing experience. By clicking
              &quot;Accept,&quot; you consent to the use of all cookies.
            </p>
            <div className="flex items-center gap-2">
              <button
                className="bg-red-400 px-2 py-1 uppercase"
                onClick={() => handleCookieButton(false)}
              >
                Reject all cookies
              </button>
              <button
                className="bg-green-400 px-2 py-1 uppercase"
                onClick={() => handleCookieButton(true)}
              >
                Accept all cookies
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
