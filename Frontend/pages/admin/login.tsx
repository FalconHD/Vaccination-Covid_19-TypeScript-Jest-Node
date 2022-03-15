import { AddCenterForm, CentersTable, Filtericon, Sidebar } from "@/components";
import { useAppSelector, get } from "@/hooks";
import { useFormikContext } from "formik";
import { NextPage } from "next";
import Head from "next/head";
import { LoginFormikValues, SuperFormikProvider } from "providers";
import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import styles from "../../styles/Home.module.css";

const SuperLoginFormik = () => {
  const {
    values,
    handleChange,
    dirty,
    submitForm,
    errors,
    submitCount,
    isSubmitting,
  } = useFormikContext<LoginFormikValues>();

  return (
    <div className="bg-white">
      <h1 className="text-gray-800 font-bold text-2xl mb-1">
        Hello My Master!
      </h1>
      <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
      <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
          />
        </svg>
        <input
          onChange={handleChange}
          value={values.email}
          className="pl-2 outline-none border-none"
          type="text"
          name="email"
          id=""
          placeholder="Email Address"
        />
      </div>
      {errors.email && <p className="text-red-500">{errors.email}</p>}

      <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
            clipRule="evenodd"
          />
        </svg>
        <input
          onChange={handleChange}
          value={values.password}
          className="pl-2 outline-none border-none"
          type="text"
          name="password"
          id=""
          placeholder="Password"
        />
      </div>
      {errors.password && <p className="text-red-500">{errors.password}</p>}
      <button
        type="submit"
        onClick={() => submitForm()}
        disabled={isSubmitting || !dirty}
        className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
      >
        Login
      </button>
      <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">
        Forgot Password ?
      </span>
    </div>
  );
};

const Login: NextPage = () => {
  return (
    <div className="h-screen flex">
      <div className="flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center">
        <div>
          <Lottie
            options={{
              animationData: require("../../public/login.json"),
              autoplay: true,
            }}
            height={400}
            width={400}
          />
        </div>
      </div>
      <div className="flex w-1/2 justify-center items-center bg-white">
        <SuperFormikProvider>
          <SuperLoginFormik />
        </SuperFormikProvider>
      </div>
    </div>
  );
};

export default Login;
