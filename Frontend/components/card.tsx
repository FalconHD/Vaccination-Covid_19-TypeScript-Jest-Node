import Image from "next/image";
import Link from "next/link";
import React from "react";
type ICardProps = {
  image: string;
  title: string;
  direction: string;
};

export const Card = ({ image, title, direction }: ICardProps) => {
  return (
    <Link href={direction}>
      <div className="card w-96 bg-base-200 shadow-xl hover:cursor-pointer">
        <figure className="px-10 pt-10">
          {/* <img src={image} alt={title} className="rounded-xl" /> */}
          <Image src={image} width="500" height="500" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Are you ?</h2>
          <p>{title}</p>
        </div>
      </div>
    </Link>
  );
};
