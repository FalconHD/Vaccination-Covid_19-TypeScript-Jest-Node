import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Sick } from "@/components";
import { useAppDispatch } from "@/hooks";
import { setIsSickStore } from "@/slices";

const Asker: NextPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isActive, setisActive] = useState(false);

  const { order } = router.query;

  if (!isActive)
    return (
      <>
        <div className="flex flex-col gap-5 mt-10 px-20 w-full border-opacity-50">
          <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
            <div className="text-lg lg:stat-value">
              You are now in the steps of the the {order} vaccination
            </div>
          </div>
          <div className="grid  card bg-base-200 p-7 rounded-box place-items-center">
            <div className="flex flex-col w-full lg:flex-row">
              <Sick
                to="/problems"
                btn="continue"
                type={order == "1" ? "Previous disease" : "Vaccination Impacts"}
                title={
                  order == "1"
                    ? "Are you Sick with soming ?"
                    : "Did the Previous vaccine impact you ?"
                }
                image="https://media.nbcconnecticut.com/2019/09/AP_20079596239325.jpg?quality=85&strip=all&crop=0px%2C498px%2C4598px%2C2587px&resize=1200%2C675"
              />
              <div className="divider divider-horizontal">OR</div>
              <Sick
                to={order == "1" ? "/form" : "/done"}
                btn="Continue"
                type="Continue"
                title={`Complete the ${order} Vaccination process`}
                image="https://www.campusfrance.org/sites/default/files/medias/images/2021-09/Etudiante_vaccin%C3%A9e.jpg"
              />
            </div>
          </div>
        </div>
      </>
    );
  else return <div>World</div>;
};

export default Asker;
