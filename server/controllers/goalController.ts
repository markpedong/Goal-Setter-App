import { Request, Response } from "express";

//@desc Get Goals
//@route GET /api/goals
//@access Private
const getGoals = (req: Request, res: Response) => {
  res.status(200).send({ message: "Get Goals" });
};

//@desc Set Goals
//@route POST /api/goals
//@access Private
const setGoals = (req: Request, res: Response) => {
  res.status(200).send({ message: "Set Goals" });
};

//@desc Update Goals
//@route PUT /api/goals/:id
//@access Private
const updateGoals = (req: Request, res: Response) => {
  res.status(200).send({ message: `Update goal ${req.params.id}` });
};

//@desc Delete Goals
//@route DELETE /api/goals/:id
//@access Private
const deleteGoals = (req: Request, res: Response) => {
  res.status(200).send({ message: `Delete goal ${req.params.id}` });
};

// module.exports = {
//   getGoals,
//   setGoals,
//   updateGoals,
//   deleteGoals,
// };

export { getGoals, setGoals, updateGoals, deleteGoals };
