import { get, useAppSelector } from "@/hooks";
import { useFormikContext } from "formik";
import { addCenterFormikValues } from "providers";
import React, { useEffect, useMemo, useState } from "react";

type ICity = {
  id: string;
  ville: string;
  region: string;
};
type IRegion = {
  id: string;
  region: string;
};

export const AddCenterForm = () => {
  const {
    values,
    handleChange,
    dirty,
    submitForm,
    errors,
    submitCount,
    isSubmitting,
    setFieldValue,
  } = useFormikContext<addCenterFormikValues>();
  const [cities, setCities] = useState<ICity[]>([
    {
      id: "",
      ville: "",
      region: "",
    },
  ]);
  const [regions, setRegions] = useState<IRegion[]>([{ id: "", region: "" }]);
  const admin = useAppSelector((state) => state.admin);
  useEffect(() => {
    const regions = async () => {
      const reg = await get("/admin/regions");
      setRegions(reg);
    };
    regions();
  }, []);

  useEffect(() => {
    if (regions?.length <= 0 && !admin.info.region) return;
    const cities = async () => {
      const regionTarget = regions?.find(
        (r: any) => r.region.toLowerCase() === admin.info.region.toLowerCase()
      );
      setFieldValue("region", regionTarget?.region);
      setFieldValue("admins", [admin.info._id]);

      const cities = await get("/admin/cities/" + regionTarget?.id);
      setCities(cities);
    };
    cities();
  }, [admin.info.region, regions]);

  return (
    <div className="w-full mx-20 card shadow over">
      <div className="card-body">
        <h2 className="card-title">Adding new Center</h2>
        <div className=" md:px-32 lg:md:px-32 sm:px-10 ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
            />
          </div>
          {errors  && (
            <div className="text-red-500">{errors.name}</div>
          )}
          <br />
          <div className="form-control">
            <label className="label">
              <span className="label-text">Admin</span>
            </label>
            <input
              value={values.admins[0]}
              type="text"
              disabled
              name="admins"
              placeholder="City"
              className="input input-bordered"
            />
          </div>
          {errors  && (
            <div className="text-red-500">{errors.admins}</div>
          )}
          <br />
          <div className="form-control">
            <label className="label">
              <span className="label-text">region</span>
            </label>
            <input
              onChange={handleChange}
              disabled
              value={values.region}
              type="region"
              name="region"
              placeholder="Region"
              className="input input-bordered"
            />
          </div>
          {errors  && (
            <div className="text-red-500">{errors.region}</div>
          )}
          <br />
          <div className="w-full form-control">
            <label className="label">
              <span className="label-text">City</span>
            </label>
            <select
              className=" select w-full input-bordered"
              onChange={handleChange}
              name="city"
            >
              <option disabled selected>
                Pick the city
              </option>
              {cities.length > 0 &&
                cities.map((city: ICity) => (
                  <option key={city.id} value={city.ville}>
                    {city.ville}
                  </option>
                ))}
            </select>
            {errors.city && <span className="text-red-500">{errors.city}</span>}
          </div>
          <br />
          <button
            onClick={() => submitForm()}
            disabled={isSubmitting || !dirty}
            type="submit"
            className={`w-full btn btn-md`}
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};
