import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  return (
    <div className="h-full w-full">
      {/* header */}
      <div className="h-24 flex items-center p-12 w-screen justify-between">
        <div className="flex flex-row justify-between w-[400px] font-semibold">
          <p className="text-black hover:text-gray-600 transition-all duration-500">
            Find designers
          </p>
          <p
            onClick={() => router.push("/inspration")}
            className="ml-2 text-black hover:text-gray-600 transition-all duration-500"
          >
            Inspiration
          </p>
          <p className="ml-2 text-black hover:text-gray-600 transition-all duration-500">
            Courses
          </p>
          <p className="ml-2 text-black hover:text-gray-600 transition-all duration-500">
            Job
          </p>
          <p className="ml-2 text-black hover:text-gray-600 transition-all duration-500">
            Go Pro
          </p>
        </div>
        <div className="w-[100px] ">
          <img
            className="h-6"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Dribbble_Text_Logo_Script.svg/2560px-Dribbble_Text_Logo_Script.svg.png"
          />
        </div>
        <div className="w-[400px] flex flex-row justify-between">
          <input
            className="p-6 py-2 rounded-full bg-slate-100"
            placeholder="Search..."
          />
          <button className="h-12 w-20 text-black hover:text-gray-600 font-semibold transition-all duration-500">
            Log in
          </button>
          <button className="h-12 w-20 bg-black hover:bg-slate-600 transition-all duration-300 rounded-3xl text-white font-semibold">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
