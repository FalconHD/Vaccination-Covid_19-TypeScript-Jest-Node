import React, { useEffect } from "react";
import { InfoFormikValues } from "providers";
import { useFormikContext } from "formik";
import { IRegions } from "@/interfaces";
import { useAppSelector } from "@/hooks";
export const InfoUserForm = ({
  cities,
  regions,
  centers,
  setRegionChoise,
  setCityChoice,
}: {
  cities: Array<any>;
  regions: Array<any>;
  centers: Array<any>;
  setRegionChoise: Function;
  setCityChoice: Function;
}) => {
  const {
    values,
    handleChange,
    dirty,
    submitForm,
    errors,
    submitCount,
    isSubmitting,
    setFieldValue,
  } = useFormikContext<InfoFormikValues>();

  const userData = useAppSelector((state) => state.user);

  useEffect(() => {
    setRegionChoise(values.region);
  }, [values.region]);

  useEffect(() => {
    console.log(centers);

    setCityChoice(values.city);
  }, [values.city]);

  useEffect(() => {
    console.log(values);
  }, [values.center]);

  useEffect(() => {
    setFieldValue("cin", userData.UserInfo.cin);
  }, [userData.UserInfo.cin]);

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
              disabled
              name="cin"
              type="text"
              placeholder="CIN"
              className="input input-bordered"
            />
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
              <span className="label-text">City</span>
            </label>
            <select
              className="select w-full max-w-xs input-bordered"
              onChange={handleChange}
              name="city"
            >
              <option disabled selected>
                Pick your region
              </option>
              {cities?.map((city: any) => (
                <option key={city.id} value={city.id}>
                  {city.ville}
                </option>
              ))}
            </select>
            {errors.region && <p className="text-red-500">{errors.region}</p>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Center</span>
            </label>
            <select
              className="select w-full max-w-xs input-bordered"
              onChange={handleChange}
              name="center"
            >
              <option disabled selected>
                Pick your region
              </option>
              {centers?.map((center: any) => (
                <option key={center.id} value={center._id}>
                  {center.name}
                </option>
              ))}
            </select>
            {errors.center && <p className="text-red-500">{errors.center}</p>}
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
