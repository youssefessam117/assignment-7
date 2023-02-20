import express from "express";
import { userToken } from "../../middleware/auth.js";
import { validatioin } from "../../middleware/validation.js";
import { signinSchema, signupSchema } from "./user.valedateSchema.js";
import * as userControler from "./users.controler.js";

const userRoute = express.Router();

userRoute.post("/signup", validatioin(signupSchema), userControler.signUp);
userRoute.post("/signin", validatioin(signinSchema), userControler.signIn);
userRoute.put("/update", userToken, userControler.updateUser);
userRoute.delete("/delete", userToken, userControler.deleteUser);
userRoute.post("/getuserdata", userToken, userControler.getUserData);

export default userRoute;
//
