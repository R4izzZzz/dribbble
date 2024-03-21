export default function Card({ data }) {
  return (
    <div>
      <img className="rounded-md " src={data.img} />
      <div className="flex justify-between items-center">
        {data.name}
        <div className="flex gap-4 mt-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="text-gray-500"
            viewBox="0 0 16 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M10.74 2c2.349 0 3.927 2.235 3.927 4.32C14.667 10.543 8.119 14 8 14c-.118 0-6.667-3.457-6.667-7.68C1.333 4.235 2.911 2 5.26 2 6.607 2 7.49 2.683 8 3.283 8.511 2.683 9.393 2 10.74 2z"
            ></path>
          </svg>
          {data.likes}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            className="text-gray-500"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              d="M8 3C4.37 3 1.988 6.218 1.188 7.49c-.097.155-.146.232-.173.35-.02.09-.02.23 0 .32.027.118.076.195.173.35C1.988 9.781 4.37 13 8 13c3.63 0 6.012-3.218 6.812-4.49.097-.155.146-.232.173-.35a.84.84 0 000-.32c-.027-.118-.076-.195-.173-.35C14.012 6.219 11.63 3 8 3z"
            ></path>
            <path fill="#fff" d="M8 10a2 2 0 100-4 2 2 0 000 4z"></path>
          </svg>
          {data.views}
        </div>
      </div>
    </div>
  );
}
