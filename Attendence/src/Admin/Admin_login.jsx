import React from "react";
import { useNavigate } from "react-router-dom";

function Admin_login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically validate the credentials
    // For now, we'll just navigate to the dashboard
    navigate("/admin/dashboard");
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title text-center mb-4">Admin Login</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-group mb-3">
                    <label
                      htmlFor="exampleInputEmail1"
                      className="text-start d-block"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="text-start d-block"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group form-check mb-3">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label
                      className="form-check-label text-start d-block"
                      htmlFor="exampleCheck1"
                    >
                      Remember me
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin_login;
