const express = require("express");
const router = express.Router();
const {
  getUserById,
  getUsers,
  addUsers,
  updateUser,
  deleteUser,
} = require("../controllers/user");
const { validateId } = require("../middlewares/validateId");
const { validateUser } = require("../validations/user");

router.get("/:id", validateId, getUserById);
router.get("/", getUsers);

router.post("/", [validateUser, addUsers]);

router.put("/:id", validateId, validateUser, updateUser);

router.delete("/:id", validateId, deleteUser);

module.exports = router;
