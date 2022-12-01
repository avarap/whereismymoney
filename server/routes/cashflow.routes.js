const router = require("express").Router();

const User = require("../models/User.model");
const Cashflow = require("../models/Cashflow.model");
// import FriendList from "../models/FriendList.model";
const {isLoggedIn} = require("../middlewares/auth.middlewares");

const SuccesMessage = "Success";
const NoDataFoundMessage = "Data not found";
const IdUsedMessage = "The Id is already in use.";

router.get("/", isLoggedIn, async (req, res, next) => {
  try {
    const userData = await User.findOne({ googleId: req.user.googleId });
    const data = await Cashflow.find({ owner: userData._id });

    if (!userData.googleId) {
      res.json({ message: NoDataFoundMessage });
      return;
    }
    res.json(data);
    return;
  } catch (err) {
    res.json({ message: err.message });
  }
});

router.post("/create", isLoggedIn, async (req, res, next) => {
  //console.log(req.body);
  try {
    const data = new Cashflow();

    data.valueDate = req.body.valueDate;
    data.description = req.body.description;
    data.category = req.body.category;
    data.totalAmount = req.body.totalAmount;
    data.overall = [];
    data.overall.push({ percentage: 100, paid: "True", user: req.user._id });
    data.picture = req.body.picture;
    data.owner = req.user._id;

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
});

router.post("/delete/:id", isLoggedIn, async (req, res, next) => {
  const id = req.params.id;
  try {
    const data = await Cashflow.findByIdAndRemove(id);
    res.json({ message: SuccesMessage });
    return;
  } catch (err) {
    res.json({ message: err.message });
  }
});

router.get("/:id", isLoggedIn, async (req, res, next) => {
  try {
    const data = await Cashflow.findOne({ Owner: req.user._id, _id: req.params.id });
    res.json(data);
  } catch (err) {
    res.json({ message: err.message });
  }
});

router.post("/:id", isLoggedIn, async (req, res, next) => {
  try {
    const data = await Cashflow.findOne({ Owner: req.user._id, _id: req.params.id });

    data.valueDate = req.body.valueDate;
    data.description = req.body.description;
    data.totalAmount = req.body.totalAmount;
    data.overall = [];
    data.overall.push({ percentage: 100, paid: "True", user: req.user._id });
    data.picture = req.body.picture;
    data.owner = req.user._id;

    await data.save();

    res.json({ message: SuccesMessage });
    return;
  } catch (err) {
    res.json({ message: err.message });
  }
});

module.exports = router;
