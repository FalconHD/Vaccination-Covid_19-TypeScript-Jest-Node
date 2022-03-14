import { AddCenterForm, CentersTable, Filtericon, Sidebar } from "@/components";
import { useAppSelector } from "@/hooks";
import { NextPage } from "next";
import Head from "next/head";
import { AddCenterFormikProvider } from "providers";
import React, { useState } from "react";
import styles from "../../styles/Home.module.css";

const centers: NextPage = () => {
  const [isAdding, setIsAdding] = useState(false);
  const { info } = useAppSelector((state) => state.admin);
  console.log(info);

  return (
    <div className={styles.container} data-theme="fantasy">
      <Head>
        <title>Admin Dahsboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="w-full h-screen flex font-poppins">
        <Sidebar />
        <div className="w-full flex flex-col justify-start items-center">
          <div className="w-full p-5 flex items-center justify-between my-8">
            <div>
              <h1 className="text-black font-bold text-3xl mb-1">
                REGION : {info.region}
              </h1>
            </div>

            <button
              onClick={() => setIsAdding(!isAdding)}
              className="flex items-center px-2 py-2 border-2 space-x-3 border-gray-200 rounded-xl text-gray-400 hover:bg-gray-700"
            >
              {isAdding ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-list"
                >
                  <line x1="8" y1="6" x2="21" y2="6"></line>
                  <line x1="8" y1="12" x2="21" y2="12"></line>
                  <line x1="8" y1="18" x2="21" y2="18"></line>
                  <line x1="3" y1="6" x2="3.01" y2="6"></line>
                  <line x1="3" y1="12" x2="3.01" y2="12"></line>
                  <line x1="3" y1="18" x2="3.01" y2="18"></line>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-plus-square"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="12" y1="8" x2="12" y2="16"></line>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
              )}
            </button>
          </div>
          <div className="w-full flex justify-center items-center">
            {isAdding ? (
              <AddCenterFormikProvider>
                <AddCenterForm />
              </AddCenterFormikProvider>
            ) : (
              <CentersTable centers={info.centers} />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default centers;
