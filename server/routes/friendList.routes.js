const router = require("express").Router();


const User = require("../models/User.model");
//const Cashflow = require("../models/Cashflow.model");
const FriendList = require("../models/FriendList.model");
const { isLoggedIn } = require("../middlewares/auth.middlewares");


const SuccesMessage = "Success";
const NoDataFoundMessage = "Data not found";
const IdUsedMessage = "The Id is already in use.";

router.get("/", isLoggedIn, async (req, res, next) => {
  try {
    const userData = await User.findOne({ googleId: req.user.googleId });
    const data = await FriendList.find({ owner: userData._id });

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
  try {
    const data = new FriendList();

    data.alias = req.body.alias;
    data.name = req.body.name;
    data.email = req.body.email;
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
    const data = await FriendList.findByIdAndRemove(id);
    res.json({ message: SuccesMessage });
    return;
  } catch (err) {
    res.json({ message: err.message });
  }
});

router.get("/:id", isLoggedIn, async (req, res, next) => {
  try {
    const data = await FriendList.findOne({ Owner: req.user._id, _id: req.params.id });
    res.json(data);
  } catch (err) {
    res.json({ message: err.message });
  }
});

router.post("/:id", isLoggedIn, async (req, res, next) => {
  try {
    const data = await FriendList.findOne({ Owner: req.user._id, _id: req.params.id });

    data.alias = req.body.alias;
    data.name = req.body.name;
    data.email = req.body.email;
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
