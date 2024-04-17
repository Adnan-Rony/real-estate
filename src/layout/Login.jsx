import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../authintication/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { signIn, user, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handlelogin = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        console.log(result);
        //navigate after login
        navigate(location?.state ? location.state : "/");
        toast.success("Login successfully");
      })
      .catch((error) => {
        console.error(error);
        // setregistererror(error.message)
        toast.error(error.message);
      });
  };

  const handlegoogle = () => {
    googleLogin()
      .then((res) => {
        console.log(res);
        toast.success("Login successfully with Google");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="my-10 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              {/* <form onSubmit={handlelogin} > */}
              <form onSubmit={handlelogin}>
                <div className="form-control">
                  <h1 className="lg:text-3xl text-xl font-bold mb-5">
                    Login your account
                  </h1>
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter Your email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    required
                    name="password"
                    placeholder=" Enter Your password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <Link href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
              <p>
                New here? please
                <Link to="/register">
                  <button className="btn btn-link">Register</button>
                </Link>
              </p>
              <button
                onClick={handlegoogle}
                className="btn text-white  bg-[#F54748] hover:text-white "
              >
                Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
