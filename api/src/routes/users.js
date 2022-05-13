const { Router } = require("express");
const { User } = require("../db");
const router = Router();

router.post("/", async (req, res, next) => {
  const { userName, email, password, firstName, lastName, phone, role } =
    req.body;

  try {
    const newUser = await User.create({
      userName,
      email,
      password,
      firstName,
      lastName,
      phone,
      role,
    });

    res.status(200).send(newUser);
  } catch (error) {
    next(error);
  }
});



router.get("/", async (req, res, next) => {

  const {firstName} = req.query

  try{
    if(firstName) {

      const findByName = await User.findAll()
      const found = await findByName?.filter(e => e.firstName.toLowerCase().includes(firstName.toLowerCase()));

      
      found.length ? res.status(200).json(found) : res.json("User not found, please try another search");

    } else {
      const findByName = await User.findAll()
      return res.status(200).send(findByName)
    }
  } catch(error){
    res.send(error)
  }
  
})

router.get("/:userId", async (req, res) => {

  const {userId} = req.params

  try {
    if(userId) {
      const findById = await User.findOne({
        where: {
          id: userId
        }
      })
  
      return res.send(findById)
  
    } else{
      return res.status(404).send("User not found")
    }
  } catch(error){
    res.send(error)
  }
})

module.exports = router;