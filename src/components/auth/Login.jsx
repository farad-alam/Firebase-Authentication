import React, { use, useState } from "react";
import AuthContext from "../../context/AuthContext";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router";

function Login() {
  const { loginUser, logOutUser, signWithGoogle } = use(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation()

  const handleLoginForm = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then((result) => {
        console.log(result);
        setLoading(false);
        toast.success("Login Successfull!");
        navigate(location?.state || "/dashboard");
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
        setError(err.message);
        toast.error(err.message);
      });
  };

  

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now! </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleLoginForm} className="form">
              <label className="label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button
                disabled={loading}
                type="submit"
                className="btn btn-primary mt-4"
              >
                {loading ? (
                  <span className="loading loading-spinner text-primary"></span>
                ) : (
                  "Login"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
