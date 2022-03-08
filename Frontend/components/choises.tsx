import { useAppSelector } from "@/hooks";
import React from "react";
import { Card } from "./card";

export const Choises = () => {
  const user = useAppSelector((state) => state.user);
  return (
    <div className="flex flex-col w-full lg:flex-row h-full lg:h-screen">
      {user.UserInfo.vaccinations.length < 1 && (
        <div className="grid flex-grow  card  rounded-box place-items-center">
          <Card
            direction={`/vaccin/${1}`}
            title="First Vaccination"
            image="https://www.zeilikmanlaw.com/wp-content/uploads/2021/06/Vaccine-1024x1024.jpg"
          />
        </div>
      )}
      <div className="grid flex-grow  card  rounded-box place-items-center">
        <Card
          direction={`done`}
          title="Second Vaccination"
          image="https://www.zeilikmanlaw.com/wp-content/uploads/2021/06/Vaccine-1024x1024.jpg"
        />
      </div>
      <div className="grid flex-grow  card  rounded-box place-items-center">
        <Card
          direction={`done`}
          title="Third Vaccination"
          image="https://www.zeilikmanlaw.com/wp-content/uploads/2021/06/Vaccine-1024x1024.jpg"
        />
      </div>
    </div>
  );
};
