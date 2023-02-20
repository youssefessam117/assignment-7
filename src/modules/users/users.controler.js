import userModel from "./../../../dataBase/models/userTabls.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
  const { name, email, password, age } = req.body;
  const isExist = await userModel.findOne({ email });
  if (isExist) {
    res.send({ message: "email already exist " });
  } else {
    bcrypt.hash(password, 8, async (err, hash) => {
      // Store hash in your password DB.
      const user = await userModel.insertMany({
        name,
        email,
        password: hash,
        age,
      });
      res.json({ message: "success", user });
      console.log(user);
    });
  }
};

// signin
export const signIn = async (req, res) => {
  const { email, password } = req.body;
  const isExist = await userModel.findOne({ email });
  //   const { _id, name, email } = isExist;
  if (isExist) {
    const matchPassword = bcrypt.compareSync(password, isExist.password);
    if (matchPassword) {
      var token = jwt.sign(
        { name: isExist.name, _id: isExist._id, email },
        "assignment 7"
      );
      res.json({ message: `welcome ${isExist.name}`, token });
    } else {
      res.json({ message: `password incorect ` });
    }
  } else {
    res.json({ message: "email not exist " });
  }
};
// update user
export const updateUser = async (req, res) => {
  const { name, email, age } = req.body;
  const update = await userModel.findByIdAndUpdate(
    { _id: req._id },
    { email, age, name },
    { new: true }
  );
  res.json({ message: "success", update });
  //   const isExist = await userModel.findById({ _id: req._id });
  //   if (isExist) {
  //   } else {
  //     res.send({ message: "wrong id" });
  //   }
};
// deleteUser
export const deleteUser = async (req, res) => {
  const deleted = await userModel.deleteOne({ _id: req._id });
  res.json({ message: "success", deleted });
};

// // get user data

export const getUserData = async (req, res) => {
  const user = await userModel.findById({ _id: req._id });
  res.json(user);
};
