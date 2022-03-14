import { app, connection, initServer } from "./config";
import { AuthRoute, CenterRoutes, RegionAdmin, UserRoutes ,SuperRouter } from "routes";
import { handleError, notFound } from "./middlewares";

//* server init and DB connection
connection(() => {
  //server init
  initServer(app);

  //routes
  app.use("/user", UserRoutes);
  app.use("/auth", AuthRoute);
  app.use("/center", CenterRoutes);
  app.use("/admin", RegionAdmin);
  app.use("/super", SuperRouter);

  // middlewares
  app.use(notFound);
  app.use(handleError);
});
