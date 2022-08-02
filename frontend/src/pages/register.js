import { useState } from "react";
import Layout from "../hocs/Layout";

const RegisterPage = () => {
  const [formData, setFormdata] = useState({
    first_name: "",
    second_name: "",
    username: "",
    password: "",
    re_password: "",
  });

  const { first_name, second_name, username, password, re_password } = formData;

  const onChange = (e) =>
    setFormdata({ ...formData, [e.target.name]: e.target.value }); // e.target.name is the name of the input field
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };

  return (
    <Layout title="fablanka | regiter" content="register page">
      <h1 className="display-5 fw-bold">Register</h1>
      <form onSubmit={onSubmit} className="bg-light p-5 mt-5 mb-5">
        <div className="form-group">
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            className="form-control"
            id="first_name"
            name="first_name"
            value={first_name}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="second_name">Second Name</label>
          <input
            type="text"
            className="form-control"
            id="second_name"
            name="second_name"
            value={second_name}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={username}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="re_password">Re-Password</label>
          <input
            type="password"
            className="form-control"
            id="re_password"
            name="re_password"
            value={re_password}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </Layout>
  );
};

export default RegisterPage;
