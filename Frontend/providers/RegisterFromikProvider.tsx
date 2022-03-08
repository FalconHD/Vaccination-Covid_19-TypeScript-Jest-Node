import React, { useEffect } from "react";
import { ReactNode } from "react";
import * as Yup from "yup";
import { FormikProvider, useFormik } from "formik";
import { post, useAppDispatch } from "@/hooks";
import { setAdmin } from "@/slices";

export type RegisterFormikValues = {
  name: string;
  email: string;
  cin: string;
  phone: string;
  password: string;
  region: string;
};

const validationSchema = () =>
  Yup.object({
    name: Yup.string().required(),
    email: Yup.string().required().email(),
    cin: Yup.string().required(),
    phone: Yup.string().required(),
    password: Yup.string().required(),
    region: Yup.string().required(),
  });

export const RegisterFormikProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      cin: "",
      phone: "",
      password: "",
      region: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      const admin = await post("/admin/add", values);
      if (admin) {
        dispatch(setAdmin(admin.data));
        localStorage.setItem("admin", admin.token);
      }
      console.log(admin);
    },
    validateOnChange: true,
    validateOnBlur: false,
    validateOnMount: false,
  });
  return <FormikProvider value={formik}>{children}</FormikProvider>;
};
