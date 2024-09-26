const router = require("express").Router();

const {
  signUp,
  logIn,
  getAllUsers,
} = require("../../controller/userController/userController");

router.post("/signUp", signUp);
router.post("/logIn", logIn);
router.delete("/delete/:userid", deleteuser);
router.put("/update/:userid", updateUser);
router.put("/updatePassword/:userid", updatePassword);
router.get("/getAllUsers", getAllUsers);

module.exports = router;
