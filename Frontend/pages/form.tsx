import { InfoUserForm } from "@/components";
import { get } from "@/hooks";
import type { NextPage } from "next";
import Head from "next/head";
import { InfoFormikProvider } from "providers";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

const From: NextPage = () => {
  const [cities, setCities] = useState<Array<any>>([]);
  const [region, setRegions] = useState<Array<any>>([]);
  const [centers, setCenters] = useState<Array<any>>([]);

  const [regionChoise, setRegionChoise] = useState<number>(1);
  const [cityChoice, setCityChoice] = useState<string>("");

  const getData = async () => {
    getCities();
    getRegions();
  };

  const getCities = async () => {
    const cities = await get("/admin/cities/" + regionChoise);
    setCities(cities);
  };

  const getRegions = async () => {
    const regions = await get("/admin/regions");
    setRegions(regions);
  };

  const getCenters = async (city: string) => {
    const target = cities.find((elm) => elm.id === city);
    const centers = target
      ? await get("/admin/centers/" + target.ville)
      : await get("/admin/centers/");
    setCenters(centers);
  };

  useEffect(() => {
    getCities();
  }, [regionChoise]);

  useEffect(() => {
    getCenters(cityChoice);
  }, [cityChoice]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col gap-5 mt-10 px-20 w-full border-opacity-50">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex flex-col items-center gap-2">
        <InfoFormikProvider cities={cities} regions={region}>
          <InfoUserForm
            setCityChoice={setCityChoice}
            regions={region}
            cities={cities}
            centers={centers}
            setRegionChoise={setRegionChoise}
          />
        </InfoFormikProvider>
      </section>
    </div>
  );
};

export default From;
