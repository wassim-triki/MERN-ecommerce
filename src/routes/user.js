import express from "express"
import { googleSignIn, signup, signin } from "../controllers/user.js"
const router = express.Router()

router.post("/signup", signup)
router.post("/signin", signin)
router.post("/googleSignIn", googleSignIn)

export default router
