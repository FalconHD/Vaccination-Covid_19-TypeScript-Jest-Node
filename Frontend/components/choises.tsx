import React from "react";
import { Card } from "./card";

export const Choises = () => {
  return (
    <div className="flex flex-col w-full lg:flex-row h-full lg:h-screen">
      <div className="grid flex-grow  card  rounded-box place-items-center">
        <Card
          direction={`/vaccin/${1}`}
          title="First Vaccination"
          image="https://www.zeilikmanlaw.com/wp-content/uploads/2021/06/Vaccine-1024x1024.jpg"
        />
      </div>
      <div className="grid flex-grow  card  rounded-box place-items-center">
        <Card
          direction={`/vaccin/${2}`}
          title="Second Vaccination"
          image="https://www.zeilikmanlaw.com/wp-content/uploads/2021/06/Vaccine-1024x1024.jpg"
        />
      </div>
      <div className="grid flex-grow  card  rounded-box place-items-center">
        <Card
          direction={`/vaccin/${3}`}
          title="Third Vaccination"
          image="https://www.zeilikmanlaw.com/wp-content/uploads/2021/06/Vaccine-1024x1024.jpg"
        />
      </div>
    </div>
  );
};
