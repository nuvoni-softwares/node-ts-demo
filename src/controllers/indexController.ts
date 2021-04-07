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
      let { value_1, value_2 } = req.body;
      addNumbers(value_1, value_2)
        .then(result => res.json({ result }))
        .catch(next)
    } catch (err) {
      next(err)
    }
  }

  public subtract(req: Request, res: Response, next: NextFunction): void {
    try {
      let { value_1, value_2 } = req.body;
      subtractNumbers(value_1, value_2)
        .then(result => res.json({ result }))
        .catch(next)
    } catch (err) {
      next(err)
    }
  }

}