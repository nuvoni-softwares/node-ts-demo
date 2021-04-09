import { NextFunction, Request, Response } from "express";
import path from "path";
import { addNumbers, subtractNumbers, isPrime } from "../services/numbers";
// import os from 'os';

export class IndexController {

  public index(req: Request, res: Response, next: NextFunction): void {
    try {
      res.sendFile(path.join(__dirname + '/../../public/logo.html'));
    } catch (err) {
      next(err)
    }
  }

  public primes(req: Request, res: Response, next: NextFunction): void {
    try {
      const prime_count = parseInt(req.params.prime_count);
      let count = 0;

      if (!prime_count) throw Error('Not a number')

      for (let i = 0; i < prime_count; i++)
        if (isPrime(i)) count++

      res.json({ primeCount: count })
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