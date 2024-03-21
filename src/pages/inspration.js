import Image from "next/image";
import { Inter } from "next/font/google";
import { data } from "@/data/homepagedata";
import Card from "@/components/card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div> 
        <div className="flex justify-center flex-col items-center"> 
         <div className="text-6 xl w-1/2 text-center"> Discover the world’s top designers & creatives   </div>
         <div className=" w-1/3 text-center mt-12"> Dribbble is the leading destination to find & showcase creative work and home to the world's best design professionals.  </div>
         <div clasName="bg-yellow-300 h-[58px] w-[800px] mt-12"> sdfsd </div>
         <div className="flex justify-center mt-12"> 
          <div className="text-sm"> Trending searches
            <div className=" border"> landing page </div>
          </div>
         </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
        {data.map((e, i) => {
          return <Card data={e} />;
        })}
      </div>
    </div>
  );
}
