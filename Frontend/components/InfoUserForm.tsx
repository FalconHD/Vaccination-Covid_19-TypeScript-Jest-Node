import React, { useEffect } from "react";
import { InfoFormikValues } from "providers";
import { useFormikContext } from "formik";
export const InfoUserForm = () => {
  const {
    values,
    handleChange,
    dirty,
    submitForm,
    errors,
    submitCount,
    isSubmitting,
  } = useFormikContext<InfoFormikValues>();

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <>
      <div className=" text-lg lg:stat-value">
        Fill the form to complete your request ?
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-10">
        <div className="card-body ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              onChange={handleChange}
              value={values.name}
              name="name"
              type="text"
              placeholder="Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              onChange={handleChange}
              value={values.phone}
              name="phone"
              type="text"
              placeholder="Phone"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">CIN</span>
            </label>
            <input
              onChange={handleChange}
              value={values.cin}
              name="cin"
              type="text"
              placeholder="CIN"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">City</span>
            </label>
            <input
              onChange={handleChange}
              value={values.city}
              name="city"
              type="text"
              placeholder="City"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              onChange={handleChange}
              value={values.address}
              name="address"
              type="text"
              placeholder="Address"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => submitForm()}
              disabled={isSubmitting || !dirty}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
