import bcrypt from "bcryptjs"
import Jwt from "jsonwebtoken"

import User from "../models/user.js"

export const signin = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({ email })

    if (!user) return res.status(404).json({ message: "user doesn't exist" })

    const isPasswordCorrect = await bcrypt.compare(password, user.password)

    if (!isPasswordCorrect) return res.status(400).json({ message: "password isn't correct" })

    const token = Jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    )

    res.status(200).json({ result: user, token })
  } catch (error) {
    res.status(500).json({ message: "something went wrong" })
    console.log(error)
  }
}

export const signup = async (req, res) => {
  const { email, password, username } = req.body
  try {
    const user = await User.findOne({ email })

    if (user) {
      return res.status(400).json({ message: "User Already Existed" })
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    const result = await User.create({
      email,
      password: hashedPassword,
      username: username,
    })

    console.log(result)

    const token = Jwt.sign(
      {
        id: result._id,
        email: result.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    )

    res.status(201).json({ result, token })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "something went wrong" })
  }
}

export const googleSignIn = async (req, res) => {
  const { email, userName, token, googleId, userImage } = req.body
  try {
    const olduser = await User.findOne({ email })
    if (olduser) {
      const result = {
        _id: olduser._id.toString(),
        email,
        userName,
        userImage,
      }
      return res.status(200).json({ result, token })
    }
    const result = await User.create({
      email,
      userName,
      userImage,
      googleId,
    })
    res.status(200).json({ result, token })
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" })
    console.log(error)
  }
}
