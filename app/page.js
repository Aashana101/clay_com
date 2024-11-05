"use client";

import Image from "next/image";
import Head from "next/head";

export default function Home() {
  const handleGoogleSignIn = () => {
    window.location.href = "https://accounts.google.com/signin";
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <Head>
        <title>Clay.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex items-center justify-center w-full h-screen">
        <div className="bg-white shadow-2xl flex w-full h-full max-w-none">
          <div className="w-full lg:w-1/2 p-5 flex items-center justify-center relative">
            <div className="absolute top-8 left-20">
              <Image
                src="https://app.clay.com/assets/Clay-logo-tilt-2024-DKnp3RSV.png"
                alt="clay-logo"
                className="w-20"
                priority
                width={50}
                height={50}
              />
            </div>
            <div className="mt-[-90px]">
              <h1
                data-slot="heading"
                className="text-4xl font-bold tracking-tight"
              >
                Welcome back!
              </h1>
              <p
                data-slot="text"
                className="text-sm font-normal text-content-tertiary text-gray-500"
              >
                Use Clay to build your personalized outreach campaigns in
                minutes
              </p>
              <button
                onClick={handleGoogleSignIn}
                className="flex items-center justify-center w-full mt-4 px-4 py-2 text-black bg-gray-100 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <Image
                  src="https://cdn2.hubspot.net/hubfs/53/image8-2.jpg" // Google logo
                  alt="Google logo"
                  className="mr-2"
                  width={50}
                  height={50}
                />
                Sign in with Google
              </button>
              <div className="flex items-center mt-4">
                <div className="flex-grow border-b border-gray-300"></div>
                <span className="mx-2 text-gray-500">OR</span>
                <div className="flex-grow border-b border-gray-300"></div>
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="mt-4 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-500 text-white mt-5 w-full px-4 py-2 rounded-md">
                Continue
              </button>
              <div className="mt-4">
                <span className="text-sm text-gray-60">
                  Don&apos;t have an account?{" "}
                  <span className=" hover:text-blue-500 cursor-pointer">
                    Sign Up
                  </span>
                </span>
              </div>

            <footer className="relative w-full p-4 mt-8">
              <div className="flex justify-center space-x-4 ">
                <a
                  href="/terms"
                  className="text-sm text-blue-500 whitespace-nowrap"
                >
                  Terms & Condition
                </a>
                <span className="text-gray-500">|</span>
                <a
                  href="/privacy"
                  className="text-sm text-blue-500 whitespace-nowrap"
                >
                  Privacy Policy
                </a>
              </div>
            </footer>
          </div>
          </div>
          <div className="hidden items-center justify-center bg-yellow-100 lg:flex lg:w-1/2 xl:w-3/5 mr-0">
            <Image
              src="https://app.clay.com/assets/signInBanner-B-u_aDQ5.png"
              priority
              className="w-full h-auto mr-0 ml-10"
              width={750}
              height={900}
              alt="Photo section"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
