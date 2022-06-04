import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <Link to="/">
      <div className="flex items-center my-5 gap-1.5 text-blue-700 border border-blue-500 w-fit px-5 py-2.5 rounded hover:bg-blue-500 hover:text-white mx-2.5">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 16l-4-4m0 0l4-4m-4 4h18"
          ></path>
        </svg>
        <span className="text-md">Kembali</span>
      </div>
    </Link>
  );
};

export default BackButton;
