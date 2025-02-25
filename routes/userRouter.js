const { registerUser, login, verifyEmail, resendVerificationEmail, forgotPassword, loginUser, changePassword, changeUserToAdmin } = require("../controllers/userController");
const { authenticate, adminAuth2, adminAuth } = require("../middleware/authentication");

const router = require("express").Router();


router.post("/register", registerUser)

router.get("/user-verify/:token", verifyEmail)

// router.post("/login", login)

router.post("/login", loginUser)

router.post("/make_admin/:userId", adminAuth, changeUserToAdmin)


router.post("/forgot_password", authenticate, adminAuth2, forgotPassword)


router.post("/resend-verification", resendVerificationEmail)

router.post("/change-password", authenticate, changePassword)


module.exports = router;