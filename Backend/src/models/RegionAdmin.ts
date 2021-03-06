import { IRegionAdmin } from "@interfaces";
import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const SALT_WORK_FACTOR: number = 10;
const schema = new Schema<IRegionAdmin>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match:
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  },
  password: {
    type: String,
    required: true,
  },
  cin: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  region: {
    type: String,
  },
  centers: [
    {
      type: Schema.Types.ObjectId,
      ref: "Center",
    },
  ],
});

schema.pre("save", function (next) {
  var user = this;
  // only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

schema.methods.comparePassword = function (
  candidatePassword: string,
  cb: Function
) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

// Create User Model.
export const regionAdmin = model<IRegionAdmin>("regionAdmin", schema);
