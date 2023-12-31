import React, { useContext, useState } from "react";
import registerImg from "../../assest/register.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contaxt/AuthProvider/AuthProvider";

const Register = () => {
  const { createUser, singGoolgle } = useContext(AuthContext);
  const [error, setError] = useState("");
  //
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  //
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  //
  const hendleSubmit = (event) => {
    event.preventDefault();
    const from = event.target;
    const email = from.email.value;
    const name = from.name.value;
    const password = from.password.value;

    console.log(email, password, name, confirmPassword);

    from.reset();
    //
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //
  const singupGoogle = () => {
    singGoolgle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
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
                <label>Password:</label>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  name="password"
                  onChange={handlePasswordChange}
                  className="input input-bordered"
                />

                <br />

                <label>Confirm Password:</label>
                <input
                  type={showPassword ? "text" : "password"}
                  value={confirmPassword}
                  name="Confirm Password"
                  onChange={handleConfirmPasswordChange}
                  className="input input-bordered"
                />

                <br />

                <label>Show Password:</label>
                <input
                  type="checkbox"
                  checked={showPassword}
                  onChange={handleToggleShowPassword}
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
                  onSubmit={singupGoogle}
                  className="btn btn-red mt-2"
                  value="SingupwithGoogle"
                />

                <p>{error}</p>

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
