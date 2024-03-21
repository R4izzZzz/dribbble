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
      <div className="flex items-center justify-center">
        <div className="bg-yellow-100 p-10 py-2 flex justify-center items-center rounded-full ">
          Over 3 million ready-to-work creatives!
        </div>
      </div>
      <h1 className="text-6xl ">The world’s destination for design</h1>
      <div className="grid grid-cols-3 gap-4">
        {data.map((e, i) => {
          return <Card data={e} />;
        })}
      </div>
    </div>
  );
}
