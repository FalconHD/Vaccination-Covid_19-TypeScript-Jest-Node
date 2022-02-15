import { NextFunction, Request, Response } from "express";

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

export type { RequestFunc };
