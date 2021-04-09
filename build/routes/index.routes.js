"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexRouter = void 0;
const express_1 = require("express");
const indexController_1 = require("../controllers/indexController");
class IndexRouter {
    constructor() {
        this.indexCtrl = new indexController_1.IndexController();
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.get("/", this.indexCtrl.index);
        this.router.get("/primes/:prime_count", this.indexCtrl.primes);
        this.router.post("/add", this.indexCtrl.add);
        this.router.post("/subtract", this.indexCtrl.subtract);
    }
}
exports.IndexRouter = IndexRouter;
//# sourceMappingURL=index.routes.js.map