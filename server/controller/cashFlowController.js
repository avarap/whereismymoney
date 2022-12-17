const User = require("../models/User.model");
const Cashflow = require("../models/Cashflow.model");
// import FriendList from "../models/FriendList.model";

const SuccesMessage = "Success";
const NoDataFoundMessage = "Data not found";
const IdUsedMessage = "The Id is already in use.";

exports.getAllCashFlow = async (req, res, next) => {
  try {
    const userData = await User.findOne({ googleId: req.user.googleId });
    if (!userData.googleId) {
      res.json({ message: NoDataFoundMessage });
      return;
    }
    const data = await Cashflow.find({ owner: userData._id });
    res.json(data);
    return;
  } catch (err) {
    res.json({ message: err.message });
  }
};

exports.getOverview = async (req, res, next) => {
  try {
    const userData = await User.findOne({ googleId: req.user.googleId });
    if (!userData.googleId) {
      res.json({ message: NoDataFoundMessage });
      return;
    }
    //const data = await Cashflow.find({ owner: userData._id });
    //const aggCursor = await Cashflow.aggregate([{ $group: { _id: "$category", total: { $sum: "$totalAmount" } } }]);
    const data = await Cashflow.aggregate([{ $match: { owner: userData._id } }, { $group: { _id: { year: { $year: "$valueDate" }, month: { $month: "$valueDate" }, category: "$category" }, totalCategory: { $sum: "$totalAmount" } } }]);
    res.json(data);
    return;
  } catch (err) {
    res.json({ message: err.message });
  }
};

exports.insertCashFlow = async (req, res, next) => {
  try {
    const userData = await User.findOne({ googleId: req.user.googleId });
    if (!userData.googleId) {
      res.json({ message: NoDataFoundMessage });
      return;
    }
    const data = new Cashflow();
    data.valueDate = req.body.valueDate;
    data.description = req.body.description;
    data.category = req.body.category;
    data.totalAmount = req.body.totalAmount;
    data.overall = [];
    data.overall.push({ percentage: 100, paid: true, user: userData._id });
    data.picture = req.body.picture;
    data.owner = userData._id;
    await data.save();
    res.json({ message: SuccesMessage, ...data });
    return;
  } catch (err) {
    if (err.code === 11000) {
      res.json({ message: IdUsedMessage });
      return;
    }
    console.log(err);
  }
};

exports.deleteCashFlow = async (req, res, next) => {
  const id = req.params.id;
  try {
    const userData = await User.findOne({ googleId: req.user.googleId });
    if (!userData.googleId) {
      res.json({ message: NoDataFoundMessage });
      return;
    }
    const data = await Cashflow.findByIdAndRemove(id);
    res.json({ message: SuccesMessage });
    return;
  } catch (err) {
    res.json({ message: err.message });
  }
};

exports.getOneCashFlow = async (req, res, next) => {
  try {
    const userData = await User.findOne({ googleId: req.user.googleId });
    if (!userData.googleId) {
      res.json({ message: NoDataFoundMessage });
      return;
    }
    const data = await Cashflow.findOne({ Owner: userData._id, _id: req.params.id });
    res.json(data);
  } catch (err) {
    res.json({ message: err.message });
  }
};

exports.editCashFlow = async (req, res, next) => {
  try {
    const userData = await User.findOne({ googleId: req.user.googleId });
    if (!userData.googleId) {
      res.json({ message: NoDataFoundMessage });
      return;
    }
    const data = await Cashflow.findOne({ Owner: userData._id, _id: req.params.id });
    data.valueDate = req.body.valueDate;
    data.description = req.body.description;
    data.totalAmount = req.body.totalAmount;
    data.overall = [];
    data.overall.push({ percentage: 100, paid: true, user: userData._id });
    data.picture = req.body.picture;
    await data.save();
    res.json({ message: SuccesMessage });
    return;
  } catch (err) {
    res.json({ message: err.message });
  }
};
