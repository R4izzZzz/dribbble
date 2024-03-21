import Image from "next/image";
import { Inter } from "next/font/google";
import { data } from "@/data/homepagedata";
import Card from "@/components/card";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-screen">
      <Header />
      <div className="flex justify-center flex-col items-center">
        <div className="text-6xl flex items-center justify-center mt-12 font-medium w-1/3 text-center"> Discover the world’s top designers & creatives   </div>
        <div className=" w-1/4 flex items-center justify-center mt-12 text-center"> Dribbble is the leading destination to find & showcase creative work and home to the world's best design professionals.  </div>
        <div className="flex items-center justify-center mt-12 w-1/3">
          <div className="border hover:border-pink-400 text-white rounded-full w-full ">
            <input
              className="p-2 py-2 rounded-full font-light text-base text-black w-full h-14"
              placeholder="Search 18 million+ shots..."
            />
          </div>
        </div>
        <div className="mt-12">
          <div className="flex gap-2 items-center">
            <a className="text-sm font-light"> Trending searches</a>
            <button className="border border-gray hover:border-slate-400 p-4 py-1 rounded-full">
              landing page
            </button>
            <button className="border border-gray hover:border-slate-400 p-4 py-1 rounded-full">
              ios
            </button>
            <button className="border border-gray hover:border-slate-400 p-4 py-1 rounded-full">
              food
            </button>
            <button className="border border-gray hover:border-slate-400 p-4 py-1 rounded-full">
              landingpage
            </button>
            <button className="border border-gray hover:border-slate-400 p-4 py-1 rounded-full">
              uxdesign
            </button>
            <button className="border border-gray hover:border-slate-400 p-4 py-1 rounded-full">
              appdesign
            </button>
          </div>
        </div>
        <div className="mt-24 flex items-center justify-between w-screen px-20">
          <button className="border hover:border-slate-400 p-6 py-2 rounded">
            Popular
          </button>
          <div className="flex gap-2 items-center">
            <button className="bg-[#f8f7f4]  p-4 py-1 rounded-full">
              Discover
            </button>
            <button className="bg-[#f8f7f4]  p-4 py-1 rounded-full">
              Animation
            </button>
            <button className="bg-[#f8f7f4]  p-4 py-1 rounded-full">
              Branding
            </button>
            <button className="bg-[#f8f7f4]  p-4 py-1 rounded-full">
              Illustration
            </button>
            <button className="bg-[#f8f7f4]  p-4 py-1 rounded-full">
              Mobile
            </button>
            <button className="bg-[#f8f7f4]  p-4 py-1 rounded-full">
              Print
            </button>
            <button className="bg-[#f8f7f4]  p-4 py-1 rounded-full">
              Product Design
            </button>
            <button className="bg-[#f8f7f4]  p-4 py-1 rounded-full">
              Typography
            </button>
            <button className="bg-[#f8f7f4]  p-4 py-1 rounded-full">
              Web Design
            </button>
          </div>
          <button className="border hover:border-slate-400 p-6 py-2 rounded">
            Filters
          </button>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-3 gap-4 px-20">
        {data.map((e, i) => {
          return <Card data={e} />;
        })}
      </div>
      <div className="flex items-center justify-center mt-12">
        <button className="bg-slate-900	hover:bg-slate-700 text-sm font-bold text-white rounded-full p-4 py-2">
          Sign up to continue
        </button>
      </div>
    </div>
  );
}
