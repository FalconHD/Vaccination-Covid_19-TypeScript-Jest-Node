import React, { useEffect } from "react";
import { ReactNode } from "react";
import * as Yup from "yup";
import { FormikProvider, useFormik } from "formik";
import { get, useAppDispatch, useAppSelector } from "@/hooks";
import {  setUserInfo } from "@/slices";
import { useRouter } from "next/router";

export type UserFormikValues = {
  cin: string;
};

const validationSchema = () =>
  Yup.object({
    cin: Yup.string().required(),
  });

export const UserFormikProvider = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch();
  const User = useAppSelector((state) => state.user);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      cin: "",
    },
    validationSchema,
    onSubmit: async ({ cin }) => {
      const res = await get(`/user/${cin}`);
    },
    validateOnChange: true,
    validateOnBlur: false,
    validateOnMount: false,
  });
  return <FormikProvider value={formik}>{children}</FormikProvider>;
};
