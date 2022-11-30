import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [userInfo, setUserInfo] = useState();
  const [login, setLogin] = useState(false);
  const onSubmit = (data) => {
    setUserInfo(data);
  };
  return (
    <div className="container">
      <pre>{JSON.stringify(userInfo, undefined, 2)}</pre>
      <form>
        <h1>Registration Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              {...register("username", {
                required: "Username is required",
              })}
            />
          </div>
          <p>{errors.username?.message}</p>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "This is not a valid email",
                },
              })}
            />
          </div>
          <p>{errors.email?.message}</p>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 4,
                  message: "Password must be more than 4 characters",
                },
                maxLength: {
                  value: 10,
                  message: "Password cannot exceed more than 10 characters",
                },
              })}
            />
          </div>
          <p>{errors.password?.message}</p>
          {/* <Link to="/user"> */}{" "}
          <button
            className="fluid ui button blue"
            onClick={handleSubmit(onSubmit)}
          >
            Submit
          </button>
          {/* </Link> */}
        </div>
      </form>
    </div>
  );
}
