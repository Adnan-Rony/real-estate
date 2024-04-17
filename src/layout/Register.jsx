import  { useContext } from "react";
import { AuthContext } from "../authintication/AuthProvider";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
  const { CreateUser } = useContext(AuthContext);

  const handleregister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const photo = event.target.photo.value;

    console.log(name, email, password);

    // setregistererror('')
    // setsucess('')

    // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/;

    if (!/(?=.{6,})/.test(password)) {
      toast.error("At least 6 characters in total");
      return;
    }
    if (!/(?=.*[a-z])/.test(password)) {
      toast.error("At least 1 lowercase letter");
      return;
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      toast.error("At least 1 uppercase letter");
      return;
    }
    if (!/(?=.*[!@#\$%\^&\*])/.test(password)) {
      toast.error("At least 1 special character (!@#$%^&*)\n");
      return;
    }

    CreateUser(email, password,name,photo)
      .then((result) => {
        console.log(result);
      

        toast.success("user created successfully");
      })
      .catch((error) => {
        console.error(error);
      
      });
  };

  return (
    <div className="my-10">
      <div className="hero-content ">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl text-black   bg-white">
          <div className="card-body">
            
            {/* <form onSubmit={handlelogin} > */}

            <form onSubmit={handleregister}>
              <div className="form-control">
                <h1 className="lg:text-3xl text-xl font-bold mb-5 ">
                  Register your account
                </h1>
                <label className="label">
                  <span className="label-text ">name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="your Your name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter Your Photo URL"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Your password"
                  className="input input-bordered"
                  required
                />
                <br />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p className=" ">
              already have account? please
              <Link to="/login">
                <button className="btn  btn-link text-[#F54748]">Login</button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
