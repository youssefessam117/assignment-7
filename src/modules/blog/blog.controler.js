import blogModel from "./../../../dataBase/models/blogTable.modle.js";

// // add
export const addBlog = async (req, res) => {
  const { content } = req.body;
  const blog = await blogModel.insertMany({
    content,
    owner: req._id,
  });
  res.json({ message: "sucsses", blog });
};

// update
export const updateBlog = async (req, res) => {
  const { content, _id } = req.body;
  const blog = await blogModel.findById({ _id });
  if (blog) {
    const updeted = await blogModel.findByIdAndUpdate(
      { _id },
      { content },
      { new: true }
    );
    res.json({ message: "sucsses", updeted });
  } else {
    res.json({ message: "product not found " });
  }
};

// // delete
export const deleteProduct = async (req, res) => {
  const { _id } = req.body;
  const blog = await blogModel.findById({ _id });
  if (blog) {
    const deleted = await blogModel.findByIdAndDelete({ _id });
    res.json({ message: "deleted", deleted });
  } else {
    res.json({ message: "product not found " });
  }
};

// // get all blogs with owner's

export const getBlogsWithOwner = async (req, res) => {
  const blog = await blogModel.find().populate("owner");
  res.json({ message: "sucsses", blog });
};

// // get with id
export const getBlogWitId = async (req, res) => {
  const { _id } = req.body;
  const blog = await blogModel.findById(_id);
  res.json({ message: "sucsses", blog });
};
