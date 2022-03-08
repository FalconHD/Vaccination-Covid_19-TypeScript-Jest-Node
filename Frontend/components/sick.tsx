import { useAppDispatch } from "@/hooks";
import { setIsSickStore } from "@/slices";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const Sick = ({
  image,
  type,
  title,
  btn,
  to,
}: {
  image: string;
  title?: string;
  type: string;
  btn: string;
  to?: string;
}) => {

  return (
    <div className="grid  flex-grow card bg-base-200 p-7 rounded-box place-items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{type}</h2>
          <p>{title}</p>
          <div className="justify-end card-actions">
            <Link href={to || ""}>
              <button className="btn btn-primary">{btn}</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
