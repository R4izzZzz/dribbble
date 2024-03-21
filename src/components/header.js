export default function Header() {
  return (
    <div className="h-full w-full bg-black">
      {/* header */}
      <div className="h-24 flex items-center p-12 w-screen justify-between">
        <div className="flex flex-row justify-between w-[500px]">
          <p className="">Find designers</p>
          <p className="ml-2">Inspiration</p>
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
          <input className="w-48 h-8 rounded-2xl" />
          <button className="h-12 w-20 text-black ">Log in</button>
          <button className="h-12 w-20 bg-black rounded-3xl text-white ">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
