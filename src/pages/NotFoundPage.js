import Wrapper from "./../components/layouts/Wrapper";
import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <Wrapper>
      <div className="grid lg:grid-cols-2 bg-white rounded my-20 justify-center items-center ">
        <div className="grid gap-2.5">
          <h1 className="text-6xl font-semibold text-red-500">404</h1>
          <h6 className="text-3xl">Sorry we couldn't find this page</h6>
          <p>
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link to="/">
            <button className="mt-5 py-2.5 px-6 bg-blue-500 text-white rounded">
              Back to home
            </button>
          </Link>
        </div>
        <div>
          <div className="w-96">
            <img
              className="w-full object-cover"
              src="/images/404.png"
              alt="error page"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default NotFoundPage;
