import React, { useEffect } from "react";
import { ReactNode } from "react";
import * as Yup from "yup";
import { FormikProvider, useFormik } from "formik";
import { get, post, useAppDispatch, useAppSelector } from "@/hooks";
import { setAdmin } from "@/slices";
import { useRouter } from "next/router";

export type addCenterFormikValues = {
  name: string;
  region: string;
  city: string;
  admins: string[];
};

const validationSchema = () =>
  Yup.object({
    name: Yup.string().required(),
    region: Yup.string().required(),
    city: Yup.string().required(),
    admins: Yup.array().required(),
  });

export const AddCenterFormikProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const dispatch = useAppDispatch();
  const admin = useAppSelector((state) => state.admin);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      name: "",
      region: "",
      city: "",
      admins: [],
    },
    validationSchema,
    onSubmit: async (values) => {
      const res = await post("/center/add", values);
      if (![404, 500].includes(res.status)) {
        const res = await get("/admin/" + admin.info.email);
        dispatch(setAdmin(res));
      }
    },
    validateOnChange: true,
    validateOnBlur: false,
    validateOnMount: false,
  });
  return <FormikProvider value={formik}>{children}</FormikProvider>;
};
