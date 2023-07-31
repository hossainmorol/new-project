import React from "react";
import registerImg from "../../assest/register.png";
import { Link } from "react-router-dom";

const Register = () => {
  const hendleSubmit = (event) => {
    event.preventDefault();
    const from = event.target;
    const email = from.email.value;
    const name = from.name.value;
    const password = from.password.value;
    console.log(email, password, name);
  };

  return (
    <div>
      <div className="hero my-24   w-full ">
        <div className="hero-content py-10  grid grid-cols-1 md:grid-cols-2  ">
          <div className="text-center lg:text-left">
            <img className="w-3/4" src={registerImg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={hendleSubmit} className="card-body">
              <h1 className="text-5xl font-bold">Singup now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter you email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="Enter you password"
                  className="input input-bordered"
                />
                <label className="label">
                  <Link className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Singup"
                />

                <input
                  type="submit"
                  className="btn btn-red mt-2"
                  value="SingupwithGoogle"
                />

                <p className=" mt-2 text-center">
                  New to have a accoutn
                  <Link className="text-orange-600" to="/login">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
