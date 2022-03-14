import { useFormikContext } from "formik";
import { LoginFormikValues } from "providers";
import React, { useEffect } from "react";

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

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="flex-col w-full hero-content lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-lg w-lg shadow-2xl bg-base-100">
          <div className="card-body w-full">
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
