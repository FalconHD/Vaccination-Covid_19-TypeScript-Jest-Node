import React, { useEffect } from "react";
import { ReactNode } from "react";
import * as Yup from "yup";
import { FormikProvider, useFormik } from "formik";
import { get, post, useAppDispatch, useAppSelector } from "@/hooks";
import { setSuper, setUserInfo } from "@/slices";
import { useRouter } from "next/router";

export type SuperFormikValues = {
  email: string;
  password: string;
};

const validationSchema = () =>
  Yup.object({
    email: Yup.string().required(),
    password: Yup.string().required(),
  });

export const SuperFormikProvider = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async ({ email, password }) => {
      const res = await post("/super/login", { email, password });
      if (![404, 500].includes(res.status) && !res.error) {
        dispatch(setSuper(res));
        router.push("/admin");
      }
    },
    validateOnChange: true,
    validateOnBlur: false,
    validateOnMount: false,
  });
  return <FormikProvider value={formik}>{children}</FormikProvider>;
};
