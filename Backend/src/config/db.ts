import mongosse from "mongoose";

const { PORT, MONGO_USER, MONGO_PASS, MONGO_NAME } = process.env;
export const MONGO_URI = `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@marocship.lula5.mongodb.net/${MONGO_NAME}?retryWrites=true&w=majority`;

export const connection = (cb: Function) =>
  mongosse
    .connect(MONGO_URI)
    .then(() => {
      console.log("DB connected");
      cb();
    })
    .catch((err) => {
      console.log(err.message);
      cb();
    });
