const { Router } = require("express");
const { Product, User, Review } = require("../db");
const router = Router();

router.post("/review", async (req, res, next) => {
  const { rating, review, orderId  } = req.body;
  const { userId, productId } = req.query;
  try {

    
    const product = await Product.findOne({
        where: {
            id: productId,
          },
      });

      const user = await User.findOne({
        where: {
            id: userId,
          },
      })

      const newReview = await Review.create({
          rating,
          review,
          orderId,
      })

        newReview.setUser(user);
        newReview.setProduct(product);

      return res.status(200).send(newReview);
    
  } catch (error) {
    next(error);
  }
});


module.exports = router;