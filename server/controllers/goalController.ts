import { Request, Response } from "express";
const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");
const User = require("../models/userModel");

//@desc Get Goals
//@route GET /api/goals
//@access Private
const getGoals = asyncHandler(async (req: Request, res: Response) => {
  const goals = await Goal.find({ user: (<any>req).user.id });

  res.status(200).send(goals);
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

  const goal = await Goal.create({
    text: req.body.text,
    user: (<any>req).user.id,
  });

  res.status(200).send(goal);
});

//@desc Update Goals
//@route PUT /api/goals/:id
//@access Private
const updateGoals = asyncHandler(async (req: Request, res: Response) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);

    throw new Error("Goal not found");
  }

  const user = await User.findById((<any>req).user.id);

  //Check for user
  if (!user) {
    res.status(401);

    throw new Error("User not found");
  }

  //Make sure the logged in user is the owner of the goal
  if (goal.user.toString() !== user.id) {
    res.status(401);

    throw new Error("User Not authorized");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).send(updatedGoal);
});

//@desc Delete Goals
//@route DELETE /api/goals/:id
//@access Private
const deleteGoals = asyncHandler(async (req: Request, res: Response) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);

    throw new Error("Goal not found");
  }

  const user = await User.findById((<any>req).user.id);

  //Check for user
  if (!user) {
    res.status(401);

    throw new Error("User not found");
  }

  //Make sure the logged in user is the owner of the goal
  if (goal.user.toString() !== user.id) {
    res.status(401);

    throw new Error("User Not authorized");
  }

  await goal.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
