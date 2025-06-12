import React from "react";
import { Link } from "react-router-dom";

function Userlogin() {
  return (
    <>
      <div className="body">
        <section className="container">
          <div className="login-item">
            <div className="login">
              <h2>Login</h2>
              <form action method>
                <label htmlFor="Email">Email</label>
                <br />
                <input type="text" name="Email" />
                <br />
                <label htmlFor="Password">Password</label>
                <br />
                <input type="text" name="Password" />
                <br />
                <button type="submit">Login</button>
                <p>
                  Doesn't have an account <Link to="/register">Register?</Link>
                </p>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Userlogin;
