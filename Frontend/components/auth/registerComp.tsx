import { IRegions } from "@/interfaces";
import { useFormikContext } from "formik";
import { RegisterFormikValues } from "providers";
import React from "react";

export const Register = ({ regions }: { regions: IRegions[] }) => {
  const {
    values,
    handleChange,
    dirty,
    submitForm,
    errors,
    submitCount,
    isSubmitting,
  } = useFormikContext<RegisterFormikValues>();

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="flex-col hero-content lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Admin Registration </h1>
          <p className="py-6">
            Admin registrtaion is required to access the admin panel.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                onChange={handleChange}
                name="name"
                placeholder="name"
                className="input input-bordered"
              />
              {errors.name && <p className="text-red-500">{errors.name}</p>}
            </div>
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
                <span className="label-text">phone</span>
              </label>
              <input
                type="text"
                name="phone"
                onChange={handleChange}
                placeholder="phone"
                className="input input-bordered"
              />
              {errors.phone && <p className="text-red-500">{errors.phone}</p>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">CIN</span>
              </label>
              <input
                type="text"
                name="cin"
                onChange={handleChange}
                placeholder="cin"
                className="input input-bordered"
              />
              {errors.cin && <p className="text-red-500">{errors.cin}</p>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Region</span>
              </label>
              <select
                className="select w-full max-w-xs input-bordered"
                onChange={handleChange}
                name="region"
              >
                <option disabled selected>
                  Pick your region
                </option>
                {regions?.map((region: IRegions) => (
                  <option key={region.id} value={region.id}>
                    {region.region}
                  </option>
                ))}
              </select>
              {errors.region && <p className="text-red-500">{errors.region}</p>}
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
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
