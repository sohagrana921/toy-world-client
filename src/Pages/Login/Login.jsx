import { Link, useLocation, useNavigate } from "react-router-dom";

import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
const Login = () => {
  const [error, setError] = useState("");
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    if (!(email && password)) {
      setError("Please Fill all the input field");
      return;
    }
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handleGoogleLogIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2   mr-12">
          <img
            className="rounded "
            src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000"
            alt=""
          />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body ">
            <h1 className="text-3xl text-center font-bold">Please Login</h1>
            <p className="text-error">{error}</p>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-orange-500"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className="text-center">
              New to Toy World?
              <Link className="text-orange-600 font-bold" to="/register">
                Register
              </Link>
            </p>
            <div className="divider">Or Login Using</div>
            <button onClick={handleGoogleLogIn} className="flex justify-center">
              <img
                className="h-12 w-12"
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
