import React, { useEffect } from "react";
import { ReactNode } from "react";
import * as Yup from "yup";
import { FormikProvider, useFormik } from "formik";
import { post, useAppDispatch, useAppSelector } from "@/hooks";
import { setAdmin } from "@/slices";
import { useRouter } from "next/router";

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
  const dispatch = useAppDispatch();
  const admin = useAppSelector((state) => state.admin);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      const res = await post("/auth/login", values);
      if (res) {
        dispatch(setAdmin(res));
        console.log(res);
        router.push("/dashboard");
      }
    },
    validateOnChange: true,
    validateOnBlur: false,
    validateOnMount: false,
  });
  return <FormikProvider value={formik}>{children}</FormikProvider>;
};
