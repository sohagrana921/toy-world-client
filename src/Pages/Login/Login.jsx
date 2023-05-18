import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
const Login = () => {
  const [error, setError] = useState("");
  const { signIn, signInWithGoogle, handleGithubSignIn } =
    useContext(AuthContext);
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
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handleGithub = () => {
    handleGithubSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
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
            <div className="flex justify-center gap-4">
              <p onClick={handleGoogleLogIn} className="btn btn-outline">
                <span className="text-yellow-500 flex items-center">
                  <FaGoogle className="mr-2 h-3 w-3 "></FaGoogle>
                  Google
                </span>
              </p>
              <button onClick={handleGithub} className="btn btn-outline">
                <span className="text-pink-700 flex items-center">
                  <FaGithub className="mr-2 h-3 w-3 "></FaGithub>
                  Github
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
