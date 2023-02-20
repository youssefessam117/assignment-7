import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
  content: String,
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
});

const blogModel = mongoose.model("blog", blogSchema);

export default blogModel;
