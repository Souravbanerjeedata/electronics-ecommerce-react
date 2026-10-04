import { useState } from "react";

const Auth = () => {
  const [mode, setMode] = useState("sign up");
  return (
    <div className="page">
      <div className="container">
        <div className="auth-container">
          <h1 className="page-title">
            {mode === "sign up" ? "Sign Up" : "Login"}
          </h1>
          <form className="auth-form">
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input type="email" id="email" className="form-input" />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <input type="password" id="password" className="form-input" />
            </div>
            <button type="submit" className="btn btn-primary btn-large">
              {mode === "sign up" ? "Sign Up" : "Login"}
            </button>
          </form>
          <div className="auth-switch">
            {mode === "sign up" ? (
              <p>
                Already have an account?{" "}
                <span className="auth-link" onClick={() => setMode("login")}>
                  Login
                </span>
              </p>
            ) : (
              <p>
                Dont't have an account?{" "}
                <span className="auth-link" onClick={() => setMode("sign up")}>
                  Sign Up
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
