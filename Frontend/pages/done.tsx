import React, { useEffect } from "react";
import { post, useAppSelector } from "@/hooks";
import moment from "moment";
import { NextPage } from "next";
import Lottie from "react-lottie";

const done: NextPage = () => {
  const user = useAppSelector((state) => state.user);
  console.log(user);

  useEffect(() => {
    if (user.VaccinationProcess.isSick) {
      const shots = user.UserInfo.vaccinations.map((vaccin) => {
        if (vaccin.shot == `${+user.VaccinationProcess.shot - 1}`) {
          return {
            shot: vaccin.shot,
            datetime: moment(new Date(vaccin.datetime))
              .add(30, "days")
              .format("YYYY-MM-DD"),
          };
        } else {
          return vaccin;
        }
      });
      console.log(shots);

      post(`/user/update/${user.UserInfo.cin}`, shots);
    } else {
      const shots = [
        ...user.UserInfo.vaccinations,
        {
          shot: user.VaccinationProcess.shot,
          datetime: moment().add(30, "days").format("YYYY-MM-DD"),
        },
      ];
      console.log(shots);

      post(`/user/update/${user.UserInfo.cin}`, shots);
    }
  }, []);

  return (
    <div className="flex flex-col items-center bg-slate-500 justify-center h-screen">
      <div className="shadow-lg rounded-lg bg-white flex flex-col items-center p-4">
        <Lottie
          options={{
            animationData: require("../public/done.json"),
          }}
          height={400}
          width={400}
          loop={false}
          autoplay
        />
        <span className="font-bold text-3xl">You are done!</span>
      </div>
    </div>
  );
};

export default done;
