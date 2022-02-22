import React, { useEffect } from "react";
import { ReactNode } from "react";
import * as Yup from "yup";
import { FormikProvider, useFormik } from "formik";
import { post } from "@/hooks";

export type InfoFormikValues = {
  name: string;
  phone: string;
  city: string;
  address: string;
  cin: string;
};

const validationSchema = () =>
  Yup.object({
    name: Yup.string().required(),
    phone: Yup.string().required(),
    city: Yup.string().required(),
    address: Yup.string().required(),
    cin: Yup.string().required(),
  });

export const InfoFormikProvider = ({ children }: { children: ReactNode }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      city: "",
      address: "",
      cin: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      const user = await post("/user/register", values);
      return user;
    },
    validateOnChange: true,
    validateOnBlur: false,
    validateOnMount: false,
  });
  return <FormikProvider value={formik}>{children}</FormikProvider>;
};
