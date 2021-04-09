import { NextFunction, Request, Response } from "express";
import path from "path";
import { addNumbers, subtractNumbers } from "../services/numbers"

export class IndexController {

  public index(req: Request, res: Response, next: NextFunction): void {
    try {
      res.sendFile(path.join(__dirname + '/../../public/logo.html'));
    } catch (err) {
      next(err)
    }
  }

  public add(req: Request, res: Response, next: NextFunction): void {
    try {
      const { value_1, value_2 } = req.body;
      const result = addNumbers(value_1, value_2)
      res.json({ result })
    } catch (err) {
      next(err)
    }
  }

  public subtract(req: Request, res: Response, next: NextFunction): void {
    try {
      const { value_1, value_2 } = req.body;
      const result = subtractNumbers(value_1, value_2)
      res.json({ result })
    } catch (err) {
      next(err)
    }
  }

}