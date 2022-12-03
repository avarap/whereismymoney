const User = require("../models/User.model");
//const Cashflow = require("../models/Cashflow.model");
const FriendList = require("../models/FriendList.model");

const SuccesMessage = "Success";
const NoDataFoundMessage = "Data not found";
const IdUsedMessage = "The Id is already in use.";

exports.getAllFriendList = async (req, res, next) => {
  try {
    const userData = await User.findOne({ googleId: req.user.googleId });
    if (!userData.googleId) {
      res.json({ message: NoDataFoundMessage });
      return;
    }
    const data = await FriendList.find({ owner: userData._id });
    res.json(data);
    return;
  } catch (err) {
    res.json({ message: err.message });
  }
};

exports.insertFriendList = async (req, res, next) => {
  try {
    const userData = await User.findOne({ googleId: req.user.googleId });
    if (!userData.googleId) {
      res.json({ message: NoDataFoundMessage });
      return;
    }
    const data = new FriendList();
    data.alias = req.body.alias;
    data.name = req.body.name;
    data.email = req.body.email;
    data.picture = req.body.picture;
    data.owner = userData._id;
    await data.save();
    res.json({ message: SuccesMessage });
    return;
  } catch (err) {
    if (err.code === 11000) {
      res.json({ message: IdUsedMessage });
      return;
    }
    console.log(err);
  }
};

exports.deleteFriendList = async (req, res, next) => {
  const id = req.params.id;
  try {
    const userData = await User.findOne({ googleId: req.user.googleId });
    if (!userData.googleId) {
      res.json({ message: NoDataFoundMessage });
      return;
    }
    const data = await FriendList.findByIdAndRemove(id);
    res.json({ message: SuccesMessage });
    return;
  } catch (err) {
    res.json({ message: err.message });
  }
};

exports.getOneFriendList = async (req, res, next) => {
  try {
    const userData = await User.findOne({ googleId: req.user.googleId });
    if (!userData.googleId) {
      res.json({ message: NoDataFoundMessage });
      return;
    }
    const data = await FriendList.findOne({ Owner: userData._id, _id: req.params.id });
    res.json(data);
  } catch (err) {
    res.json({ message: err.message });
  }
};

exports.editFriendList = async (req, res, next) => {
  try {
    const userData = await User.findOne({ googleId: req.user.googleId });
    if (!userData.googleId) {
      res.json({ message: NoDataFoundMessage });
      return;
    }
    const data = await FriendList.findOne({ Owner: userData._id, _id: req.params.id });
    data.alias = req.body.alias;
    data.name = req.body.name;
    data.email = req.body.email;
    data.picture = req.body.picture;
    await data.save();
    res.json({ message: SuccesMessage });
    return;
  } catch (err) {
    res.json({ message: err.message });
  }
};
