const express = require("express");
const router = express.Router();

const { isAuthenticatedUser} = require("../middlewares/auth");
const {
    getUserProfile,
  } = require("../controllers/user");

  const {
    generateToken, processPayment
  } = require("../controllers/braintree");

router.get('/braintree/getToken/user/:id', isAuthenticatedUser, generateToken)
router.post(
    "/braintree/payment/user/:id",
    isAuthenticatedUser,
    processPayment
);

router.param('userId', getUserProfile)
module.exports = router;