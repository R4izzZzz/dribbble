export default function Header() {
  return (
    <div className="h-full w-full">
      {/* header */}
      <div className="h-24 flex items-center p-12 w-screen justify-between">
        <div className="flex flex-row justify-between w-[400px] font-semibold">
          <p className="">Find designers</p>
          <p className="ml-2 text-black hover:text-grey-500">Inspiration</p>
          <p className="ml-2">Courses</p>
          <p className="ml-2">Job</p>
          <p className="ml-2">Go Pro</p>
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
          <button className="h-12 w-20 text-black font-semibold">Log in</button>
          <button className="h-12 w-20 bg-black rounded-3xl text-white font-semibold">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
