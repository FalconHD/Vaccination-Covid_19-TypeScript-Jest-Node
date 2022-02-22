import { InfoUserForm } from "@/components";
import type { NextPage } from "next";
import Head from "next/head";
import { InfoFormikProvider } from "providers";
import styles from "../styles/Home.module.css";

const From: NextPage = () => {
  return (
    <div className="flex flex-col gap-5 mt-10 px-20 w-full border-opacity-50">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex flex-col items-center gap-2">
        <InfoFormikProvider>
          <InfoUserForm />
        </InfoFormikProvider>
      </section>
    </div>
  );
};

export default From;