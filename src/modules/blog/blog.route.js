import express from "express";
import { userToken } from "../../middleware/auth.js";
import { validatioin } from "../../middleware/validation.js";
import * as blogControler from "./blog.controler.js";
import { blogSchema } from "./blog.validation.js";

const blogRoute = express.Router();

blogRoute.post(
  "/addblog",
  userToken,
  validatioin(blogSchema),
  blogControler.addBlog
);
blogRoute.put(
  "/update",
  userToken,
  validatioin(blogSchema),
  blogControler.updateBlog
);
blogRoute.delete("/delete", userToken, blogControler.deleteProduct);
blogRoute.get("/owner", userToken, blogControler.getBlogsWithOwner);
blogRoute.get("/id", userToken, blogControler.getBlogWitId);
export default blogRoute;
