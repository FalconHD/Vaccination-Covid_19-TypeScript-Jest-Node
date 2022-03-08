import { post, useAppSelector } from "@/hooks";
import moment from "moment";
import { NextPage } from "next";
import React, { useEffect } from "react";

const Wait: NextPage = () => {
  const user = useAppSelector((state) => state.user);
  const cuurDate =
    user.UserInfo.vaccinations[user.UserInfo.vaccinations.length - 1].datetime;
  const different = moment(new Date(cuurDate)).diff(moment(), "days");

  return (
    <div>
      you next Shot ({user.UserInfo.vaccinations.length + 1}) is in {different}
    </div>
  );
};

export default Wait;
