import { app, initServer } from "./config";
import { UserRoutes } from "routes";
//* Routes

app.use(UserRoutes)

//* init server
initServer(app);
