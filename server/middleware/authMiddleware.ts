import { Request, Response, NextFunction } from "express";

const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protect = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      try {
        //Get token from Header
        token = req.headers.authorization.split(" ")[1];

        //Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        //Get user from the Token
        (<any>req).user = await User.findById(decoded.id).select("-password");

        next();
      } catch (error) {
        console.log(error);
        res.status(401);
        throw new Error("Please authenticate");
      }
    }

    if (!token) {
      res.status(401);
      throw new Error("Not authorized, no token");
    }
  }
);

module.exports = {
  protect,
};
