"use client";

import Link from "next/link";
import Image from "next/image";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="h-screen w-full flex overflow-hidden">
      {/* Left Panel - Gradient box, fixed, not scrollable */}
      <div
        className="hidden lg:flex lg:w-1/2 h-screen overflow-hidden shrink-0 flex-col items-center justify-center gap-8 p-8"
        style={{ backgroundColor: "#431028" }}
      >
        {/* Decorative images */}
        {/* <div className="flex flex-wrap justify-center gap-6 w-full max-w-md">
          <img
            src="/images/Frame%202147224853.png"
            alt=""
            aria-hidden
          />
          <img
            src="/images/Frame%202147224854.png"
            alt=""
            aria-hidden
          />
        </div> */}

        <Link href="/" className="flex flex-col items-center gap-4">
          <Image
            src="/images/Logo.svg"
            alt="DKGPro"
            width={200}
            height={48}
            className="brightness-0 invert"
          />
        </Link>
      </div>

      {/* Right Panel - Form section, scrollable only */}
      <div className="flex-1 w-full lg:w-1/2 h-screen flex flex-col overflow-y-auto bg-white">
        {children}
      </div>
    </div>
  );
}
