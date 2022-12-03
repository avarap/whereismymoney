const router = require("express").Router();
const { isLoggedIn } = require("../middlewares/auth.middlewares");

const { getAllCashFlow, insertCashFlow, deleteCashFlow, getOneCashFlow, editCashFlow } = require("../controller/cashFlowController");

router.get("/", isLoggedIn, getAllCashFlow);

router.post("/create", isLoggedIn, insertCashFlow);

router.post("/delete/:id", isLoggedIn, deleteCashFlow);

router.get("/:id", isLoggedIn, getOneCashFlow);

router.post("/:id", isLoggedIn, editCashFlow);

module.exports = router;
