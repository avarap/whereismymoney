const router = require("express").Router();
const { isLoggedIn } = require("../middlewares/auth.middlewares");

const { getAllCashFlow, insertCashFlow, deleteCashFlow, getOneCashFlow, editCashFlow, getOverview} = require("../controller/cashFlowController");

router.get("/", isLoggedIn, getAllCashFlow);

router.get("/overview", isLoggedIn, getOverview);

router.get("/:id", isLoggedIn, getOneCashFlow);

router.post("/create", isLoggedIn, insertCashFlow);

router.post("/delete/:id", isLoggedIn, deleteCashFlow);

router.post("/:id", isLoggedIn, editCashFlow);

module.exports = router;
