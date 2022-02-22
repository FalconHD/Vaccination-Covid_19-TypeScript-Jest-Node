import mongoose from "mongoose";
import { MONGO_URI } from "../src/config";
import { UserModel } from "../src/models";

describe("insert", () => {
  let connection: typeof mongoose;
  let db: any;

  beforeAll(async () => {
    connection = await mongoose.connect(MONGO_URI);
    db = mongoose.connection.db;
  });

  afterAll(async () => {
    await db.dropCollection("users");
    await connection.disconnect();
  });

  describe("DB tests", () => {
    test("should connect to mongoodb", () => {
      // 1 : connected
      expect(connection.connection.readyState).toBe(1);
    });
  });

  it("should insert a doc into collection", async () => {
    const user = await UserModel.create({
      name: "youssef",
      email: "youssef@gmail.com",
      avatar: "avatar",
      cin: "ZT233083",
      phone: "0649621171",
      address: "taounate",
      city: "taounate",
      country: "morocco",
      zip: "30000",
      password: "123",
    });
    

    const insertedUser = await UserModel.findById(user.id);
    expect(insertedUser?.toObject()).toEqual(user.toObject());
  });
});
