import Image from "next/image";
import { Inter } from "next/font/google";
import { data } from "@/data/homepagedata";
import Card from "@/components/card";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  console.log(data);
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center mt-24 font-semibold">
        <div className="bg-yellow-100 p-10 py-2 flex justify-center items-center rounded-full text-black hover:text-gray-600 transition-all duration-500">
          Over 3 million ready-to-work creatives!
        </div>
      </div>
      <h1 className="text-6xl flex items-center justify-center mt-12 font-medium ">
        The world’s destination for design
      </h1>
      <h1 className="flex items-center justify-center font-medium mt-12">
        Get inspired by the work of millions of top-rated designers & agencies
        around the world.
      </h1>
      <div className="flex items-center justify-center mt-8">
        <button className="bg-black hover:bg-slate-800 transition-all duration-300 p-4  py-4 text-white rounded-full">
          Get Started
        </button>
      </div>
      <h1 className="text-4xl flex items-center justify-center mt-48">
        Explore inspiring designs
      </h1>
      <div className="grid grid-cols-3 gap-4 mt-12 px-20">
        {data.map((e, i) => {
          return <Card data={e} />;
        })}
      </div>
      <div className="flex items-center justify-center mt-12">
        <button className="border-2 rounded-full border-black hover:border-gray-600 bg-white hover:bg-slate-100 transition-all duration-300 text-black hover:text-gray-600 p-4 py-4">
          Browse more inspiration
        </button>
      </div>
      <div className="flex items-center justify-center">
        <div className="bg-yellow-100 w-full h-screen mt-40 flex flex-col items-center">
          <h1 className="text-6xl text-center text-semibold w-1/3 mt-24">
            Find your next designer today
          </h1>
          <h1 className="w-2/5 text-center text-xl mt-12">
            The world’s leading brands use Dribbble to hire creative talent.
            Browse millions of top-rated portfolios to find your perfect
            creative match.
          </h1>
          <div className=" mt-12">
            <button className="bg-black hover:bg-slate-800 transition-all duration-300 p-6 py-4 text-white font-medium rounded-full">
              Get started now
            </button>
            <button className="bg-white p-6 py-4 text-black hover:text-gray-600 transition-all duration-300 font-medium ml-4 rounded-full">
              Learn about hiring
            </button>
          </div>
          <div className="flex mt-12">
            <h1 className="text-xl">Are you a designer?</h1>
            <h1 className="text-xl underline underline-offset-2">
              Join Dribbble
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
