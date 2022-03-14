import { post, useAppSelector } from "@/hooks";
import moment from "moment";
import { NextPage } from "next";
import React, { useEffect } from "react";
import Lottie from "react-lottie";

const Wait: NextPage = () => {
  const user = useAppSelector((state) => state.user);
  const cuurDate =
    user.UserInfo.vaccinations[user.UserInfo.vaccinations.length - 1].datetime;
  const different = moment(new Date(cuurDate)).diff(moment(), "days");

  return (
    <div className="flex flex-col items-center bg-slate-500 justify-center h-screen">
      <div className="shadow-lg rounded-lg bg-white flex flex-col items-center p-4">
        <Lottie
          options={{
            animationData: require("../public/vaccinate.json"),
          }}
          height={400}
          width={400}
          // @ts-ignore
          loop={false}
          autoplay
        />
        <span className="font-bold text-3xl">
        you next Shot ({user.UserInfo.vaccinations.length + 1}) is in {different}
          </span>
      </div>
    </div>
  );
};

export default Wait;
