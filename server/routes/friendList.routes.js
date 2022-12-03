const router = require("express").Router();
const { isLoggedIn } = require("../middlewares/auth.middlewares");
const { getAllFriendList, insertFriendList, deleteFriendList, getOneFriendList, editFriendList } = require("../controller/FriendListController");

router.get("/", isLoggedIn, getAllFriendList);

router.post("/create", isLoggedIn, insertFriendList);

router.post("/delete/:id", isLoggedIn, deleteFriendList);

router.get("/:id", isLoggedIn, getOneFriendList);

router.post("/:id", isLoggedIn, editFriendList);

module.exports = router;
