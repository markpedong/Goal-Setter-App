import { Request, Response } from "express";
const asyncHandler = require("express-async-handler");

//@desc Get Goals
//@route GET /api/goals
//@access Private
const getGoals = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).send({ message: "Get Goals" });
});

//@desc Set Goals
//@route POST /api/goals
//@access Private
const setGoals = asyncHandler(async (req: Request, res: Response) => {
  console.log(req.body);
  if (!req.body.text) {
    res.status(400);

    throw new Error("Please add a text field");
  }

  res.status(200).send({ message: "Set Goals" });
});

//@desc Update Goals
//@route PUT /api/goals/:id
//@access Private
const updateGoals = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).send({ message: `Update goal ${req.params.id}` });
});

//@desc Delete Goals
//@route DELETE /api/goals/:id
//@access Private
const deleteGoals = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).send({ message: `Delete goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
