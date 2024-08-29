import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="max-w-96 mx-auto space-y-4 text-ctm-purple">
      <div className="grid grid-cols-2">
        <label>Enter Your Email Id:</label>
        <input
          className="rounded-md px-2 text-xs text-slate-500"
          type="email"
          name="email"
        />
      </div>
      <div className="grid grid-cols-2">
        <label>Enter Password:</label>
        <input
          className="rounded-md px-2 text-xs text-slate-500"
          type="password"
          name="password"
        />
      </div>
      <div className="grid grid-cols-2">
        <Link
          to={"/signup"}
          className="text-sm text-center text-ctm-purple border-ctm-purple border-2 rounded-md px-2 py-2 mx-2">
          Signup
        </Link>
        <button className="text-sm text-white bg-ctm-purple rounded-md px-2 py-2 mx-2">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
