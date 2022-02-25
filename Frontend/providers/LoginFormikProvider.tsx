import React, { useEffect } from "react";
import { ReactNode } from "react";
import * as Yup from "yup";
import { FormikProvider, useFormik } from "formik";
import { post } from "@/hooks";

export type LoginFormikValues = {
  email: string;
  password: string;
};

const validationSchema = () =>
  Yup.object({
    email: Yup.string().required(),
    password: Yup.string().required(),
  });

export const LoginFormikProvider = ({ children }: { children: ReactNode }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      await post("/auth/login", values);
    },
    validateOnChange: true,
    validateOnBlur: false,
    validateOnMount: false,
  });
  return <FormikProvider value={formik}>{children}</FormikProvider>;
};
