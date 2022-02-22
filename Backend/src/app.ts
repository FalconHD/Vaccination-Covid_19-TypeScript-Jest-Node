import { app, connection, initServer } from "./config";
import { UserRoutes } from "routes";
import { handleError, notFound } from "./middlewares";

//* server init and DB connection
connection(() => {
  //server init
  initServer(app);

  //routes
  app.use("/user", UserRoutes);
  app.get("/", (req, res) => res.send("Hello World!"));

  // middlewares
  app.use(notFound);
  app.use(handleError);
});
