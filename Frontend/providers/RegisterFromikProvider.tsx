import React, { useEffect } from "react";
import { ReactNode } from "react";
import * as Yup from "yup";
import { FormikProvider, useFormik } from "formik";
import { post } from "@/hooks";

export type RegisterFormikValues = {
  name: string;
  email: string;
  cin: string;
  phone: string;
  password: string;
};

const validationSchema = () =>
  Yup.object({
    name: Yup.string().required(),
    email: Yup.string().required().email(),
    cin: Yup.string().required(),
    phone: Yup.string().required(),
    password: Yup.string().required(),
  });

export const RegisterFormikProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      cin: "",
      phone: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      const admin = await post("/auth/register", values);

    },
    validateOnChange: true,
    validateOnBlur: false,
    validateOnMount: false,
  });
  return <FormikProvider value={formik}>{children}</FormikProvider>;
};
