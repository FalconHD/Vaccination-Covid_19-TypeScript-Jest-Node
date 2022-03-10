import { get, useAppDispatch } from "@/hooks";
import { setCinStore } from "@/slices";
import { setShot, setUserInfo } from "@/slices";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

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
    <div className="w-full h-screen flex justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <div className="card-body">
          <h2 className="card-title">
            <input
              onChange={(e) => setCin(e.target.value)}
              type="text"
              placeholder="Type here"
              className="input w-full max-w-xs"
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
