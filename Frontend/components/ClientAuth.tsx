import { get, useAppDispatch } from "@/hooks";
import { setCinStore } from "@/slices";
import { setShot, setUserInfo } from "@/slices";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Lottie from "react-lottie";


export const ClientAuth = () => {
  const [cin, setCin] = useState<string>("");
  const dispatch = useAppDispatch();
  const router = useRouter();
  const signInWithCin = async () => {
    if (cin.length === 0) return;
    const res = await get(`/user/checkCin/${cin}`);
    if (![404, 500].includes(res.status)) {
      dispatch(setUserInfo(res));
      dispatch(setShot(`${res.vaccinations.length + 1}`));
      const cuurDate = res.vaccinations[res.vaccinations.length - 1].datetime;
      const different = moment(new Date(cuurDate)).diff(moment(), "days");
      console.log(different);

      if (different > 0) {
        router.push("/wait");
      } else {
        router.push(
          res.vaccinations.length < 3
            ? (`/vaccin/${res.vaccinations.length + 1}`)
            : "/"
        );
      }
    } else {
      dispatch(setShot(`1`));
      dispatch(setCinStore(cin));
      router.push(`/vaccin/1`);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center "  style={{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(https://images.unsplash.com/photo-1592671963996-0b4616e9f042?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80)"}}>
      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <Lottie
          options={{
            animationData: require("../public/vaccinate.json"),
          }}
          height={400}
          width={400}
          autoplay
        />
        <div className="card-body">
          <h2 className="card-title">
            <input
              onChange={(e) => setCin(e.target.value)}
              type="text"
              placeholder="Type here"
              className="input w-full max-w-xs text-black placeholder-black"
            />
          </h2>
          <p>Already registred Enter In CIN?</p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary text-gray-600"
              onClick={signInWithCin}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
