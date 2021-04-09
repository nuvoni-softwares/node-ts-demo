"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPrime = exports.subtractNumbers = exports.addNumbers = void 0;
const addNumbers = (value_1, value_2) => {
    try {
        const v1 = parseFloat(value_1.toFixed(2)), v2 = parseFloat(value_2.toFixed(2));
        return v1 + v2;
    }
    catch (e) {
        throw e;
    }
};
exports.addNumbers = addNumbers;
const subtractNumbers = (value_1, value_2) => {
    try {
        const v1 = parseFloat(value_1.toFixed(2)), v2 = parseFloat(value_2.toFixed(2));
        return v1 - v2;
    }
    catch (e) {
        throw e;
    }
};
exports.subtractNumbers = subtractNumbers;
const isPrime = (num) => {
    try {
        for (let i = 2; i < num; i++)
            if (num % i === 0) {
                return false;
            }
        return num > 1;
    }
    catch (e) {
        throw e;
    }
};
exports.isPrime = isPrime;
//# sourceMappingURL=numbers.js.map