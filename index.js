import express from "express";
import connections from "./dataBase/dbConections.js";
import blogRoute from "./src/modules/blog/blog.route.js";
import userRoute from "./src/modules/users/users.route.js";

const app = express();

connections();
app.use(express.json());

app.use("/user", userRoute);
app.use("/blog", blogRoute);

app.listen(3000, () => console.log("server is runnig "));
