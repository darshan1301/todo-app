import { Link, NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className=" max-w-full bg-ctm-purple px-12 py-2 flex justify-between">
        <Link to={"/"} className="text-white font-bold">
          TODO
        </Link>
        <div className=" space-x-2 text-sm font-light text-white">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/login"}>Login</NavLink>
          <NavLink to={"/signup"}>Signup</NavLink>
          <NavLink to={"/profile"}>Profile</NavLink>
        </div>
      </div>
      <div className="max-w-full ">
        <main className="max-w-6xl mx-auto bg-ctm-mint px-8 py-4">
          {<Outlet />}
        </main>
      </div>
    </>
  );
};

export default Navbar;
