import { NextFunction, Request, Response } from "express";
import { Schema } from "mongoose";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;
      APP_HOSTNAME: string;
      APP_URL: string;
      MONGO_URL: string;
      NODE_ENV: "development" | "production";
    }
  }
}

type RequestFunc = (
  req: Request,
  res: Response,
  next?: NextFunction
) => Promise<any>;

interface IUser {
  name: string;
  avatar?: string;
  cin: string;
  phone: string;
  address: string;
  city: string;
  country?: string;
  vaccinations: Array<{
    shot: 1 | 2 | 3;
    datetime: Date;
  }>;
  center: typeof Schema.Types.ObjectId;
}

interface IRegionAdmin {
  name: string;
  email: string;
  password: string;
  region: string;
  cin: string;
  phone?: string;
}

interface ICenter {
  name: string;
  region: string;
}

interface IUserTokenProps {
  name: string;
  email: string;
  _id: string;
}

export type { RequestFunc, IUser, IRegionAdmin, ICenter, IUserTokenProps };
