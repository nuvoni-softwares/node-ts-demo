"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexController = void 0;
const path_1 = __importDefault(require("path"));
const numbers_1 = require("../services/numbers");
class IndexController {
    index(req, res, next) {
        try {
            res.sendFile(path_1.default.join(__dirname + '/../../public/logo.html'));
        }
        catch (err) {
            next(err);
        }
    }
    primes(req, res, next) {
        try {
            const prime_count = parseInt(req.params.prime_count);
            let count = 0;
            if (!prime_count)
                throw Error('Not a number');
            for (let i = 0; i < prime_count; i++)
                if (numbers_1.isPrime(i))
                    count++;
            res.json({ primeCount: count });
        }
        catch (err) {
            next(err);
        }
    }
    add(req, res, next) {
        try {
            const { value_1, value_2 } = req.body;
            const result = numbers_1.addNumbers(value_1, value_2);
            res.json({ result });
        }
        catch (err) {
            next(err);
        }
    }
    subtract(req, res, next) {
        try {
            const { value_1, value_2 } = req.body;
            const result = numbers_1.subtractNumbers(value_1, value_2);
            res.json({ result });
        }
        catch (err) {
            next(err);
        }
    }
}
exports.IndexController = IndexController;
//# sourceMappingURL=indexController.js.map