const router = require("express").Router();
const stripe = require("stripe")("sk_test_51L5al4CupuSOePXhZOzd5TfjMEWJjRZKZDIcAerdNcUQCCPYx8U29Jh1F6pYRw4h9khyPP8FDMTYXpBE0OyMoLCV00fRw7vAa9");

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;