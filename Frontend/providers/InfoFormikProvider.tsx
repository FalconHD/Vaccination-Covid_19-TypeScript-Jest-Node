import React, { useEffect } from "react";
import { ReactNode } from "react";
import * as Yup from "yup";
import { FormikProvider, useFormik } from "formik";
import { post, useAppDispatch, useAppSelector } from "@/hooks";
import moment from "moment";
import { setUserInfo } from "@/slices";
import { useRouter } from "next/router";

export type InfoFormikValues = {
  name: string;
  phone: string;
  city: string;
  address: string;
  cin: string;
  region: string;
  center: string;
};

const validationSchema = () =>
  Yup.object({
    name: Yup.string().required(),
    phone: Yup.string().required(),
    city: Yup.string().required(),
    address: Yup.string().required(),
    cin: Yup.string().required(),
    region: Yup.string().required(),
    center: Yup.string().required(),
  });

export const InfoFormikProvider = ({
  children,
  cities,
  regions,
}: {
  children: ReactNode;
  cities: Array<any>;
  regions: Array<any>;
}) => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const router = useRouter()
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      city: "",
      address: "",
      cin: "",
      region: "",
      center: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      let done = false;
      const city = cities.find((city) => city.id === values.city);
      const region = regions.find((region) => city.region === region.id);
      const data = user.UserInfo.vaccinations.map((vaccin) => {
        if (vaccin.shot == user.VaccinationProcess.shot) {
          done = true;
          return {
            shot: vaccin.shot,
            datetime: moment().add(30, "days").format("YYYY-MM-DD"),
          };
        } else {
          return vaccin;
        }
      });
      !done
        ? data.push({
            shot: user.VaccinationProcess.shot,
            datetime: moment().add(30, "days").format("YYYY-MM-DD"),
          })
        : null;

      const result = await post("/user/register", {
        ...values,
        city: city.ville,
        region: region.region,
        vaccinations: data,
      });
      if (!result.error) {
        dispatch(setUserInfo(result));
        router.push('/wait')
      }
    },
    validateOnChange: true,
    validateOnBlur: false,
    validateOnMount: false,
  });
  return <FormikProvider value={formik}>{children}</FormikProvider>;
};
