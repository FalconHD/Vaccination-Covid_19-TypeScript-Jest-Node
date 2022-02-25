import { useFormikContext } from "formik";
import { LoginFormikValues } from "providers";
import React from "react";

export const Login = () => {
  const {
    values,
    handleChange,
    dirty,
    submitForm,
    errors,
    submitCount,
    isSubmitting,
  } = useFormikContext<LoginFormikValues>();

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="flex-col hero-content lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                onChange={handleChange}
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name="password"
                onChange={handleChange}
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password}</p>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                onClick={() => submitForm()}
                disabled={isSubmitting || !dirty}
                className="btn btn-primary"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
