import React, { useState, useEffect, FormEventHandler } from "react";
import { FaUser } from "react-icons/fa";

const Register = () => {
  //create a formData state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e: React.ChangeEvent) => {};

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className="form">
        <form>
          <div className="form-group">
            <input
              type="text"
              id="name"
              value={name}
              placeholder="Enter your name"
              className="form-control"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="email"
              value={email}
              placeholder="Enter your email"
              className="form-control"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              value={password}
              placeholder="Enter your password"
              className="form-control"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              value={password2}
              placeholder="Enter your password again"
              className="form-control"
              onChange={onChange}
            />
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;
