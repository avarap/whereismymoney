// const router = require("express").Router();

// const User = require("../models/User.model");
// const Cashflow = require("../models/Cashflow.model");
// const FriendList = require("../models/FriendList.model");
// const { isLoggedIn } = require("../middlewares/auth.middlewares");

// router.get("/", isLoggedIn, async (req, res, next) => {
//   try {
//     const userData = await User.findOne({ googleId: req.user.googleId });
//     const data = await Cashflow.find({ owner: userData._id });

//     if (!userData.googleId) {
//       res.json({ message: "Data not found" });
//       return;
//     }
//     res.json(data);
//     return;
//   } catch (err) {
//     res.json({ message: err.message });
//   }
// });

// router.post("/create", isLoggedIn, async (req, res, next) => {
//   //console.log(req.body);
//   try {
//     const data = new Cashflow();

//     // valueDate: Date,
//     // description: String,
//     // totalAmount: Number,
//     // overall: [
//     //   {
//     //     percentage: Number,
//     //     paid: Boolean,
//     //     user: { type: Schema.Types.ObjectId, ref: "User" },
//     //   },
//     // ],
//     // picture: String,
//     // owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
//     data.referenceID = req.body.referenceID;


//     data.owner = req.user._id;

//     await data.save();
//     res.json({ message: "Success" });
//     return;
//   } catch (err) {
//     if (err.code === 11000) {
//       res.json({ message: " The Id is already in use." });
//       return;
//     }
//     console.log(err);
//   }
// });

// router.post("/delete/:id", isLoggedIn, async (req, res, next) => {
//   const id = req.params.id;
//   try {
//     const data = await Cashflow.findByIdAndRemove(id);
//     res.json({ message: "Success" });
//     return;
//   } catch (err) {
//     res.json({ message: err.message });
//   }
// });

// router.get("/:id", isLoggedIn, async (req, res, next) => {
//   try {
//     const data = await Cashflow.findOne({ Owner: req.user._id, _id: req.params.id });
//     res.json(data);
//   } catch (err) {
//     res.json({ message: err.message });
//   }
// });

// router.post("/:id", isLoggedIn, async (req, res, next) => {
//   try {
//     const data = await Cashflow.findOne({ Owner: req.user._id, _id: req.params.id });

//     data.address.street = req.body.street;


//     await data.save();

//     res.json({ message: "Success" });
//     return;
//   } catch (err) {
//     res.json({ message: err.message });
//   }
// });

// module.exports = router;
