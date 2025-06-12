import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Register() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the registration
    // For now, we'll just navigate to login
    navigate("/login");
  };

  return (
    <>
     
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h2 className="text-center mb-4">Registration</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="First_name" className="text-start d-block">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="First_name"
                      name="First_name"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Last_name" className="text-start d-block">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="Last_name"
                      name="Last_name"
                      placeholder="Enter your Last name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="Phone_Number"
                      className="text-start d-block"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="Phone_Number"
                      name="Phone_Number"
                      placeholder="Enter your Phone Number"
                      pattern="[0-9]{10}"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Email" className="text-start d-block">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="Email"
                      id="Email"
                      placeholder="Enter your Email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Password" className="text-start d-block">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      name="Password"
                      id="Password"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Register
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

export default Register;
