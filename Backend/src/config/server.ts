import dotenv from "dotenv";
import express, { Express } from "express";
import compression from "compression";
import morgan from "morgan";
import { limiter } from "@middlewares/limiter";
import helmet from "helmet";
import { handleError, notFound } from "@middlewares/error";

export const app = express();
// change default environment path
dotenv.config({ path: "./.env.example" });

export const initServer = (app: Express) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(compression());
  app.use(helmet());
  app.use(morgan("dev"));
  app.use(limiter);

  //Global Middlewares
  app.use(notFound);
  app.use(handleError);

  const { port, url } = process.env;
  app.listen(port || 5000, async () => {
    console.log(
      `🚀 Server ready at: ${(url && port) || "http://localhost:5000"}`
    );
  });
};
