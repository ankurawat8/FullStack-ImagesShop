import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center mt-10">
      <div className="sm:w-[30vw] w-full bg-white rounded-md py-4 px-6">
        <h1 className="text-2xl font-bold my-4">Let,s Connect Us</h1>
        <form className="w-full">
          {/* for userName */}
          <div>
            <label className="block text-sm font-semibold my-3" htmlFor="name">
              User Name
            </label>
            <input
              type="text"
              placeholder="anku258"
              name="name"
              id="name"
              className="px-4 py-2 border-y border-black rounded-md focus:outline-none focus:ring-black focus:border-b-2 text-sm font-medium w-full"
            />
          </div>
          {/* For Email */}
          <div>
            <label className="block text-sm font-semibold my-3" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              placeholder="your@gmail.com"
              name="email"
              id="email"
              className="px-4 py-2 border-y border-black rounded-md focus:outline-none focus:ring-black focus:border-b-2 text-sm font-medium w-full"
            />
          </div>
          {/* For Password */}
          <div>
            <label
              className="block text-sm font-semibold my-3"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Your Password"
              name="password"
              id="password"
              autoComplete="off"
              className="px-4 py-2 border-y border-black rounded-md focus:outline-none focus:ring-black focus:border-b-2 text-sm font-medium w-full"
            />
          </div>
          {/* Forget Account Password */}
          <div className="flex items-center justify-end">
            <a
              href="#"
              className="text-xs  hover:text-black text-slate-500 mt-2 font-medium "
            >
              Foget Password
            </a>
          </div>
          {/* Create Account */}
          <Link
            className="text-xsmb-3 hover:text-black text-slate-500 font-medium"
            to="/signup"
          >
            Create Account
          </Link>
          {/* Login Button */}
          <button
            type="submit"
            className="px-4 py-2 border-y border-black rounded-md focus:outline-none bg-black text-white focus:ring-black focus:border-b-2 text-sm my-4 font-medium w-full"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
