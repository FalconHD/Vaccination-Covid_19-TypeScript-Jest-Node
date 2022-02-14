import { RequestFunc } from "@interfaces";
import { NextFunction, Request, Response } from "express";

// Cute funstion make the trycatch block shorter
export const cute =
  (fn: RequestFunc) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
